import React from "react";

function Universe() {
  return (
    <div className="container">
      <div className="row text-center">
        <h1>Zerodha Universe</h1>
        <p>
          Excellent platforms and apps · ₹0 investments and flat ₹20 intraday
          and F&O trades.
        </p>
        <div className="col-4 p-3 mt-5">
          <img src="media/smallcaseLogo.png" />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/streakLogo.png" style={{ width: "40%" }} />
          <p className="text-small text-muted">Algo & strategy platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/sensibullLogo.svg" style={{ width: "40%" }} />
          <p className="text-small text-muted">Options trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/zerodhafUndhouse.png" style={{ width: "45%" }} />
          <p className="text-small text-muted">Asset Mangaement</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/goldenpiLogo.png" style={{ width: "50%" }} />
          <p className="text-small text-muted">Insurance</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/dittoLogo.png" style={{ width: "35%" }} />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <button
          className="p-2 mt-3 btn btn-primary fs-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;
