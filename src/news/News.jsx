import React, { useState, useEffect } from "react";
import "./News.css"; 

export default function LatestNews() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = "2d1eac31ab7480ed36c37f475027e797";
  const API_URL = `https://gnews.io/api/v4/top-headlines?lang=en&country=us&max=10&topic=technology&apikey=${API_KEY}`;

  // Fetch the latest technology news articles
  useEffect(() => {
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch the latest news.");
        }
        return response.json();
      })
      .then((data) => {
        if (data.articles) {
          setNews(data.articles);
        } else {
          setNews([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching news:", err);
        setError("Something went wrong. Please try again later.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="main-content">
      <h1 className="form-title">Latest Technology News</h1>

      {loading && <p>Loading latest news...</p>}
      {error && <p className="error">{error}</p>}

      {!loading && !error && (
        <div className="card-container">
          {news.length > 0 ? (
            news.map((article, index) => (
              <div key={index} className="card">
                <div className="card-img">
                  <img
                    src={article.image || "https://via.placeholder.com/150"}
                    alt={article.title}
                    className="poster"
                  />
                </div>
                <div className="card-content">
                  <h2 className="card-title">{article.title}</h2>
                  <p className="card-date">
                    {new Date(article.publishedAt).toLocaleString()}
                  </p>
                  <p className="card-description">{article.description}</p>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="read-more"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))
          ) : (
            <p>No technology news articles available.</p>
          )}
        </div>
      )}
    </div>
  );
}
