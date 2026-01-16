// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-gray-300 py-6 mt-auto w-full border-t border-slate-800">

            <div className="w-full px-[50px] flex items-center justify-between">

                <div className="flex-1 flex justify-start"></div>

                <div className="flex-1 text-center">
                    <h2 className="text-lg font-semibold text-white tracking-wide">
                        UNB Buy and Sell
                    </h2>
                    <p className="text-[10px] uppercase tracking-widest text-gray-500 mt-1">
                        Student Marketplace
                    </p>
                </div>

                <div className="flex-1"></div>

            </div>
        </footer>
    );
};

export default Footer;