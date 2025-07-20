// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Download = () => {
//   const [submittedUrl, setSubmittedUrl] = useState('');

//   return (
//     <div
//       className="min-h-screen flex justify-center items-center"
//       id="download"
//     >
//       <form
//         className="w-full max-w-md p-6 bg-gray-100 shadow-md rounded"
//         onSubmit={(e) => {
//           e.preventDefault();
//           const url = e.target.url.value;
//           setSubmittedUrl(url);
//           console.log(url);
//           console.log(submittedUrl);
//         }}
//       >
//         <label
//           htmlFor="url"
//           className="block text-sm font-medium text-gray-700 mb-2"
//         >
//           Enter your url
//         </label>
//         <input
//           type="url"
//           id="url"
//           name="url"
//           className="w-full px-3 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring focus:border-blue-300"
//           placeholder="https://example.com/video"
//           required
//         />
//         <Link to={'/video'}>
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition cursor-pointer"
//           >
//             Submit
//           </button>
//         </Link>
//       </form>
//     </div>
//   );
// };

// export default Download;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Download = () => {
  const [submittedUrl, setSubmittedUrl] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = e.target.url.value;
    setSubmittedUrl(url);

    // Pass the URL to next page via state
    navigate('/video', { state: { videoUrl: url } });
  };

  return (
    <div
      className="h-full mt-50 flex justify-center items-center"
      id="download"
    >
      <form
        className="w-full max-w-md p-6 bg-gray-100 shadow-md rounded"
        onSubmit={handleSubmit}
      >
        <label
          htmlFor="url"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Enter your URL
        </label>
        <input
          type="url"
          id="url"
          name="url"
          className="w-full px-3 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring focus:border-blue-300"
          placeholder="https://example.com/video"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Download;
