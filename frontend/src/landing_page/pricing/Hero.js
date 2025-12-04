import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row  mt-5 border-bottom text-center">
        <h1>Pricing</h1>
        <p className="text-muted mt-3 fs-4">List of all charges and taxes</p>
        <div className="col">
          <img className="mb-5" src="media/pricingEquity.svg" alt="logo" />
          <h2 className="mb-3">Free equity delivery</h2>
          <p className="text-muted mt-3 fs-4">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col">
          <img className="mb-5" src="media/pricingMF.svg" alt="logo" />
          <h2 className="mb-3">Intraday and F&O trades</h2>
          <p className="text-muted mt-3 fs-4">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col">
          <img className="mb-5" src="media/pricingEquity.svg" alt="logo" />
          <h2 className="mb-3">Free direct MF</h2>
          <p className="text-muted mt-3 fs-5">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
