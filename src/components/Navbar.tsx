/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';

const navbar = css`
    position: fixed;
    bottom: 20px; /* 하단에서 20px 띄움 */
    left: 50%;
    transform: translateX(-50%);
    width: 70%; /* app-container와 동일한 너비 */
    background-color: #fff; /* 또는 원하는 배경색 */
    padding: 1rem;
    display: flex;
    justify-content: center;
    gap: 1rem;
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1); /* 선택적: 상단 그림자 효과 */
    border-radius: 20px;
`
const navItem = (isSelected: boolean) => css`
  text-decoration: none;
  color: black;
  font-size: 18px;
  font-weight: bold;
  transition: color 0.3s ease-in-out;
  &:hover{
  color: #ff7f50;
  }
  ${isSelected && `
    color: #ff7f50;
    `}
  `;

const divider = css`
    color: gray;
    margin: 0 10px;
  `

const Navbar = () => {
    const [selectedItem, setSelectedItem] = useState<string | null>('메인');


    const handleClick = (item: string) => {
        setSelectedItem(item);
    };

    return (
      <nav css={navbar}>
        <a 
        href="#" 
        css={navItem(selectedItem === '메인')}
        onClick={() => handleClick('메인')} 
        >
            메인
        </a>
        <span css={divider}>|</span>
        <a href="#" css={navItem(selectedItem === '소개')} onClick={() => handleClick('소개')}>소개</a>
        <span css={divider}>|</span>
        <a href="#" css={navItem(selectedItem === '연혁')} onClick={() => handleClick('연혁')}>연혁</a>
        <span css={divider}>|</span>
        <a href="#" css={navItem(selectedItem === '멤버')} onClick={() => handleClick('멤버')}>멤버</a>
        <span css={divider}>|</span>
        <a href="#" css={navItem(selectedItem === '스터디')} onClick={() => handleClick('스터디')}>스터디</a>
        <span css={divider}>|</span>
        <a href="#" css={navItem(selectedItem === '공모')} onClick={() => handleClick('공모')}>공모</a>
      </nav>
    );
  };


  export default Navbar;