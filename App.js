import React, { useState, useEffect } from 'react';
import NewsList from './NewsList';
import './styles.css'

const API_KEY = '9a50dfed2bd043efa9f4e5c1b41a86bc';
const API_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

const App = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setNews(data.articles);
      } catch (error) {
        setError('Error fetching news');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="app">
      <h1 id="news">News Dashboard</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && <NewsList news={news} />}
    </div>
  );
};

export default App;
