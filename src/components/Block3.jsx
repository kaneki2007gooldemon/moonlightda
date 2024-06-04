import React from 'react'
import styled from 'styled-components'
import fon from '../images/block33.png'
import font from '../images/fontxtb3.png'

const Block33 = styled.div`
display: flex;
`
const Img = styled.div`
padding-top: 206px;
padding-left: 71px;
`
const Blocku3 = styled.div`

margin-left:250px;

`
const H1 = styled.h1`
margin-top:240px;
font-family: Raleway;
font-weight: 500;
font-size: 45px;
`
const P = styled.p`
margin-top:40px;
font-family: Raleway;
font-weight: 400;
font-size: 25px;
`
const P2 = styled.p`
margin-top:10px;
font-family: Raleway;
font-weight: 400;
font-size: 25px;
`
const Button = styled.button`
height: 55px;
width: 180px;
color: black;
font-size: 18px;
font-weight: 500;
border-radius: 1px;
border-width: 1px;
border-color: #B3BAC1;
background-color: transparent;
margin-top:45px;
margin-bottom:240px;
font-family: Raleway;
`
const Block3 = () => {
  return (
    <Block33>
        <Blocku3>
            <H1>Индивидуальный уход</H1>
            <P>Не всегда очевидно, какие элементы <br/>и минералы необходимы коже,<br/>         а многочисленные эксперименты<br/>     с разными средствами только<br/> ухудшают ее качество.</P>
            <P2>Заполните анкету, и мы подберем<br/> уход, подходящий именно вам,<br/> учитывая ваш образ жизни, место<br/> жительства и другие факторы. </P2>
            <Button>Заполните анкету</Button>
        </Blocku3>
        <Img>
        <img
            className='b3k'
            src={fon}
            alt=""
            />
        </Img>
    </Block33>
   
  )
}

export default Block3
