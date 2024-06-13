import React from 'react'
import styled from 'styled-components'
import K1 from '../images/kk1.png'
import K2 from '../images/kk2.png'
import K3 from '../images/kk3.png'
import K4 from '../images/kk4.png'

const Block2 = styled.div`
`
const Snizu = styled.div`
`
const H4 = styled.h4`
font-family: Raleway;
font-size: 32px;
font-weight: 600;
line-height: 40px;
text-align: center;

`
const Item1 = styled.div`
`
const Kartinki = styled.div`
padding-top: 60px;
display: flex;
justify-content: space-around;
padding-bottom: 100px;
`
const H5 = styled.h5`
font-family: Raleway;
font-size: 16px;
font-weight: 600;
text-align: left;
`
const P1 = styled.p`
font-family: Raleway;
font-size: 13px;
font-weight: 500;
text-align: left;
color:#9A9DA0;
`
const Krem2block2 = () => {
  return (
    <Block2>
    <Snizu>
        <H4>Вам также может понравиться</H4>
    </Snizu>
    <Kartinki>
        <Item1><img
            className='d'
            src={K1}
            alt="крем"
            />
        <H5>Clean</H5>
        <P1>маска для лица</P1>
        </Item1>

        <Item1><img
            className='d'
            src={K2}
            alt="крем"
            />
        <H5>Lotos</H5>
        <P1>маска для лица</P1>
        </Item1>
        <Item1><img
            className='d'
            src={K3}
            alt="крем"
            />
        <H5>Lavender</H5>
        <P1>мыло ручной работы</P1>
        </Item1>
        <Item1><img
            className='d'
            src={K4}
            alt="крем"
            />
        <H5>Coconut</H5>
        <P1>мыло для тела</P1>
        </Item1>
    </Kartinki>
    </Block2>
  )
}

export default Krem2block2
