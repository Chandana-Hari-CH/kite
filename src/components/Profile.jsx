import React from 'react';
import { FaClipboard, FaGavel, FaSearch, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();

    const stocks = [
        { name: 'GOLDBEES', market: 'NSE', price: '61.79', change: '0.00 (0.00%)' },
        { name: 'HDFCBANK', market: 'NSE', price: '1,692.75', change: '0.00 (0.00%)' },
        { name: 'HINDUNILVR', market: 'NSE', price: '2,389.20', change: '0.00 (0.00%)' },
        { name: 'INFY', market: 'NSE', price: '1,864.55', change: '0.00 (0.00%)' },
        { name: 'ONGC', market: 'NSE', price: '250.80', change: '0.00 (0.00%)' },
        { name: 'TCS', market: 'NSE', price: '4,145.90', change: '0.00 (0.00%)' },
        { name: 'BPCL', market: 'NSE', price: '298.20', change: '0.00 (0.00%)' },
        { name: 'BPCL', market: 'BSE', price: '298.40', change: '0.00 (0.00%)' },
        { name: 'HINDPETRO', market: 'BSE', price: '372.50', change: '0.00 (0.00%)' },
    ];

    const handleUserLogoClick = () => {
        navigate('/acc');
    };

    return (
        <div className="profile" style={styles.profile}>
            <header style={styles.profileHeader}>
                <h1 style={styles.heading}>
                    Watchlist <span> <i className="fa-solid fa-angle-down" style={{ color: '#000000', float: 'right' }}></i></span>
                </h1>
                <nav style={styles.tabs}>
                    <span style={styles.activeTab}>Watchlist 1</span>
                    <span style={styles.tab}>Watchlist 2</span>
                    <span style={styles.tab}>Watchlist 3</span>
                    <span style={styles.tab}>Watchlist 4</span>
                </nav>
                <div style={styles.searchBar}>
                    <span> <FaSearch style={styles.searchIcon} /></span>
                    <input
                        type="text"
                        placeholder="Search & add"
                        style={styles.searchInput}
                    />
                    <span style={styles.itemCount}>17/100</span>
                </div>
            </header>

            <main style={styles.stockList}>
                {stocks.map((stock, index) => (
                    <div key={index} style={styles.stockItem}>
                        <div style={styles.stockDetails}>
                            <p style={{ fontSize: '14px' }}>{stock.name}</p>
                            <span style={styles.market}>{stock.market}</span>
                        </div>
                        <div style={styles.stockPrice}>
                            <span>{stock.price}</span>
                            <br />
                            <span style={styles.change}>{stock.change}</span>
                        </div>
                    </div>
                ))}
            </main>

            <footer style={styles.footer}>
                <div style={styles.footerItem}>
                <i style={{
                        color: '#007bff'
                    }} className="fa-regular fa-bookmark"></i>
                    <span style={{
                        color: '#007bff'
                    }}>Watchlist</span>
                </div>
                <div style={styles.footerItem}>
                    <FaClipboard />
                    <span>Orders</span>
                </div>
                <div style={styles.footerItem}>
                <i style={{color:'gray'}} className="fa-solid fa-suitcase" ></i>
                    <span>Portfolio</span>
                </div>
                <div style={styles.footerItem}>
                    <FaGavel />
                    <span>Bids</span>
                </div>
                <div style={styles.footerItem} onClick={handleUserLogoClick}>
                    <FaUser />
                    <span>ZFG265</span>
                </div>
            </footer>
        </div>
    );
};

// CSS-in-JS Styles
const styles = {
    profile: {
        padding: '16px',
    },
    downArrow: {
        fontSize: '16px',
        marginLeft: '8px',
        float: 'right',
    },
    activeTab: {
        padding: '8px 16px',
        cursor: 'pointer',
        color: '#000',
        fontSize: '11px',
        fontWeight: 'bold',
        borderBottom: '2px solid #007bff',
        marginRight: '16px',
    },
    tab: {
        fontWeight: 'bold',
        fontSize: '11px',
        marginRight: '16px',
        cursor: 'pointer',
    },
    profileHeader: {
        backgroundColor: 'white',
        padding: '16px',
        borderBottom: '1px solid #e0e0e0',
    },
    heading: {
        margin: 0,
        fontSize: '20px',
        fontWeight: 600,
    },
    tabs: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: '12px',
        borderBottom: '1px solid #e0e0e0',
    },
    searchBar: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '16px',
        position: 'relative',
    },
    searchIcon: {
        marginTop: '0',
        fontSize: '15px',
        color: '#6b6b6b',
        position: 'absolute',
        left: '8px',
        paddingBottom: '5px'
    },
    searchInput: {
        flex: 1,
        padding: '8px 36px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        fontSize: '12px',
    },
    itemCount: {
        fontSize: '14px',
        color: '#6b6b6b',
        position: 'absolute',
        right: '12px',
    },
    stockList: {
        marginTop: '16px',
    },
    stockItem: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '12px 16px',
        backgroundColor: 'white',
        borderBottom: '1px solid #e0e0e0',
    },
    stockDetails: {
        display: 'flex',
        flexDirection: 'column',
        fontSize: '14px', // Reduced font size for the stock name
    },
    market: {
        fontSize: '12px',
        color: '#8a8a8a',
    },
    stockPrice: {
        textAlign: 'right',
        fontSize:'12px',
        fontWeight: 'normal', // Removed boldness from the numbers
    },
    change: {
        fontSize: '12px',
        color: '#8a8a8a',
    },
    footer: {
        display: 'flex',
        justifyContent: 'space-around',
        padding: '12px 0',
        backgroundColor: 'white',
        borderTop: '1px solid #e0e0e0',
        position: 'fixed',
        bottom: 0,
        width: '100%',
    },
    footerItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: '14px',
        color: '#6b6b6b',
        cursor: 'pointer',
    },
};

export default Profile;
