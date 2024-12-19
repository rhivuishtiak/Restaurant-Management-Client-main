import React from 'react';
import { Helmet } from 'react-helmet-async';

const ErrorPage = () => {
    return (
        <div>
            <Helmet>
            <title>FoodieFleet|ErrorPage</title>
            </Helmet> 
            <div className="max-w-5xl mx-auto bg-[#009CDB26]">
                <div className='flex justify-center'>
                <img className='' src="https://i.ibb.co/Px3jF6Q/1163282-ORHG1-B0.jpg" alt="" />

                </div>
                <div className="mt-2 text-xs max-w-lg mx-auto text-white border-solid border-2 border-indigo-600 bg-slate-500">
                   
                    <p>Some Things went worng</p>
                    <p>Check the internet connection and Route</p>
                </div>

            </div>
        </div>
    );
};

export default ErrorPage;