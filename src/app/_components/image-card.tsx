"use client";

import { useState } from "react";

export type ImageItem = {
  id: string;
  theme: string;
  imageUrl: string;
  midjourneyUrl: string;
};

export const ImageCard = ({ theme, imageUrl, midjourneyUrl }: ImageItem) => {
  // Track whether the image has loaded
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="group relative break-inside-avoid mb-1">
      <figure className="relative overflow-hidden shadow-lg">
        {/* Loading skeleton overlay */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-gray-300 animate-pulse" />
        )}

        <img
          src={imageUrl}
          alt={theme}
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Overlay with theme and button */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex justify-between items-end">
            <span className="text-white text-sm font-medium">{theme}</span>
            <a
              href={midjourneyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-3 py-1 rounded-full text-sm hover:bg-gray-100 transition-colors whitespace-nowrap"
            >
              View on Midjourney
            </a>
          </div>
        </div>
      </figure>
    </div>
  );
};
