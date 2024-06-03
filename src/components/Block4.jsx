import React from 'react'
import styled from 'styled-components'
import fon from '../images/semen.png'

const Dlyfona = styled.div`
background-image:url(${fon});
background-size: cover;
background-repeat:no-repeat;
height: 500px;
`


const Blocku4 = styled.div`
text-align:center;
padding-top:150px;

`
const H1 = styled.h1`
    `
const Button = styled.button`
height: 41px;
width: 141px;
color: black;
font-size: 16px;
font-weight: 100;
border-radius: 1px;
border-width: 1px;
border-color: #B3BAC1;
background-color: transparent;
margin-top:50px;
`
const Block4 = () => {
    return (
    <Dlyfona>
      <Blocku4>
            <H1>
                “Мы стремимся сделать уход за кожей доступным<br/>
                 и приятным ритуалом для всех, кто хочет<br/>
                 заботиться о себе и своем теле”  fdsf
            </H1>   
            <Button>Наша история</Button>
      </Blocku4>
    </Dlyfona>
    )
  }
  export default Block4
