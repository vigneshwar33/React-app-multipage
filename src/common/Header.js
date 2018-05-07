import React from 'react';

const Header = () => {
    return (
        <nav>
            <a href="/" activeClassName="active">Home</a>
            {" || "}
            <a href="/courses" activeClassName="active">Courses</a>
            {" | "}
            <a href="/about" activeClassName="active">About</a>
        </nav>
    );
};

export default Header;