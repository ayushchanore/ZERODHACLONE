import React from "react";

function Leftsection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googleplay,
  appStore,
}) {
  return (
    <div className="container border-bottom mb-5 ">
      <div className="row">
        <div className="col-6 p-5">
          <img src={imageURL} alt="image" />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              Try Demo<i class="fa-solid fa-arrow-right"></i>
            </a>
            <a
              href={learnMore}
              style={{ marginLeft: "50px", textDecoration: "none" }}
            >
              Learn More<i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div className="mt-5">
            <a href={googleplay}>
              <img src="media/googlePlayBadge.svg" alt="google" />
            </a>
            <a href={appStore} style={{ marginLeft: "50px" }}>
              <img
                src="media/appstoreBadge.svg"
                alt="
                play"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leftsection;
