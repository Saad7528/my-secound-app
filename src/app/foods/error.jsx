"use client"
import React from 'react';

const ErrorUi = ({
    errorCode = "404",
    title = "Oops! Kichu ekta vul hoyeche",
    message = "Apni jeti khujchen seta paoya jachche na ba temporary kono somossa hochche."
}) => {

    const handleRefresh = () => {
        window.location.reload();
    };

    return (
        <div className="min-h-screen bg-white flex items-center justify-center px-6 py-12 font-sans">
            <div className="text-center max-w-lg relative">

                {/* Error Code Background */}
                <h1 className="text-[12rem] font-black text-gray-50 absolute left-1/2 -translate-x-1/2 -top-24 -z-10 select-none">
                    {errorCode}
                </h1>

                {/* Warning Icon (SVG) */}
                <div className="flex justify-center mb-6">
                    <div className="bg-orange-100 p-4 rounded-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>
                </div>

                <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
                    {title}
                </h2>

                <p className="text-gray-500 text-lg mb-10 leading-relaxed">
                    {message}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                        onClick={() => window.location.href = '/foods'}
                        className="w-full sm:w-auto px-8 py-3.5 bg-gray-900 hover:bg-black text-white rounded-xl font-medium transition-all shadow-lg active:scale-95"
                    >
                        Home-e fire jan
                    </button>

                    <button
                        onClick={handleRefresh}
                        className="w-full sm:w-auto px-8 py-3.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-medium transition-all active:scale-95"
                    >
                        Abar chesta korun
                    </button>
                </div>

                {/* Support Link */}
                <div className="mt-12 pt-8 border-t border-gray-100">
                    <p className="text-gray-400">
                        Sohayotar proyojon? <a href="/contact" className="text-orange-600 font-semibold hover:underline">Support-e kotha bolun</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ErrorUi;