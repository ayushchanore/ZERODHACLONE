import React from 'react';

function Awards () {
    return(
        <div className="container mt-5 mb-5">
            <div className='row'>
                <div className='col-lg-6 col-sm-12 p-5'>
                    <img src='media/largestBroker.svg' alt='broker'/>
                </div>
                <div className='col-lg-6 col-sm-12 p-5'>
                    <h1>Largest stock broker in India</h1>
                    <p className='mb-5'>2 millions Zerodha clients contribute to over 15% of all retail order volumes in india daily by trading and investing in: </p>
                    <div className='row'>
                        <div className='col-6 p-5'>
                            <ul>
                                <li>
                                    <p>Future and Options</p>
                                    </li>
                                <li>
                                    <p>Comodity Derivaties</p>
                                </li>
                                <li>
                                    <p>Currency derivatives</p>
                                </li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p>stoks and IPOs</p>
                                </li>
                                <li>
                                    <p>Direct mutual funds</p>
                                </li>
                                <li>
                                    <p>Bonds and securities</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <img src='media/pressLogos.png' alt='press' 
                    style={{width:"90%"}}/> 
                </div>
            </div>
        </div>
    );
}

export default Awards;