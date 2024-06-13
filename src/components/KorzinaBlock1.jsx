import React from 'react'
import styled from 'styled-components'
import karzina from '../images/karzina.png'
const Block111 = styled.div`
text-align: center;

`

const KorzinaBlock1 = () => {
  return (
    <Block111>
      <img
            className='d'
            src={karzina}
            alt="крем"
            />
    </Block111>
  )
}

export default KorzinaBlock1
