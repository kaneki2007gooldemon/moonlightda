import React from 'react'
import styled from 'styled-components'

const Text = styled.div`
padding-left:98px;


`
const H1 = styled.p`
font-size: 32px;
margin-top:196px;
`
const P = styled.p`
font-size:18px;
margin-top:30px;
`

const Button1 = styled.button`
margin-top:40px;
height: 41px;
    width: 141px;
    color: black;
    font-size: 16px;
    font-weight: 100;
    border-radius: 1px;
    border-width: 1px;
    border-color: #B3BAC1;
    background-color: transparent;
    margin-bottom:233px;
    
`

function Karusel() {
  return (
    <Text>
        <H1>Бестселлеры</H1>
        <P>Легендарные продукты,<br/>завоевавшие любовь<br/>наших клиентов</P>
        <Button1>Смотреть все</Button1>
    </Text>
  ) 
}

export default Karusel
