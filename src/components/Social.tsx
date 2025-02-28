/**@jsxImportSource @emotion/react */
import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { css } from '@emotion/react';

const socialIcon = css`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 50px;
    `
const a = css`
    color: #000;
    transition: color 0.3s ease;
    &:hover {
    color: #ff7f50;
    }
`
const Social: React.FC = () => {
    return (
        <div css={socialIcon}>
            <a href="https://www.instagram.com/usakura_official/" target="_blank" rel="noopener noreferrer" css={a}>
                <FaInstagram size={60} />
            </a>
            <a href="https://x.com/usakura_Anison" target="_blank" rel="noopener noreferrer" css={a}>
                <FaXTwitter size={60} />
            </a>
            test Commit
        </div>
    )
}

export default Social;