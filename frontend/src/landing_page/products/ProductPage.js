import React from "react";
import Hero from "./Hero";
import Leftsection from "./Leftsection";
import Rightsection from "./Rightsection";
import Univers from "./Univers";

function ProductPage() {
  return (
    <>
      <Hero />
      <Leftsection
        imageURL="media/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googleplay=""
        appStore=""
      />
      <Rightsection 
       imageURL="media/console.png" 
        productName="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore=""
        />
      <Leftsection
        imageURL="media/coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googleplay=""
        appStore=""
      />
       <Rightsection
        imageURL="media/kiteconnect.png" 
        productName="Kite connect API"
        productDescription="The central dashboard for your Zerodha account with in-depth reporting and analytics on your trades and investments."
        learnMore=""/>
      <Leftsection
        imageURL="media/varsity.png"
        productName="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=""
        googleplay=""
        appStore=""
      />
      
      <Univers/>
    </>
  );
}

export default ProductPage;
