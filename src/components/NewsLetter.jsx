import React, { useState } from "react";

export default function NewsLetter() {
  const [newsLetter, setNewsLetter] = useState("");

  return (
    <>
      <div className="newsletter-container">
        <h1 className="newsletter-container__head">
          Subscribe to our <span className="color">news letter</span>
        </h1>

        <form>
          <div className="input">
            <input
              type="email"
              placeholder="Send an email to subscribe"
              onChange={(e) => {
                e.preventDefault();
                setNewsLetter(e.target.value);
              }}
              value={newsLetter}
            />
            <button type="submit">
              <i className="fa-sharp fa-solid fa-paper-plane"></i>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
