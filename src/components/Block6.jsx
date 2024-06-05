import React from 'react'
import styled from 'styled-components'
import facebook from '../images/facebook.png'
import instagram from '../images/instagram.png'
import twitter from '../images/twitter.png'
import fon from '../images/fonb6.png'

const Block66 = styled.div`
padding-top: 240px;
padding-left: 150px;
padding-bottom: 149px;
`
const Text = styled.div`

`
const Fonn = styled.div`
background-image: url(${fon});
width: 770px;
height: 554px;
padding-left: 100px;
padding-top: 100px;
`
const H1 = styled.h1`
padding-bottom: 40px;
font-family: Raleway;
font-weight: 600;
font-size: 32px;
`
const H3 = styled.h3`
padding-top: 45 px;
font-family: Raleway;
font-weight: 600;
font-size: 18px;
`
const P = styled.p`
padding-top: 15px;
padding-bottom: 35px;
font-family: Raleway;
font-weight: 400;
font-size: 18px;
`
const Img = styled.div`
display: flex;
padding-top: 20px;
`
const Img1 = styled.div`
   
`
const Img2 = styled.div`
padding-left:20px;
`
const Img3 = styled.div`
padding-left:20px;
margin-bottom:242px; 
`


const Block6 = () => {
  return (
    <Block66>
        <Fonn>
            <Text>
            <H1>Контакты</H1>
            <H3>Адрес</H3>
            <P>Санкт-Петербург,<br/>ул. Большая Конюшенная, 19</P>
            <H3>Телефон</H3>
            <P>+7 (952) 000-00-52</P>
            <H3>E-mail</H3>
            <P>Albluck@52.ru</P>
            </Text>
                <Img>
                    <Img1><img className='facebook' src={facebook} alt=""/></Img1>
                    <Img2><img className='instagram' src={instagram} alt=""/></Img2>
                    <Img3><img className='twitter' src={twitter} alt=""/></Img3>
                    
                </Img>
        </Fonn>
    </Block66>
  )
}

export default Block6
