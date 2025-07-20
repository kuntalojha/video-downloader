// // hooks/useURL.js

// import { igdl, youtube, fbdown } from 'btch-downloader';
// import { useLocation } from 'react-router-dom';

// const location = useLocation();
// const videoUrl = location.state?.videoUrl;

// const urlType = function detectPlatform(videoUrl) {
//   if (videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be')) {
//     return 'YouTube';
//   } else if (videoUrl.includes('facebook.com') || videoUrl.includes('fb.com')) {
//     return 'Facebook';
//   } else if (videoUrl.includes('instagram.com')) {
//     return 'Instagram';
//   } else {
//     return 'Unknown';
//   }
// };

// switch (urlType) {
//   case 'YouTube':
//     youtube(videoUrl)
//       .then((data) => console.log(data))
//       .catch((err) => console.error(err)); // JSON
//     break;
//   case 'Facebook':
//     fbdown(url)
//       .then((data) => console.log(data))
//       .catch((err) => console.error(err)); // JSON
//     break;
//   case 'Instagram':
//     igdl(videoUrl)
//       .then((data) => console.log(data))
//       .catch((err) => console.error(err)); // JSON
//     break;

//   default:
//     console.log('Invalid URL');
//     break;
// }

// const url_i =
//   'https://www.instagram.com/p/ByxKbUSnubS/?utm_source=ig_web_copy_link';
// igdl(videoUrl)
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err)); // JSON

// const url_u = 'https://youtube.com/watch?v=C8mJ8943X80';
// youtube(videoUrlurl)
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err)); // JSON

// const url_f = 'https://www.facebook.com/watch/?v=1393572814172251';
// fbdown(url)
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err)); // JSON

// hooks/useURL.js
import { useEffect } from 'react';
import { igdl, youtube, fbdown } from 'btch-downloader';

const useURL = (videoUrl) => {
  useEffect(() => {
    if (!videoUrl) return;

    const platform = detectPlatform(videoUrl);

    switch (platform) {
      case 'YouTube':
        youtube(videoUrl)
          .then((data) => console.log('YouTube data:', data))
          .catch((err) => console.error(err));
        break;

      case 'Facebook':
        fbdown(videoUrl)
          .then((data) => console.log('Facebook data:', data))
          .catch((err) => console.error(err));
        break;

      case 'Instagram':
        igdl(videoUrl)
          .then((data) => console.log('Instagram data:', data))
          .catch((err) => console.error(err));
        break;

      default:
        console.log('Invalid or unsupported URL');
    }
  }, [videoUrl]);
};

// Helper
const detectPlatform = (url) => {
  if (url.includes('youtube.com') || url.includes('youtu.be')) return 'YouTube';
  if (url.includes('facebook.com') || url.includes('fb.com')) return 'Facebook';
  if (url.includes('instagram.com')) return 'Instagram';
  return 'Unknown';
};

export default useURL;
