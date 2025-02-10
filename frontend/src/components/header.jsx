import React from 'react';

const Header=()=>{
    return(
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px', backgroundColor: '#013066', color: '#fff' }}>
            <div>
                <strong>Call us toll free:</strong> +91-1234567890 | <strong>Email:</strong> ScrapBid@gmail.com
            </div>
            <div>
                <a href="/order-tracking" style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }}>Order</a>
                <a href="/wishlist" style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }}>wishlist</a>
                <a href="/sign-in" style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }}>Signin</a>
            </div>
        </header>
    );
};

export default Header;