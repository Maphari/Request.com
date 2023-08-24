import React from "react";

export default function Footer() {
  const fullYear = new Date().getFullYear();
  return (
    <>
      <div className="footer-container">
        <div className="footer-container-icons">
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-youtube"></i>
        </div>
        <p>Request.com &copy; copyright 2022 - {fullYear}</p>
      </div>
    </>
  );
}
