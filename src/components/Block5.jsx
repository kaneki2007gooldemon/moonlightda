import React from 'react'
import styled from 'styled-components'
import k1 from '../images/kart1.png'
import k2 from '../images/kart2.png'
import k3 from '../images/kart3.png'
import k4 from '../images/kart4.png'
import k5 from '../images/kart5.png'
import k6 from '../images/kart6.png'

const Block11 = styled.div`
display: flex;
`
const Kartinki = styled.div`
padding-top: 140px;
padding-left: 200px;
`
const Textt = styled.div`
padding-top: 275px;
padding-left: 150px;
`
const K1 = styled.div`
    
`
const K2 = styled.div`
    
`
const H1 = styled.h1`
font-family: Raleway;
font-weight: 600;
font-size: 32px;
`
const P = styled.p`
padding-top: 30px;
font-family: Raleway;
font-weight: 500;
font-size: 18px;
`
const Button = styled.button`
margin-top: 40px;
height: 41px;
width: 141px;
color: black;
font-size: 16px;
font-weight: 500;
border-radius: 1px;
border-width: 1px;
border-color: #B3BAC1;
background-color: transparent;
&:hover{
  background-color: #8E9881;
  color: white;
} 
`
const Block5 = () => {
  return (
    <Block11>
      <Kartinki>
        <K1>
        <img
            className='b3k'
            src={k1}
            alt=""
            />
        <img
            className='b3k'
            src={k2}
            alt=""
            />
        <img
            className='b3k'
            src={k3}
            alt=""
            />
        </K1>
        <K2>   
        <img
            className='b3k'
            src={k4}
            alt=""
            />
        <img
            className='b3k'
            src={k5}
            alt=""
            />
        <img
            className='b3k'
            src={k6}
            alt=""
            />   
        </K2>                     
      </Kartinki>
      <Textt>
        <H1>Присоединяйтесь к нам</H1>
        <P>Подпишитесь на наш аккаунт @marooncare <br/>и узнавайте о новиках и акциях первыми</P>
        <Button>Подписаться</Button>

      </Textt>
    </Block11>
  )
}

export default Block5
