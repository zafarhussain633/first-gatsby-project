import React from "react"
import styled from "styled-components"

const TopHeader = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 780px) {
    display: block;
    margin-top: 0px;
    justify-content: center;
  }
`

const Navitem = styled.div`
  width: ${props => (props ? props.width : "20%")};
  margin-left: ${props => props.left_margin};
  text-align: ${props => props.align_text};
  opacity: 0.5;

  @media (max-width: 900px) {
    margin-top: -10px;
    width: 100%;
    margin-left: auto;
    text-align: center;
  }
`
const Headtext = styled.div`
  display: inline-block;
  @media (max-width: 910px) {
    display: none;
  }
`

const Topbar = () => {
  return (
    <div className="container">
      <TopHeader>
        <Navitem width="auto">
          <img
            src="https://www.mentor.edu.au/images/MentorEducation-RTO-Logo.png"
            alt="logo"
          />
        </Navitem>

        <Navitem align_text="justify" left_margin="20px" width="20%">
          <Headtext>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            aliquam.
          </Headtext>
        </Navitem>

        <Navitem left_margin="auto" align_text="right">
          <div>prefer to speak on the phone call us</div>
          <div>
            <i className="fas fa-tty">
              <b className="text-primary mx-2">1800 2000 3000</b>
            </i>
          </div>
          <div>internation: +61 123455</div>
        </Navitem>
      </TopHeader>
    </div>
  )
}

export default Topbar
