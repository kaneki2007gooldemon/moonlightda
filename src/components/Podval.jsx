import React from 'react'
import styled from 'styled-components'
import facebook from '../images/facebook.png'
import instagram from '../images/instagram.png'
import twitter from '../images/twitter.png'
import fon from '../images/fonpodval.png'

const Podvall = styled.div`
background-image:url(${fon});
`
const Doline = styled.div`
  display: flex;
    padding-top:70px;
    justify-content:space-around;
`
const Text = styled.div`
    display: flex;
    
        
`
const H1 = styled.h1`
font-family:Raleway;
`
const P = styled.p`
    margin-left:40px;
    padding-top:15px;
    font-family: Raleway;
`
const Img = styled.div`
    display: flex;
    margin-top:15px;
    
`
const Img1 = styled.div`
    margin-left:px;
`
const Img2 = styled.div`
    margin-left:24px;
`
const Img3 = styled.div`
    margin-left:24px;
`

const Hr = styled.hr`
  width:100%;
  align:left;
  size:0;
  margin-top:50px;
`
const Posle = styled.div`
display: flex;
justify-content: space-between;
padding-top:22px;
`
const P1 = styled.p`
font-family: Raleway;
padding-left: 98px;
`
const P2 = styled.p`
font-family: Raleway;
padding-right: 97px;
`
const Podval = () => {
  return (
    <Podvall>
        <Doline>
           <H1>Moonlight</H1>
                <Text>
                  <P>Каталог</P>
                  <P>О нас</P>
                  <P>Магазины</P>
                  <P>Контакты</P>
                </Text>
            <Img>
                    <Img1><img className='facebook' src={facebook} alt=""/></Img1>
                    <Img2><img className='instagram' src={instagram} alt=""/></Img2>
                    <Img3><img className='twitter' src={twitter} alt=""/></Img3>
            </Img>
            
        </Doline>
        <Hr></Hr>
        <Posle>
          <P1>Maroon 2020 Все права защищены</P1>
          <P2>Политика конфиденциальности</P2>
        </Posle>
    </Podvall>
  )
}

export default Podval
