const axios = require("axios");

export default async function handler(req, res) {
  try {
    const response = await axios.get("https://newsapi.org/v2/top-headlines", {
      params: {
        country: "in",
        category: "general",
        page: 1,
        pageSize: 8,
        apiKey: process.env.NEWS_API_KEY, // ✅ Key must be accessed this way
      },
      headers: {
        "User-Agent": "MyNewsApp/1.0"
      }
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error("NewsAPI Error:", error.message);
    res.status(500).json({ error: error.message });
  }
}
