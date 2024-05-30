import React from 'react'
import styled from 'styled-components'



const Block1 = styled.div`
    
`

const Header1 = styled.div`
padding-right: 1100px;
margin-left: 35px;
`


const Header2 = styled.div`
margin-right: 35px;
justify-content:right;
display: flex;
`

const Container = styled.div`
display: flex;    
padding-top: 27px;
`

const Afterheader = styled.div`
display: flex;
justify-content:space-around;
padding-top: 70px;    
`

const Imglico = styled.div`

`

const TextAL = styled.div`

`

const Imgtelo = styled.div`

`



const Navbar = () => {
  return (
    <Block1>
      <Container>
            <Header1>
                <h1>Moonlight</h1>
            </Header1>
            <Header2>
                <p>Каталог</p>
                <p>О нас</p>
                <p>Контакты</p>
            </Header2>
      </Container>
      <Afterheader>
          <Imglico>
              <p>Уход для лица</p>
          </Imglico>
          <TextAL>
              <h1>MOONLIGHT</h1>
              <p>Натуральная косметика<br/>для бережного ухода за кожей</p>
              <button>Подробнее</button>
          </TextAL>
          <Imgtelo>
               <p>Уход для тела</p>
          </Imgtelo>
      </Afterheader>
    </Block1>
  )
}

export default Navbar
