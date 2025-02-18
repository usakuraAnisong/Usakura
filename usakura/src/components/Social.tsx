import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import '../css/Social.css';

const Social: React.FC = () => {
    return (
        <div className="social-icons">
            <a href="https://www.instagram.com/usakura_official/" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={45} />
            </a>
            <a href="https://x.com/usakura_Anison" target="_blank" rel="noopener noreferrer">
                <FaXTwitter size={45} />
            </a>
        </div>
    )
}

export default Social;