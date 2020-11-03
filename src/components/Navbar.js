import React, { Component } from "react";
import logo from "../images/logo.svg";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    state = {
        isOpen: false,
    };
    handleOutsideClick = (e) => {
        // ignore clicks on the component itself
        console.log(e.target);
        if (this.node.contains(e.target)) {
            return;
        } else {
            this.handleToggle();
        }
    };
    handleToggle = () => {
        if (!this.state.isOpen) {
            // attach/remove event handler
            document.addEventListener("click", this.handleOutsideClick);
        } else {
            document.removeEventListener("click", this.handleOutsideClick);
        }

        this.setState((prevState) => ({
            isOpen: !prevState.isOpen,
        }));
    };

    render() {
        return (
            <nav
                className="navbar"
                ref={(node) => {
                    this.node = node;
                }}
            >
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                        <button
                            onClick={this.handleToggle}
                            type="buttton"
                            className="nav-btn"
                        >
                            <FaAlignRight className="nav-icon" />
                        </button>
                    </div>
                    <ul
                        className={
                            this.state.isOpen
                                ? "nav-links show-nav"
                                : "nav-links"
                        }
                    >
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/rooms">Rooms</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
