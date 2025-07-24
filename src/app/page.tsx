"use client";

import { useState } from "react";

export default function Home() {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  const handleGenerate = () => {
    setLoading(true);
    setNotification("Generating image...");

    // Simulate an API call
    setTimeout(() => {
      const newImage = "https://via.placeholder.com/256";
      setImages((prevImages) => [...prevImages, newImage]);
      setLoading(false);
      setNotification("Image generated successfully!");
      setTimeout(() => setNotification(null), 3000);
    }, 2000);
  };

  return (
    <main className="container mx-auto p-6 sm:p-4">
      <h1 className="text-3xl font-bold text-center my-8">AI Image Generator</h1>
      <div className="flex flex-col items-center">
        <div className="w-full max-w-lg">
          <textarea
            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            rows={4}
            placeholder="Enter a detailed text prompt..."
          />
          <div className="my-4">
            <label htmlFor="style-select" className="block text-sm font-medium text-gray-700">
              Image Style
            </label>
            <select
              id="style-select"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
            >
              <option>Realism</option>
              <option>Illustration</option>
              <option>Anime</option>
            </select>
          </div>
          <button
            className="w-full bg-blue-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-600 transition-colors disabled:bg-gray-400"
            onClick={handleGenerate}
            disabled={loading}
          >
            {loading ? "Generating..." : "Generate Image"}
          </button>
        </div>
      </div>

      {notification && (
        <div className="fixed top-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg">
          {notification}
        </div>
      )}

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-center">Generated Images</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
          {images.map((src, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={src} alt={`Generated image ${index + 1}`} className="w-full h-auto" />
              <div className="p-4">
                <button className="w-full bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors">
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
