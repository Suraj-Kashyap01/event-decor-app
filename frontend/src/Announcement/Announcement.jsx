import React from "react";

const AnnouncementBar = () => {
  return (
    <div className="bg-blue-700 text-white py-2 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap">
         Make Your Event Unforgettable! Explore Our Elegant Centerpieces & Decor Now! 
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          display: inline-block;
        
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default AnnouncementBar;
