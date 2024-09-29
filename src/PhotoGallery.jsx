import React from "react";
import { FaHeart, FaRegComment, FaEllipsisH } from "react-icons/fa";
import { FiUser } from "react-icons/fi";

// Import your actual photos from the local folder (for example, 'images' folder)
import photo1 from "./assets/1.jpg";
import photo2 from "./assets/2.jpg";
import photo3 from "./assets/3.jpg";
import photo4 from "./assets/4.jpg";
import photo5 from "./assets/5.jpg";
import photo6 from "./assets/6.jpg";
import photo7 from "./assets/7.jpg";
import photo8 from "./assets/IMG_7788.jpg";
import photo9 from "./assets/IMG_1675.jpg";

const photos = [
  { id: 1, src: photo1, alt: "Photo 1" },
  { id: 2, src: photo2, alt: "Photo 2" },
  { id: 3, src: photo3, alt: "Photo 3" },
  { id: 4, src: photo4, alt: "Photo 4" },
  { id: 5, src: photo5, alt: "Photo 5" },
  { id: 6, src: photo6, alt: "Photo 6" },
  { id: 7, src: photo7, alt: "Photo 7" },
  { id: 8, src: photo8, alt: "Photo 8" },
  { id: 9, src: photo9, alt: "Photo 9" },
];

const PhotoGallery = () => {
  return (
    <div className="min-h-screen bg-primary text-lightAccent">
      <h1 className="text-center text-4xl font-rancho mt-6 mb-8">
        Here's the Best of Us!
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-4">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="card bg-secondary shadow-xl rounded-lg"
          >
            {/* Instagram-like header */}
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center">
                <div className="avatar placeholder">
                  <div className="bg-gray-300 text-gray-600 rounded-full w-8 h-8 flex items-center justify-center">
                    <FiUser />
                  </div>
                </div>
                <span className="ml-2 font-bold">username</span>
              </div>
              <FaEllipsisH />
            </div>

            {/* Image */}
            <figure>
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full object-cover"
              />
            </figure>

            {/* Like and comment section */}
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center space-x-4">
                <FaHeart className="text-red-500 text-xl cursor-pointer" />
                <FaRegComment className="text-xl cursor-pointer" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
