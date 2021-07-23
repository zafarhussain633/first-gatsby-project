import React from "react"
import styled from "styled-components"

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const Button = styled.button`
  float: right;
  width: 350px;
  background-color: #ff0000;
  color: #ffffff;
  letter-spacing: 0px;
  font-weight: bold;
  font-size: 2rem;

  @media (max-width: 950px) {
    width: auto;
    font-size: 1.3rem;
  }
`
const Contact = () => {
  return (
    <div>
      <h1 className="text-center text-secondary mt-5">
        Need more <b className="text-danger">assistance</b> or talk to an expert
      </h1>

      <form>
        <GridContainer>
          <div className="mt-3 mx-3">
            <label  htmlFor="name" className="m-1">
              <b>Name</b>
            </label>
            <div>
              <input type="text" className="w-100 p-2" height="75px"  name="name" />
            </div>
          </div>
          <div className="mt-3 mx-3">
            <label  htmlFor="email" className="m-1">
              <b>Email</b>
            </label>
            <div>
              <input type="email" name="email" className="w-100 p-2" />
            </div>
          </div>
        </GridContainer>

        <div className={`mt-3 mx-3`}>
          <label  htmlFor="phone" className="m-1">
            <b>phone</b>
          </label>
          <div>
            <input type="phone" name="phone" className="w-100 p-2" />
          </div>
        </div>

        <div className={`mt-3 mx-3`}>
          <label  htmlFor="textarea" className="m-1">
            <b>How can i help you ?</b>
          </label>
          <div>
            <textarea
              type="phone"
              className="w-100 p-2"
              name="textarea"
              rows="8"
              style={{ resize: "none" }}
            />
          </div>
        </div>

        <Button className="p-3 mt-3 ">REACH OUT</Button>
      </form>
    </div>
  )
}

export default Contact
