import React from 'react'
import styled from 'styled-components'
import Vector from '../images/Vector.png'
import Vector1 from '../images/Vector2.png'
import lico from '../images/lico.png'
import telo from '../images/telo.png'
import fon from "../images/fon.png"


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


`
const P1 = styled.p`
padding-left:35px;


`
const Img1 = styled.div`
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
`


const Navbar = () => {
  return (
    <Block1>
      <Container>
            <Header1>
                <H1>Moonlight</H1>
            </Header1>
            <Header2>
                <P1>Каталог</P1>
                <P1>О нас</P1>
                <P1>Контакты</P1>
                <Img1><img src={Vector} alt=""/></Img1>
                <Img1><img src={Vector1} alt=""/></Img1>
            </Header2>
      </Container>
      <Afterheader>
          <Imglico>
              <Img2><img src={lico} alt=""/></Img2>
              <p>Уход для лица</p>
          </Imglico>
          <TextAL>
              <h1>MOONLIGHT</h1>
              <p>Натуральная косметика<br/>для бережного ухода за кожей</p>
              <Button1>Подробнее</Button1>
          </TextAL>
          <Imgtelo>
               <Img2><img src={telo} alt=""/></Img2>
               <p>Уход для тела</p>
          </Imgtelo>
      </Afterheader>
    </Block1>
  )
}

export default Navbar
