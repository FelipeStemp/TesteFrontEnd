import './App.css';
import ClassGet from './Page/classPage/class';
import Comments from './Page/comments/coment';
import Footer from './Page/footer/footer';
import Home from './Page/home/home';
import JoinUs from './Page/joinUs/join';
import PricePlans from './Page/pricePlans/price';
import Program from './Page/programs/program';
import logo from './assets/image/logo.png'
import ButtonAll from './components/button/button'
import styled from "styled-components";
import React, { useRef } from 'react';


const NavBody = styled.div`
width: 100%;
height: fit-content;
display: flex;
justify-content: center;
gap: 10vw;
align-items: center;
position: absolute;
top: 20px;
`

const NavOption = styled.nav`
display: flex;
color: white;
gap: 2vw;

li{
    &:hover{
        color: #F9AC54;
        cursor: pointer;
    }
}
`


function App() {

  const homeRef = useRef(null);
  const programRef = useRef(null);
  const classGetRef = useRef(null);
  const joinUsRef = useRef(null);
  const pricePlansRef = useRef(null);
  const commentsRef = useRef(null);
  const footerRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <>
      <NavBody>
        <img src={logo} alt="Logo" />

        <NavOption>
          <li onClick={() => scrollToSection(homeRef)}>Home</li>
          <li onClick={() => scrollToSection(programRef)}>Program</li>
          <li onClick={() => scrollToSection(classGetRef)}>Service</li>
          <li onClick={() => scrollToSection(joinUsRef)}>About</li>
          <li onClick={() => scrollToSection(commentsRef)}>Community</li>
        </NavOption>

        <ButtonAll onClick={() => scrollToSection(joinUsRef)}>Join Now</ButtonAll>
      </NavBody>

      {/* Adicionando referências aos componentes */}
      <div ref={homeRef}><Home /></div>
      <div ref={programRef}><Program /></div>
      <div ref={classGetRef}><ClassGet /></div>
      <div ref={joinUsRef}><JoinUs /></div>
      <div ref={pricePlansRef}><PricePlans /></div>
      <div ref={commentsRef}><Comments /></div>
      <div ref={footerRef}><Footer /></div>
    </>
  );
}

export default App;

