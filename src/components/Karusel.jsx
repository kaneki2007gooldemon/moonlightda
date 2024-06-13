import React from 'react'
import styled from 'styled-components'
import cream1 from "../images/cream1.png"
import cream2 from "../images/cream2.png"
import cream3 from "../images/cream3.png"
import cream4 from "../images/kreem4.png"
const Text = styled.div`
padding-left:120px;

`
const H1 = styled.p`
font-size: 32px;
margin-top:196px;
font-family: Raleway;
font-weight: 600;
`
const P = styled.p`
font-size:18px;
margin-top:30px;
font-family: Raleway;
font-weight: 500;

`

const Button1 = styled.button`
margin-top:40px;
height: 41px;
width: 141px;
color: black;
font-size: 16px;
font-weight: 500;
border-radius: 1px;
border-width: 1px;
border-color: #B3BAC1;
background-color: transparent;
margin-bottom:233px;
font-family: Raleway;  
&:hover{
  background-color: #8E9881;
  color: white;
}
`
const Blockkarusel = styled.div`
display: flex;

`
const Karusell = styled.div`
padding-right:60px;
`
const KaruselItem = styled.div`
`
const KaruselCaption = styled.div`
`
const H3 = styled.h3`
font-family: Raleway;

`
const P1 = styled.p`
color: #9A9DA0;
font-family: Raleway;
`

const P2 = styled.p`
color: #9A9DA0;
font-family: Raleway;
`
const P3 = styled.p`
color: #9A9DA0;
font-family: Raleway;
`

const P4 = styled.p`
color: #9A9DA0;
font-family: Raleway;
`
const Karuselll = styled.div`
display: flex;
padding-left:300px;
padding-top:120px;
`
function Karusel() {
  return (
    <Blockkarusel>
      <Text>
        <H1>Бестселлеры</H1>
        <P>Легендарные продукты,<br/>завоевавшие любовь<br/>наших клиентов</P>
        <Button1>Смотреть все</Button1>
    </Text>
    <Karuselll>
      <Karusell>
        <KaruselItem>
            <img
            className='d-block w-100'
            src={cream1}
            alt="крем"
            />
            <KaruselCaption>
              <H3>High</H3>
              <P1>Крем для лица</P1>
            </KaruselCaption>
        </KaruselItem>
      </Karusell>
      <Karusell>
        <KaruselItem>
            <img
            className='d-block w-100'
            src={cream2}
            alt="крем"
            />
            <KaruselCaption>
              <H3>Rest</H3  >
              <P2>Минеральная пудра</P2>
            </KaruselCaption>
        </KaruselItem>
      </Karusell>
      <Karusell>
        <KaruselItem>
            <img
            className='d-block w-100'
            src={cream3}
            alt="крем"
            />
            <KaruselCaption>
              <H3>Rose</H3>
              <P3>Крем для лица</P3>
            </KaruselCaption>
        </KaruselItem>
      </Karusell>
      <Karusell>
        <KaruselItem>
            <img
            className='d-block w-100'
            src={cream4}
            alt="крем"
            />
            <KaruselCaption>
              <H3>Milk</H3>
              <P4>Масло для тела</P4>
            </KaruselCaption>
        </KaruselItem>
      </Karusell>
    </Karuselll>
    </Blockkarusel>
  ) 
}

export default Karusel
