import React from "react"
import styled from "styled-components"

export const CourseDescContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 950px) {
    grid-template-columns: auto;
  }
`

const CourseDesc1 = () => {
  return (
    <div className="mt-5">
      <h2 className="text-center text-secondary m-4">
        How can you further your career with this course
      </h2>
      <CourseDescContainer>
        <div>
          <img
            className="img img-responsive img-fluid"
            src="https://s3.envato.com/files/250516707/0O1A4905.jpg"
            alt="img"
          />
        </div>

        <div>
          <h3>Career Skillsets</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisime, eos odio vero
            omnis nulla atque dolore reiciendis ea. Unde repellat ad nihil,
            cumque inventore explicabo esse hic est deleniti atque quam it amet
            consectetur adipisime, eos odio vero omnis nulla atque dolore
            reiciendis ea. Unde repellat ad nihil, cumque inventore explicabo
            esse hic est deleniti atque quam enim, consequatur ipsa pariatur
            similique.
          </p>
        </div>
      </CourseDescContainer>
    </div>
  )
}

export default CourseDesc1
