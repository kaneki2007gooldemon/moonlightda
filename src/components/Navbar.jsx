import React from 'react'
import styled from 'styled-components'
import Vector from '../images/Vector.png'
import Vector1 from '../images/Vector2.png'
import lico from '../images/lico.png'
import telo from '../images/telo.png'
import fon from "../images/fon.png"
import 'animate.css';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'


const Block1 = styled.div`
background-image:url(${fon});
background-size:cover;
background-repeat:no-repeat;
`

const Header1 = styled.div`
padding-right: 1100px;
margin-left: 35px;
`


const Header2 = styled.div`
  justify-content:space-between;
  display:flex;
  padding-top: 8px;
`

const Container = styled.div`  
padding-top: 27px;
display:flex;
justify-content:space-around;
`

const Afterheader = styled.div`
display: flex;
justify-content:space-around;
padding-top: 70px;  
padding-bottom: 70px;  
`

const Imglico = styled.div`

`

const TextAL = styled.div`
   text-align: center;
   margin-top: 61px;
   font-size: 27px;
`

const Imgtelo = styled.div`

`
const H1 = styled.h1`
font-family: Raleway;
font-weight: 600;
`
const P1 = styled.a`
padding-left:35px;
font-family: Raleway;
font-weight: 400;
font-size: 16px;
text-decoration: none;
white-space: nowrap;
&:visited {
        color: rgb(0, 0, 0);
    }
`
const Img1 = styled.a`
padding-left:35px;
`


const Img2 = styled.div`
    
`
const Button1 = styled.button`
height: 41px;
width: 141px;
color: black;
font-size: 16px;
font-weight: 100;
border-radius: 1px;
border-width: 1px;
border-color: #B3BAC1;
background-color: transparent;
margin-top: 40px;
&:hover{
  background-color: #8E9881;
  color: white;
}
`
const H2 = styled.h2`
padding-top: 35px;
font-family: Raleway;
font-weight: 500;
font-size: 58px;
`

const P3 = styled.p`
padding-top: 18px;
font-weight: 400;
font-size: 18px;
font-family: Raleway;
`
const P2 = styled.p`
font-family: Raleway;
font-weight: 500;
font-size: 16px;
`
const Navbar = () => {
  return (
    <Block1>
      <Container>
            <Header1>
                <H1>Moonlight</H1>
            </Header1>
            <Header2>
                <P1  href="Katalog" >Каталог</P1>
                <P1  href="Onas" >О нас</P1> 
                <P1  href="Contact" >Контакты</P1>
                <Img1><img src={Vector} alt=""/></Img1>
                <Img1 href="Korzina"><img src={Vector1} alt=""/></Img1>
            </Header2>
      </Container>
      <Afterheader>
          <Imglico>
              <Img2><img src={lico} alt=""/></Img2>
              <P2>Уход для лица</P2>
          </Imglico>
          <TextAL>
              <H2>MOONLIGHT</H2>
              <P3>Натуральная косметика<br/>для бережного ухода за кожей</P3>
              <Button1>Подробнее</Button1>
          </TextAL>
          <Imgtelo>
               <Img2><img src={telo} alt=""/></Img2>
               <P2>Уход для тела</P2>
          </Imgtelo>
      </Afterheader>
    </Block1>
  )
}

export default Navbar
