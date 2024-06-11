import React from 'react'
import styled from 'styled-components'

const Blockk1 = styled.div`
font-family:Raleway;
`
const Text1 = styled.div`
padding-top: 60px;
padding-left:400px;
`
const H1 = styled.h1`
padding-top:48px;
text-align: center;
font-family: Raleway;
font-size: 36px;
font-weight: 600;
   
    
`
const H2 = styled.h2`
color: green;
font-family: Raleway;
font-weight:700;
font-size:40px;
`
const H3 = styled.h3`
padding-top:10px;
font-family: Raleway;
font-weight:700;
font-size:20px;   
`
const Textt = styled.div`
text-align: center;
font-family: Raleway;
font-weight: 500;
font-size: 19px;
`
const Text2 = styled.div`
padding-top: 100px;
`
const Text3 = styled.div`
padding-top:30px;
`
const P1 = styled.p`
    
`

const Textposle = styled.div`
display: flex;
padding-top: 100px;
justify-content:center;
`
const Text11 = styled.div`

`
const Text22 = styled.div`
padding-left:45px;
`
const H4 = styled.h4`
font-weight:700;
font-size: 17px;
`
const P2 = styled.p`
padding-top: 20px;
font-weight: 500;
font-size: 19px;
`
const Text33 = styled.div`
padding-top:60px;
padding-bottom:100px;
`
const T1 = styled.div`

`
const T2 = styled.div`
padding-top:25px;
`
const T3 = styled.div`
padding-top:25px;

`
const P3 = styled.p`
text-align: center;
font-family: Raleway;
font-weight: 500;
font-size: 19px;
`
const Onasblock1 = () => {
  return (
    <Blockk1>
      <H1>О нас</H1>
        <Text1>
            <H2>КТО МЫ?</H2>
            <H3>МЫ НЕ СТИЛИСТЫ,</H3>
            <H3>НЕ ПАРИКМАХЕРЫ,</H3>
            <H3>НЕ КОСМЕТОЛОГИ!</H3>
          </Text1>
          <Textt>
            <Text2>
                <P1>НО мы занимаемся online-продажами профессиональной и брендовой косметики с 2009 года. За это время наша команда<br/> реализовала несколько успешных проектов в сфере интернет-торговли профессиональной косметикой. На рынке их знают<br/> все! И все они отличаются низкими ценами. Когда-то именно мы запустили первый интернет-дискаунтер косметики для<br/> волос. Мы ВСЕГДА боролись с завышенными розничными ценами на профессиональную и брендовую косметику и нам<br/> ВСЕГДА это удавалось!</P1>
            </Text2>
            <Text3>
                <P1>Мы не хотим поставить 100% накрутку и ждать "своего" единственного покупателя. Мы просто хотим продавать МНОГО<br/> хорошей косметики и парфюмерии! И чем больше будет у нас покупателей - тем большие скидки мы получим от<br/> поставщиков и дистрибьютеров, а, следовательно, цены для вас станут еще ниже. Такова политика нашего бизнеса. Война<br/> высоким ценам в сфере индустрии красоты. А вообще мы бы хотели, чтобы российский покупатель имел возможность<br/> покупать свои любимые бренды по тем ценам, по которым их покупают в США и Европе.</P1>
            </Text3>
          </Textt>
          <Textposle>
            <Text11>
                <H4>МЫ ДЕЛАЕМ ВАМ ПРЕДЛОЖЕНИЕ, ОТ<br/> КОТОРОГО НЕВОЗМОЖНО ОТКАЗАТЬСЯ!</H4>
                <P2>Закупочные или близкие к ним цены на самую<br/>популярную и востребованную косметику и<br/>парфюмерию!</P2>
            </Text11>
            <Text22>
                <H4>МЫ НЕ ТОРГУЕМ РЕПЛИКАМИ И<br/> ТОВАРАМИ С ИСТЕКШИМИ СРОКАМИ<br/> ГОДНОСТИ!</H4>
                <P2>Нам это не нужно, в этом нет никакого смысла!<br/> Сиюминутная прибыль нам не важна. За эти годы нами<br/> выстроены взаимоотношения со всеми официальными<br/> дистрибьюторами и крупными оптовыми компаниями</P2>
            </Text22>
            
          </Textposle>
            <Text33>
                <T1>
                    <P3>Вся представленная на сайте продукция ОРИГИНАЛЬНАЯ  и мы гарантируем, что заменим товар или вернем деньги, если<br/> Вы обнаружите брак или любые несоответствия.</P3>
                </T1>
                <T2>
                    <P3>Мы старались собрать все самое, самое. Если полюбившийся бренд не представлен в России – напишите нам. И, возможно,<br/> он скоро появится в BDC.</P3>
                </T2>
                <T3>
                    <P3>Мы создали этот проект, чтобы сделать Вас немного счастливее. Пусть не ДАРОМ, но будьте уверены, по самой хорошей<br/> цене! И пусть никто не уйдет обиженным!</P3>
                </T3>
            </Text33>
    </Blockk1>
  )
}

export default Onasblock1
