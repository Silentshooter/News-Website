// src/Components/Newsapp.js
import React, { useState, useEffect } from 'react';
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
  const API_KEY = "ec70314b21d7451c9714c1f0e8b684a4";

  const getData = async (category = search) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${category}&apiKey=${API_KEY}`
      );
      const jsonData = await response.json();
      console.log(jsonData.articles);
      setNewsData(jsonData.articles || []);
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchInitialData = async () => {
      // Ensure the loading screen is visible for at least 2 seconds for a polished UX
      const minimumLoadingTime = new Promise((resolve) => setTimeout(resolve, 2000));

      try {
        await Promise.all([getData(), minimumLoadingTime]); // Wait for both data fetch and minimum time
      } catch (error) {
        console.error("Error during initial load:", error);
      } finally {
        setIsInitialLoading(false); // Hide the initial loading screen
      }
    };

    fetchInitialData();
  }, []);

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
                  <li><a href="#" onClick={() => handleCategoryClick("world")}>World News</a></li>
                  <li><a href="#" onClick={() => handleCategoryClick("business")}>Business</a></li>
                  <li><a href="#" onClick={() => handleCategoryClick("technology")}>Technology</a></li>
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
                  <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
                </div>
                <div className="footer-social">
                  <a href="#" aria-label="Facebook">Facebook</a> | <a href="#" aria-label="Twitter">Twitter</a> | <a href="#" aria-label="Instagram">Instagram</a>
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