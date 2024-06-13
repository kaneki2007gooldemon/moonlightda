import React from 'react'
import styled from 'styled-components'
import kart3 from '../images/img6.png'

const Krem2b = styled.div`
display: flex;
`
const Kartinka = styled.div`
padding-top: 40px;
padding-left: 68px;
`
const Sprava = styled.div`
font-family: Raleway;
padding-top: 100px;
padding-left: 100px;
`
const P1 = styled.p`
padding-top: 10px;
color: #9A9DA0;
font-weight: 400;
font-size: 16px;
`
const H1 = styled.h1`
font-weight: 500;
font-size: 32px;
`
const P2 = styled.p`
padding-top: 30px;
font-weight: 400;
font-size: 16px;
`
const P3 = styled.p`
padding-top:15px;
`
const Img = styled.img`
width:630px;
height:740px;
 
`
const Sostav = styled.div`
font-family: Raleway;
`
const H2 = styled.h2`
font-weight: 600;
font-size: 18px;
padding-top:18px;
`
const Sostav2 = styled.div`
`
const P4 = styled.p`
padding-top:10px;
font-weight: 400;
font-size: 12px;
`
const Hr = styled.hr`
color:#B3BAC1;
`
const Line = styled.div`
padding-top:25px;
`
const Line2 = styled.div`
padding-top:25px;
`
const H3 = styled.h3`
font-weight: 600;
font-size: 18px;
padding-top:18px;
`
const Sposob = styled.div`
`
const P5 = styled.p`
padding-top:10px;
font-weight: 400;
font-size: 12px;`
const Cena = styled.div`
display: flex;
`
const P6 = styled.p`
font-weight: 600;
font-size: 30px;
margin-top: 50px;
padding-right:32px; 
`
const Button = styled.button`
height: 55px;
width: 200px;
color: black;
font-size: 18px;
font-weight: 500;
border-radius: 1px;
border-width: 1px;
border-color: #B3BAC1;
background-color: transparent;
margin-top:45px;
margin-bottom:240px;
font-family: Raleway;
&:hover{
  background-color: black;
  color:white;
}
`
const Ccena = styled.div`
display: flex;
`

const Krem6block = () => {
  return (
    <Krem2b>
      <Kartinka> 
            <Img
            className='cream'
            src={kart3}
            alt="крем"
            />
      </Kartinka>
      <Sprava>
        <H1>Sun</H1>
        <P1>бомбочка для ванны</P1>
        <P2>Увлажняющий крем идеально<br/> подходит для повседневного<br/> ухода за молодой кожей.</P2>
        <P3>Крем равномерно распределяется<br/> по поверхности благодаря легкой<br/> текстуре, обеспечивает глубокое<br/> увлажнение, регенерацию клеток.</P3>
        <Sostav>
          <Line>
            <Hr></Hr>
          </Line>
          <H2>Состав</H2>
          <Sostav2>
              <P4>Aqua, Cyclomethicone, Dicaprylyl Carbonate, Butylene<br/> Glycol, Glycerin, Tapioca Starch, Nelumbium Speciosum<br/> Flower Extract, Calendula Officinalis Flower Extract,
              <br/> Propylene Glycol, Tocopherol, Glycine Soja Oil,<br/> Dimethiconol, Citronellol, Limonene.</P4>
          </Sostav2>
        </Sostav>
          <Line2>
            <Hr></Hr>
          </Line2>
        <Sposob>
          <H3>Способ применения</H3>
          <P5>Нанесите крем на очищенную кожу лица легкими<br/> массажными круговыми движениями, избегая<br/> области вокруг глаз. Подходит для дневного<br/>
          и ночного ухода. </P5>
        </Sposob>
        <Ccena>
        <Cena>
            <P6>890 Р</P6>
            <Button>Добавить в корзину</Button>
        </Cena>
        </Ccena>
      </Sprava>
    </Krem2b>
  )
}

export default Krem6block
