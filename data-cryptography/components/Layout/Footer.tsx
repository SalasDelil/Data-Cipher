import React from "react";

function Footer() {
  return (
    <footer className="flex h-12 justify-center bg-red-800">
      <div className="flex-col">
      <p className="font-normal text-white">For more contact:</p>
      <a
        className="font-semibold text-gray-100"
        href="https://github.com/SalasDelil"
      >
        GitHub
      </a>
      </div>
    </footer>
  );
}

export default Footer;
