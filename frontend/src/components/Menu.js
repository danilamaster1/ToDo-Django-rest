import React from "react";
import { Link } from "react-router-dom";

export const Menu  = () => (
    <nav className="navbar navbar-dark navbar-expand-lg bg-black">
        <div className="navbar-brand p-3">
            <Link to='/'className="nav-link">ToDo App</Link>
        </div>

        <ul className="navbar-nav">
            <li className="nav-item">
                <Link to='/' className="nav-link">Users</Link>
            </li>
            <li className="nav-item">
                <Link to='/projects' className="nav-link">Projects</Link>
            </li>
            <li className="nav-item">
                <Link to='/todo' className="nav-link">Todo</Link>
            </li>
        </ul>
    </nav>
)
