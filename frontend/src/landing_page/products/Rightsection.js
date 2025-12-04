import React from "react";

function Rightsection( {imageURL,productName, productDescription, learnMore}) {
  return (
    <div className="container  border-bottom  ">
      <div className="row">
        <div className="col-6 p-5 mt-5">
          <h1 className="mt-5 mb-3">{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a
              href={learnMore}
              style={{ marginLeft: "50px", textDecoration: "none" }}
            >
              Learn More<i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
         </div>
          <div className="col-6  ">
            <img src={imageURL} alt="image" />
          </div>
        </div>
      </div>
    
  );
}

export default Rightsection;
