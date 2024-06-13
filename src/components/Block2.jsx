import React from 'react'
import styled from 'styled-components'
import fon2 from '../images/fonblock2.png'



const Dlyafona = styled.div`
background-image:url(${fon2});
background-size: contain;
background-repeat: no-repeat;
`

const Blocku2 = styled.div`
position: relative;
left: 1270px;
padding-top: 150px;
`
const H1 = styled.h1`
font-family: Raleway;
font-weight: 600;
font-size: 32px;
padding-bottom: 30px;

`
const P = styled.p`
font-family: Raleway;
padding-bottom: 40px;
font-weight: 500;
font-size: 18px;
`
const Button = styled.button`
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

const Block2 = () => {
  return (
    <Dlyafona>
      <Blocku2>
        <H1>Встречайте весну <br/> вместе с нами</H1>
        <P>Попробуйте новую коллекцию <br/> ухаживающих средств для лица <br/> с SPF защитой</P>
        <Button>Подробнее</Button>
      </Blocku2>
    </Dlyafona>
  )
}

export default Block2
