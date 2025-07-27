import React from 'react';

const Card = ({ data }) => {
  console.log(data);

  const readMore = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer'); // Added security options
  };

  // Filter data to only include items with a valid urlToImage
  const filteredData = data.filter((item) => item.urlToImage && item.urlToImage.trim() !== '');

  return (
    <div className="cardContainer">
      {filteredData.length > 0 ? (
        filteredData.map((curItem, index) => (
          <div className="card" key={index}>
            <img src={curItem.urlToImage} alt={curItem.title || 'News Image'} />
            <div className="content">
              <a className="title" href={curItem.url} target="_blank" rel="noopener noreferrer">
                {curItem.title || 'No title available'}
              </a>
              <p>{curItem.description || 'No description available'}</p>
              <button onClick={() => readMore(curItem.url)}>Read More</button>
            </div>
          </div>
        ))
      ) : (
        <p>No news with images available.</p> // Updated message for clarity
      )}
    </div>
  );
};

export default Card;