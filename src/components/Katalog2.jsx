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
  padding-top:30px;
`
const H3 = styled.a`
  margin-top: 299px;
  margin-left:20px;
  font-family: Raleway;
  font-weight: 600;
  font-size: 16px;
`
const P = styled.p`
margin-left:20px;
font-family: Raleway;
color:#9A9DA0;
`       
const Img = styled.div`

`   
const Item1 = styled.div`
background-image: url(${Img1});
width:270px;
height: 350px;
`
const Item2 = styled.div`
  background-image: url(${Img2});
  width:270px;
  height: 350px;
`
const Item3 = styled.div`
  background-image: url(${Img3});
  width:270px;
  height: 350px;
`
const Item4 = styled.div`
  background-image: url(${Img4});
  width:270px;
  height: 350px;
`
const Item5 = styled.div`
  background-image: url(${Img5});
  width:270px;
  height: 350px;
`
const Item6 = styled.div`
  background-image: url(${Img6});
  width:270px;
  height: 350px;
`
const Item7 = styled.div`
  background-image: url(${Img7});
  width:270px;
  height: 350px;
`
const Item8 = styled.div`
  background-image: url(${Img8});
  width:270px;
  height: 350px;
`
const Katalog2 = () => {
  return (
    <Katalog>
      <H1>Каталог</H1>
      <Main1>
            <Item1>
                    
                    <H3 href='Krem1karta'>High</H3>
                    <P>крем для лица</P>
            </Item1>
            <Item2>
                    
                    <H3 href='Krem2karta'>Rest</H3>
                    <P>минеральная пудра</P>
            </Item2>
            <Item3>
                    
                    <H3 href='Krem3karta'>Rose</H3>
                    <P>крем для лица</P>
            </Item3>
            <Item5>
                    
                    <H3>Milk</H3>
                    <P>масло для тела</P>
              </Item5>
      </Main1>
      <Main2>
      
              <Item5>
                    
                    <H3>Paradise</H3>
                    <P>минеральная пудра</P>
              </Item5>
              <Item6>
                    
                    <H3>Sun</H3>
                    <P>бомбочка для ванны</P>
              </Item6>
              <Item7>
                    
                    <H3>Violet</H3>
                    <P>крем для лица</P>
              </Item7>
              <Item8>
                    
                    <H3>Clean</H3>
                    <P>маска для лица</P>
              </Item8>
      </Main2>

      
    </Katalog>
  )
}

export default Katalog2
