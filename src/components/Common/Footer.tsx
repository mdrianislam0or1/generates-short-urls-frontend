import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-300 py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Short URL Generator Service
        </p>
        <div className="mt-2">
          <a
            href="#"
            className="inline-block mx-2 hover:text-gray-400 transition duration-300"
          >
            Home
          </a>
          <a
            href="#"
            className="inline-block mx-2 hover:text-gray-400 transition duration-300"
          >
            About
          </a>
          <a
            href="#"
            className="inline-block mx-2 hover:text-gray-400 transition duration-300"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
