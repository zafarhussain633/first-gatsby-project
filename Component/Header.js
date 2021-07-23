import React from "react"
import styled from "styled-components"

const TitleContainer = styled.div`
  background-image: url("https://blog.udemy.com/wp-content/uploads/2014/05/shutterstock_121618450.jpg");
  background-size: cover;
  font-size: 40px;
  text-align: center;
  font-family: sans-serif;
  height: 129px;
  padding: 45px 220px 45px 220px;

  @media (max-width: 950px) {
    padding: 45px 0px;
    font-size: 30px;
  }
`

const Header = () => {
  return <TitleContainer>STUDENT INFORMATION SESSION</TitleContainer>
}

export default Header
