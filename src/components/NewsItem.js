import React from 'react';

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;

  return (
    <div className="card my-3">
      <div className="card-body position-relative">
        {/* Source Badge */}
        <span
          className="position-absolute top-0 end-0 translate-middle badge rounded-pill bg-primary"
          style={{ zIndex: 1 }}
        >
          {source ? source : "Unknown"}
          <span className="visually-hidden">news source</span>
        </span>

        {/* News Image */}
        <img
          src={imageUrl ? imageUrl : "https://via.placeholder.com/150"}
          className="card-img-top"
          alt="News"
        />

        {/* News Title */}
        <h5 className="card-title">{title}</h5>

        {/* News Description */}
        <p className="card-text">{description}</p>

        {/* Author and Date */}
        <p className="card-text">
          <small className="text-muted">
            By {author ? author : "Unknown"} on {new Date(date).toGMTString()}
          </small>
        </p>

        {/* Read More Button */}
        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
