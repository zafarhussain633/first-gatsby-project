import React from "react"
import styled from "styled-components"

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const GridItem = styled.div`
  margin: auto;
  padding: 1rem;
  width: 400px;

  @media (max-width: 950px) {
    padding: 0.7rem;
    width: 250px;
  }
`
const Sup = styled.sup`
  font-size: 100px;
  color: red;
  @media (max-width: 950px) {
    font-size: 50px;
  }
`
const H1 = styled.h1`
  color: red;
  font-size: 289px;
  @media (max-width: 950px) {
    font-size: 100px;
  }
`

const Moredesc = () => {
  return (
    <div>
      <h2 className="text-secondary text-center">
        want to know more about our{" "}
        <span className="text-danger">Mentor Education</span> graduate ?
      </h2>

      <GridContainer>
        <GridItem>
          <H1 className="d-inline"> 92</H1>
          <Sup>%</Sup>
          <h3 className="text-secondary">
            Our graduate were employed or enrolled in futher study after
            training
          </h3>
        </GridItem>

        <GridItem>
          <H1 className="d-inline">91</H1>
          <Sup>%</Sup>
          <h3 className="text-secondary">
            Our graduate were employed or enrolled in futher study after
            training
          </h3>
        </GridItem>
      </GridContainer>
    </div>
  )
}

export default Moredesc
