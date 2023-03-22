import React from "react";

export const Menu  = () => (
    <nav className="navbar navbar-dark navbar-expand-lg bg-black">
        <div className="navbar-brand p-3">
            <a href="/" className="nav-link">ToDo App</a>
        </div>

        <ul className="navbar-nav">
            <li className="nav-item">
                <a href='/' className="nav-link">Home</a>
            </li>
            <li className="nav-item">
                <a href='#' className="nav-link">About</a>
            </li>
        </ul>
    </nav>
)
