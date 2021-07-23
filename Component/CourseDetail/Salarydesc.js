import React from "react"
import styled from "styled-components"
import "./style.css"

const Tablerow = styled.tr`
  margin: 10px;
`
const Container = styled.div`
  display: flex;
  justify-content: center;
`

export const Salarydesc = () => {
  return (
    <Container>
      <div>
        <table style={{ width: "100%" }}>
          <thead>
            <Tablerow className="m-2">
              <th>
                <b>Job Role</b>
              </th>
              <th>
                <b>AVG. Salary</b>
              </th>
              <th>
                <b>Required Qualificaion / s</b>
              </th>
            </Tablerow>
          </thead>
          <tbody>
            <Tablerow className="m-2">
              <td>job 1</td>
              <td>$55k per year</td>
              <td>CERTIFICATE IV IN Acounting and BookKeeping</td>
            </Tablerow>
            <Tablerow className="m-2">
              <td>job 2</td>
              <td>$55k per year</td>
              <td>94</td>
            </Tablerow>
            <Tablerow className="m-2">
              <td>job 3</td>
              <td>$55k per year</td>
              <td>94</td>
            </Tablerow>
            <Tablerow className="m-2">
              <td>job 4</td>
              <td>$55k per year</td>
              <td>94</td>
            </Tablerow>
            <Tablerow className="m-2">
              <td>job 5</td>
              <td>$55k per year</td>
              <td>94</td>
            </Tablerow>
          </tbody>
        </table>
      </div>
    </Container>
  )
}
