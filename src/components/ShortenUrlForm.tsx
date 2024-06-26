/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";

const ShortenUrlForm: React.FC = () => {
  const [longUrl, setLongUrl] = useState<string>("");
  const [shortUrl, setShortUrl] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://short-urls-phi.vercel.app/api/url",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ longUrl }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          setShortUrl(data.data);
        } else {
          console.error("Failed to shorten URL:", data.message);
        }
      } else {
        console.error("Failed to shorten URL:", response.status);
      }
    } catch (error: any) {
      console.error("Error:", error.message);
    }
  };

  return (
    <div className="min-h-screen">
      <div className=" max-w-md mx-auto my-8 p-6 bg-white rounded shadow-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Enter Long URL"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:fuchsia-fuchsia-500"
          />
          <button
            type="submit"
            className="w-full bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Shorten URL
          </button>
        </form>
        {shortUrl && (
          <p className="mt-4">
            Short URL:{" "}
            <a
              href={`https://short-urls-phi.vercel.app/api/url/${shortUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-fuchsia-500 hover:underline"
            >
              {`https://short-urls-phi.vercel.app/api/url/${shortUrl}`}
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default ShortenUrlForm;
