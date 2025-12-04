import React from "react";

function Hero() {
  return (
    <div className="container text-center border-bottom mt-5 p-5">
      <h1 className="text-muted mb-3">Zerodha Products</h1>
      <h3>Sleek, modern, and intuitive trading platforms</h3>
      <p className="mt-3">
        Check out our{" "}
        <a href="3" style={{ textDecoration: "none" }}>
          investment offerings<i class="fa-solid fa-arrow-right"></i>
        </a>
      </p>
    </div>
  );
}

export default Hero;
