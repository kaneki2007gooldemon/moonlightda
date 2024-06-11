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
display: flex;

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

const Karta = styled.div`
padding-top:15%;
padding-left:15%;
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
          <Karta>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2011.610654699278!2d30.32050837695893!3d59.93879686208769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696310fca5ba729%3A0xea9c53d4493c879f!2z0JHQvtC70YzRiNCw0Y8g0JrQvtC90Y7RiNC10L3QvdCw0Y8g0YPQuy4sIDE5LCDQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQsywgMTkxMTg2!5e1!3m2!1sru!2sru!4v1717763672732!5m2!1sru!2sru"></iframe>
          </Karta>
          

      
      </Block66>
    ) 
}

export default Block6
