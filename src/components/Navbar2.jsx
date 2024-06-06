import React from 'react'
import styled from 'styled-components'
import Vector from '../images/Vector.png'
import Vector1 from '../images/Vector2.png'

const Div = styled.div`
    padding-top: 27px;
    display:flex;
    justify-content:space-around;
`
const Header1 = styled.div`
  padding-right: 1100px;
  margin-left: 35px;
`
const Header2 = styled.div`
  justify-content:space-between;
  display:flex;
  padding-top: 10px;
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
const Img1 = styled.div`
  padding-left:35px;
`
const Hr = styled.hr`
  width:100%; 
  size:0;
  margin-top:40px;
`
const Conteiner = styled.div`
  
`
const Navbar2 = () => {
  return (
    <Conteiner>
    <Div>
       <Header1>
                <H1>Moonlight</H1>
            </Header1>
            <Header2>
                <P1 href="/">На главную</P1>
                <P1>О нас</P1>
                <P1>Контакты</P1>
                <Img1><img src={Vector} alt=""/></Img1>
                <Img1><img src={Vector1} alt=""/></Img1>
            </Header2>

          
    </Div>
    <Hr></Hr>
    </Conteiner>
  )
}

export default Navbar2
