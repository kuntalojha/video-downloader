// import React from 'react';
// import { useLocation } from 'react-router-dom';

// const VideoPage = () => {
//   const location = useLocation();
//   const videoUrl = location.state?.videoUrl;

//   return (
//     <div className="h-full mt-50 flex justify-center items-center p-5">
//       <p>{videoUrl}</p>
//     </div>
//   );
// };

// export default VideoPage;

import React from 'react';
import { useLocation } from 'react-router-dom';
import useURL from '../hooks/useURL'; // adjust path if needed

const VideoPage = () => {
  const location = useLocation();
  const videoUrl = location.state?.videoUrl;

  useURL(videoUrl); // This will trigger the download logic

  return (
    <div className="h-full mt-50 flex justify-center items-center p-5">
      <p className="break-all">{videoUrl}</p>
    </div>
  );
};

export default VideoPage;
