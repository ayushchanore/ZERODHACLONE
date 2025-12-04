import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 border-top text-center">
        <div className="col-8 ">
          <h3 className="mb-5">Brokerage calculator</h3>
          <ul>
            <li className="text-start mb-3">
              {" "}
              Tax by the government when transacting on the exchanges. Charged
              as above on both buy and sell sides when trading equity delivery.
            </li>
            <li className="text-start  mb-3">
              {" "}
              Charged only on selling side when trading intraday or on F&O.{" "}
            </li>{" "}
            <li>
              Important to keep a tab. BSE has revised transaction charges in SS
              and ST groups to ₹1,00,000 per crore.
            </li>
            <li className="text-start  mb-3">
              BSE has revised transaction charges in M, MT, TS and MS groups to
              ₹275 per crore of gross turnover.
            </li>
          </ul>
        </div>
        <div className="col-4">
          <h3>List of Charges</h3>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
