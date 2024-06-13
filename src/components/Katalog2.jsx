import React from 'react'
import styled from 'styled-components'
import Img1 from '../images/Img1.png'
import Img2 from '../images/Img2.png'
import Img3 from '../images/Img3.png'
import Img4 from '../images/Img4.png'
import Img5 from '../images/Img5.png' 
import Img6 from '../images/Img6.png'
import Img7 from '../images/Img7.png'
import Img8 from '../images/Img8.png'

const Katalog = styled.div`
    
`
const H1 = styled.h1`
padding-top:48px;
text-align: center;
font-family: Raleway;
font-size: 36px;
font-weight: 600;
`
const Main1 = styled.div`
display: flex;
justify-content:space-around; 
padding-top:60px;
`
const Main2 = styled.div`
display: flex;
justify-content:space-around; 
margin-top: 20px;
`
const H3 = styled.a`
margin-left:20px;
margin-top:290px;
font-family: Raleway;
font-weight: 600;
font-size: 16px;
text-decoration:none;
color:black;
`
const P = styled.label`
font-family: Raleway;
color:#9A9DA0;
margin-top:2px;
margin-left:20px;
`       
 
const Item1 = styled.div`
width:270px;
height: 350px ;
background-size: cover;
background-repeat: no-repeat;
background-position: center;
padding-top: 20px;
display: flex;
flex-direction: column;
`

const Katalog2 = () => {
  return (
    <Katalog>
      <H1>Каталог</H1>
      <Main1>
            <Item1 style={{ backgroundImage: `url(${Img1})`}}>
                    
                    <H3 href='Krem1karta'>High</H3>
                    <P>крем для лица</P>
            </Item1>
            <Item1 style={{ backgroundImage: `url(${Img2})`}}>
                    
                    <H3 href='Krem2karta'>Rest</H3>
                    <P>минеральная пудра</P>
            </Item1>
            <Item1 style={{ backgroundImage: `url(${Img3})`}}>
                    
                    <H3 href='Krem3karta'>Rose</H3>
                    <P>крем для лица</P>
            </Item1>
            <Item1 style={{ backgroundImage: `url(${Img4})`}}>
                    
                    <H3 href='Krem4karta'>Milk</H3>
                    <P>масло для тела</P>
              </Item1>
      </Main1>
      <Main2>
      
              <Item1 style={{ backgroundImage: `url(${Img5})`}}>
                    
                    <H3 href='Krem5karta'>Paradise</H3>
                    <P>минеральная пудра</P>
              </Item1>

              <Item1 style={{ backgroundImage: `url(${Img6})`}}>
                    <H3 href='Krem6karta'>Sun</H3>
                    <P>бомбочка для ванны</P>
              </Item1>
              <Item1 style={{ backgroundImage: `url(${Img7})`}}>
                    
                    <H3 href='Krem7karta'>Violet</H3>
                    <P>крем для лица</P>
              </Item1>
              <Item1 style={{ backgroundImage: `url(${Img8})`}}>
                    
                    <H3 href='Krem8karta'>Clean</H3>
                    <P>маска для лица</P>
              </Item1>
      </Main2>

      
    </Katalog>
  )
}

export default Katalog2
