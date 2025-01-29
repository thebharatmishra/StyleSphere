import React from "react";

function Home() {
  return (
    <div className="container">
      <h1>Style Sphere</h1>
      <h2>Welcome to Our E-commerce Store</h2>
      <h3>
        For further details contact us at{" "}
        <a href="mailto:bharatmishrawork@yahoo.com">
          bharatmishrawork@yahoo.com
        </a>
      </h3>

      <div className="products">{/* Products will be mapped here later */}</div>
    </div>
  );
}

export default Home;
