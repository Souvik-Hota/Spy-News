// src/components/News.js
import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';

const News = ({ category, pageSize, loadingBarRef }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const apiKey = '70e146c779e24c0d89183cbbf58c3fad';

  const fetchNews = async () => {
    loadingBarRef.current?.continuousStart();
    setLoading(true);

    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&page=${page}&pageSize=${pageSize}&apiKey=${apiKey}`;
    let response = await fetch(url);
    let data = await response.json();

    if (!data.articles || data.articles.length === 0) {
      const fallbackQuery = category === 'general' ? 'India' : `${category} India`;
      url = `https://newsapi.org/v2/everything?q=${fallbackQuery}&page=${page}&pageSize=${pageSize}&language=en&sortBy=publishedAt&apiKey=${apiKey}`;
      response = await fetch(url);
      data = await response.json();
    }

    setArticles(data.articles || []);
    setTotalResults(data.totalResults || 0);
    setLoading(false);
    loadingBarRef.current?.complete();
  };

  useEffect(() => {
    setPage(1);
    fetchNews();
    // eslint-disable-next-line
  }, [category]);

  const fetchMoreData = async () => {
    const nextPage = page + 1;
    setPage(nextPage);
    loadingBarRef.current?.continuousStart();

    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&page=${nextPage}&pageSize=${pageSize}&apiKey=${apiKey}`;
    let response = await fetch(url);
    let data = await response.json();

    if (!data.articles || data.articles.length === 0) {
      const fallbackQuery = category === 'general' ? 'India' : `${category} India`;
      url = `https://newsapi.org/v2/everything?q=${fallbackQuery}&page=${nextPage}&pageSize=${pageSize}&language=en&sortBy=publishedAt&apiKey=${apiKey}`;
      response = await fetch(url);
      data = await response.json();
    }

    setArticles((prevArticles) => [...prevArticles, ...data.articles]);
    setTotalResults(data.totalResults || 0);
    loadingBarRef.current?.complete();
  };

  return (
    <div className="container my-4">
      <h2 className="text-center">
        Top {category.charAt(0).toUpperCase() + category.slice(1)} Headlines from India
      </h2>

      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
        loader={<Spinner />}
      >
        <div className="row">
          {articles.map((article, index) => (
            <div className="col-md-4" key={index}>
              <NewsItem
                title={article.title}
                description={article.description}
                imageUrl={article.urlToImage}
                newsUrl={article.url}
                author={article.author}
                date={article.publishedAt}
                source={article.source.name}
              />
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default News;
