import React from 'react'
import styled from 'styled-components'




const Blocku3 = styled.div`

margin-left:198px;

`
const H1 = styled.h1`
margin-top:240px;
`
const P = styled.p`
margin-top:40px;
`
const P2 = styled.p`
margin-top:10px;
`
const Button = styled.button`
height: 41px;
width: 141px;
color: black;
font-size: 14px;
font-weight: 100;
border-radius: 1px;
border-width: 1px;
border-color: #B3BAC1;
background-color: transparent;
margin-top:45px;
margin-bottom:240px;
`
const Block3 = () => {
  return (
    
        <Blocku3>
            <H1>Индивидуальный уход</H1>
            <P>Не всегда очевидно, какие элементы <br/>и минералы необходимы коже,<br/>         а многочисленные эксперименты<br/>     с разными средствами только<br/> ухудшают ее качество.</P>
            <P2>Заполните анкету, и мы подберем<br/> уход, подходящий именно вам,<br/> учитывая ваш образ жизни, место<br/> жительства и другие факторы. </P2>
            <Button>Заполните анкету</Button>
        </Blocku3>
   
  )
}

export default Block3
