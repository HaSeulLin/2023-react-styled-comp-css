import React from 'react'
import styled from 'styled-components'


// const StyledButton 이라는 이름으로
// a태그에 color값, backgound-color값을 이용하여 작성
export default function StyleComp(props) {

    const Title = styled.h1`
        color : blue;
        background-color : pink;
    `
    const StyledButton = styled.a`
        color : white;
        background-color : black;
        padding : 10px 20px;
        border-radius : 20px;
        text-decoration : none;
        cursor : pointer;
    `

  return (
    <div>
        <Title>{props.children}</Title>
        <StyledButton href='/'>스타일 버튼</StyledButton>
    </div>
  )
}
