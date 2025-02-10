import React from "react";

const Navbar=()=>{
    return(
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px', backgroundColor:'#04428a',color: '#fff', height:'80px'}}>
           {/* logo */}
            <strong>ScrapBid</strong>
            {/* other links */}
            <div>
                <a href="/" style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }}>Home</a>
                <a href="/products" style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }}>Products</a>
                <a href="/profile" style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }}>Profile</a>
                <a href="/logout" style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }}>Logout</a>
            </div>
        </div>
    );
}

export default Navbar;