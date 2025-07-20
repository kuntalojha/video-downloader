// src/pages/Video.jsx
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Video = () => {
  const location = useLocation();
  const videoUrl = location.state?.videoUrl;
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!videoUrl) return;

    axios
      .post('http://localhost:5000/api/download', { url: videoUrl })
      .then((res) => setData(res.data))
      .catch((err) => {
        console.error(err);
        setError('Failed to fetch video data.');
      });
  }, [videoUrl]);

  if (error) return <div className="text-red-600">{error}</div>;

  if (!data) return <div>Loading...</div>;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Download Links</h1>
      {data.map((item, idx) => (
        <div key={idx} className="mb-4 p-4 border rounded">
          <p>
            <strong>Quality:</strong> {item.quality || item.type || 'N/A'}
          </p>
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Download
          </a>
        </div>
      ))}
    </div>
  );
};

export default Video;
