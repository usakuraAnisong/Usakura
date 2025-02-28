/**@jsxImportSource @emotion/react */
import React from 'react';
import {css} from '@emotion/react';
import title from '../assets/title.png';
import logo from '../assets/logo.png';
import Social from '../components/Social';

const Container = css `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    `
const sideContainer = css `
    display:flex;
    background-color: #FFBE98;
    width: 10%;
    height: 100%;
`
const mainContainer = css `
    display: flex;
    flex-direction: column;
    flex: 1;    
    background-color: #ffe1cc;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    color: white;
`

const right= css `
justify-content: center;
align-items: flex-end;
`

const Home: React.FC = () => {
    return (
        <div css={Container} >
            <div css={sideContainer}></div>
            <div css={mainContainer}>
                <img src={logo} alt="logo" css={css`
                    width:500px;
                    height: auto`}/>
                <img src={title} alt="title" css={css`
                    width:500px;
                    height: auto;`} />
            </div>
            <div css={[sideContainer, right]}><Social /></div>
        </div>
    );
};

export default Home;