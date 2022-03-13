import styled from 'styled-components'

const Button = styled.button`

color: ${({color})=>color};
background-color: ${({backcolor})=>backcolor};
border: ${({border})=>border};
padding: 6px 8px;
margin:5px;

`
export {Button}