import React from "react"
import { CourseDescContainer } from "./CourseDesc1"

const CourseDesc2 = () => {
  return (
    <div className="mt-5">
      <h2 className="text-center text-secondary m-4">
        Find out what your education pathway could look
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
          <h3 className="">Business Qualification Pathway</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisime, eos odio vero
            omnis nulla atque dolore reiciendis ea. Unde repellat ad nihil,
            cumque inventore explicabo esse hic est deleniti atque quam it amet
            consectetur adipisime, eos odio vero omnis nulla atque dolore
            reiciendis ea. Unde repellat ad nihil, cumque inventore explicabo
            esse hic est deleniti atque quam enim, consequatur ipsa pariatur
            similique.
          </p>

          <h3 className="border-bottom d-inline">
            find your study pathway below
          </h3>
          <div>
            <h3 className="text-secondary d-inline">single Course study </h3>{" "}
            <i className="text-danger fa-lg fas fa-level-down-alt"></i>
          </div>
          <div>
            <h3 className="text-secondary d-inline">dual Course study </h3>{" "}
            <i className="text-danger fa-lg fas fa-level-down-alt"></i>
          </div>
        </div>
      </CourseDescContainer>
    </div>
  )
}

export default CourseDesc2
