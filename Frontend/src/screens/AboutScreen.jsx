import React from 'react';

const AboutScreen = () => {
    return (
        <>
            <div className="flex-1 bg-white p-4">
                <h1 className="text-3xl font-bold mb-4">About Nuntium</h1>
                <p className="text-lg text-gray-600 mb-4">
                    Nuntium is your go-to platform for staying informed about the world around you.
                </p>
                <p className="text-base text-gray-800 mb-4">
                    Our mission is to provide accurate, timely, and engaging news content across a wide range of topics.
                    From breaking news to in-depth analyses, Nuntium offers a comprehensive view of current events and trending stories.
                </p>
                <p className="text-base text-gray-800 mb-4">
                    Founded in 2023, Nuntium has quickly become a trusted source of information for readers worldwide.
                    Our team of experienced journalists and editors work tirelessly to bring you the stories that matter most.
                </p>
                <p className="text-base text-gray-800">
                    Thank you for choosing Nuntium as your news source. We're committed to keeping you informed and engaged.
                </p>
            </div>
        </>
    );
};

export default AboutScreen;
