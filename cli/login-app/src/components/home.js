import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import "./css/Home.css"; // Import your CSS file for styling

function Home() {
    const location = useLocation();

    // Function to handle button click
    const handleButtonClick = () => {
        window.location.reload();
    };

    // Automatically refresh the page every 5 minutes (300,000 milliseconds)
    useEffect(() => {
        const intervalId = setInterval(() => {
            window.location.reload();
        }, 100); // Adjust the interval time as needed (in milliseconds)

        return () => clearInterval(intervalId); // Cleanup function to clear interval on unmount
    }, []);

    return (
        <div className="homepage">
            <div className="content">
            </div>
        </div>
    );
}

export default Home;
