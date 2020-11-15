import React, { Component } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { matchPath, withRouter } from "react-router";

class Navbar extends Component {
    state = {
        isOpen: false,
    };

    handleOutsideClick = (e) => {
        // ignore clicks on the component itself
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
                        <Link id="brandLogo" to="/">
                            <h4>Bill Hotel</h4>
                        </Link>
                        <button
                            onClick={this.handleToggle}
                            type="buttton"
                            className="nav-btn"
                        >
                            <FaBars className="nav-icon" />
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
                            <Link
                                to="/"
                                style={{
                                    color:
                                        this.props.match.isExact &&
                                        this.props.location.pathname === "/"
                                            ? " #9b8971"
                                            : "",
                                }}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/rooms"
                                style={{
                                    color: matchPath(
                                        this.props.location.pathname,
                                        {
                                            path: "/rooms",
                                        }
                                    )
                                        ? " #9b8971"
                                        : "",
                                }}
                            >
                                Rooms
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/services"
                                style={{
                                    color: matchPath(
                                        this.props.location.pathname,
                                        {
                                            path: "/services",
                                        }
                                    )
                                        ? " #9b8971"
                                        : "",
                                }}
                            >
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/featured-rooms"
                                style={{
                                    color: matchPath(
                                        this.props.location.pathname,
                                        {
                                            path: "/featured-rooms",
                                        }
                                    )
                                        ? " #9b8971"
                                        : "",
                                }}
                            >
                                Featured{" "}
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default withRouter(Navbar);
