import React from 'react';

const Card = ({ data }) => {
  console.log(data);

  const readMore = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Optional: filter if you only want articles with images
  const filteredData = data.filter((item) => item.image_url && item.image_url.trim() !== '');

  return (
    <div className="cardContainer">
      {filteredData.length > 0 ? (
        filteredData.map((curItem, index) => (
          <div className="card" key={index}>
            <img
              src={curItem.image_url}
              alt={curItem.title || 'News Image'}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/300x200?text=No+Image';
              }}
            />
            <div className="content">
              <a
                className="title"
                href={curItem.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {curItem.title || 'No title available'}
              </a>
              <p>{curItem.description || 'No description available'}</p>
              <button onClick={() => readMore(curItem.link)}>Read More</button>
            </div>
          </div>
        ))
      ) : (
        <p>No news with images available.</p>
      )}
    </div>
  );
};

export default Card;
