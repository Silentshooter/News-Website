// src/Components/Newsapp.js
import React, { useState, useEffect, useCallback } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Card from './Card';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Loading from './Loading';

const Newsapp = () => {
  const [search, setSearch] = useState("india");
  const [newsData, setNewsData] = useState([]);
  const [isInitialLoading, setIsInitialLoading] = useState(true); // For initial app load
  const [isLoading, setIsLoading] = useState(false); // For subsequent fetches
  const API_KEY = process.env.REACT_APP_NEWS_API_KEY;


  const getData = useCallback(async (category = search) => {
  setIsLoading(true);
  try {
    const response = await fetch(
      `https://newsdata.io/api/1/news?apikey=${API_KEY}&q=${category}&language=en`
    );
    const jsonData = await response.json();
    setNewsData(jsonData.results || []);
  } catch (error) {
    console.error("Error fetching news:", error);
  } finally {
    setIsLoading(false);
  }
}, [search, API_KEY]);



  useEffect(() => {
  const fetchInitialData = async () => {
    const minimumLoadingTime = new Promise((resolve) => setTimeout(resolve, 2000));
    try {
      await Promise.all([getData(), minimumLoadingTime]);
    } catch (error) {
      console.error("Error during initial load:", error);
    } finally {
      setIsInitialLoading(false);
    }
  };

  fetchInitialData();
}, [getData]); // ✅ Fix warning


  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const handleCategoryClick = (category) => {
    setSearch(category);
    getData(category);
  };

  // Show the loading screen during initial load
  if (isInitialLoading) {
    return <Loading />;
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="site-container">
            {isLoading && <Loading />} {/* For subsequent fetches */}
            <header className="header-layer">
              <div className="header-top">
                <div className="logo">
                  <h1>Trendy News</h1>
                  <p className="tagline">Your Source for the Latest Updates</p>
                </div>
                <div className="searchBar">
                  <input
                    type="text"
                    placeholder="Search News"
                    value={search}
                    onChange={handleInput}
                  />
                  <button onClick={() => getData()} disabled={isLoading}>
                    {isLoading ? 'Searching...' : 'Search'}
                  </button>
                </div>
              </div>
              <nav className="nav-menu">
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link onClick={() => handleCategoryClick("world")}>World News</Link></li>
<li><Link onClick={() => handleCategoryClick("business")}>Business</Link></li>
<li><Link onClick={() => handleCategoryClick("technology")}>Technology</Link></li>

                  <li><Link to="/about-us">About Us</Link></li>
                  <li><Link to="/contact-us">Contact Us</Link></li>
                </ul>
              </nav>
              <div className="breaking-news">
                <span className="breaking-label">Breaking News:</span>
                <p>Global Markets Surge Amid New Trade Agreement – Stay Tuned for Updates!</p>
              </div>
            </header>

            <section className="hero-layer">
              <h2 className="head">Stay Updated with Trendy News</h2>
            </section>

            <section className="category-layer">
              <div className="categoryBtn">
                <button onClick={() => handleCategoryClick("sports")} disabled={isLoading}>Sports</button>
                <button onClick={() => handleCategoryClick("politics")} disabled={isLoading}>Politics</button>
                <button onClick={() => handleCategoryClick("entertainment")} disabled={isLoading}>Entertainment</button>
                <button onClick={() => handleCategoryClick("health")} disabled={isLoading}>Health</button>
                <button onClick={() => handleCategoryClick("fitness")} disabled={isLoading}>Fitness</button>
              </div>
            </section>

            <main className="main-content-layer">
              <Card data={newsData} />
            </main>

            <footer className="footer-layer">
              <div className="footer-content">
                <p>© 2025 Trendy News. All rights reserved.</p>
                <div className="footer-links">
  <Link to="/about-us">About Us</Link> | <Link to="/contact-us">Contact Us</Link> |{' '}
  <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-service">Terms of Service</a>
</div>

                <div className="footer-social">
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">Facebook</a> | 
  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">Twitter</a> | 
  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">Instagram</a>
</div>

              </div>
            </footer>
          </div>
        }
      />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
    </Routes>
  );
};

export default Newsapp;