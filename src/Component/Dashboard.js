import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
    return (
        <div className="dashboard-container">
            <div className="side-nav">
                <div className="logo-container">
                 {/* image logo here*/}
                </div>
                <ul>
                    <li><b><Link to="/dashboard">Data</Link></b></li>
                    <li><b><Link to="/appointments">About</Link></b></li>
                </ul>
            </div>

            <div className="main-content" style={{ backgroundColor: '#013220' }}>
                <div className="typingeffect">
                    <h1>
                        <span style={{ color: '#006400' }}>Environmental Logger:  </span>
                        <span style={{ color: '#74B72E' }}>Monitoring Temperature, Humidity, and Light Intensity</span>
                        <span className="blinking-cursor">│</span>
                    </h1>
                </div>

                <div className="widgets-container">
                    {/* Widgets will be added here */}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
