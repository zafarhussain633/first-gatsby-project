import React from "react"
import styled from "styled-components"

const CourseTitle = styled.h2`
  border-bottom: 3px solid grey;
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  margin-top: 24px;

  @media (max-width: 950px) {
    grid-template-columns: auto;
  }
`

const Hostcontainer = styled.div`
  display: flex;
  margin-top: 47px;
  justify-content: space-around;
`

const TabContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  margin: 20px 20px 0px 20px;
`
const TabContainerItem = styled.div`
  text-align: center;
  border: 2px solid grey;
  font-weight: bolder;
  color: grey;
  padding: 5px 1px 5px 1px;
`

const Textbox = styled.div`
  height: 483px;
  border: 2px solid grey;
  padding: 100px 40px 100px 40px;
  overflow: hidden;
  @media (max-width: 950px) {
    padding: 15px;
    text-align: justify;
  }
`

const Course_layout = () => {
  return (
    <div className="container mt-3">
      <h2 className="text-center">Course Name</h2>

      <GridContainer>
        <div className="p-3">
          {/* column 1 start here */}
          <CourseTitle className="d-inline">Your course</CourseTitle>
          <Hostcontainer>
            <CourseHost
              img_link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSCqS3h4ZPbl_kkwcwgmprm3HkpyzmTNgwPQ&usqp=CAU"
              name="Danial"
              designation="EA Team Leader"
            />

            <CourseHost
              img_link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSCqS3h4ZPbl_kkwcwgmprm3HkpyzmTNgwPQ&usqp=CAU"
              name="Eric"
              designation="Content Writer"
            />

            <CourseHost
              img_link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSCqS3h4ZPbl_kkwcwgmprm3HkpyzmTNgwPQ&usqp=CAU"
              name="Danial"
              designation="CEO"
            />
          </Hostcontainer>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus velit
            repellat ut laborum voluptas aperiam culpa? Dolore repudiandae
            eveniet non eaque, est sunt nemo mollitia assumenda quod quae!
            Reiciendis nisi enim maiores minus velit quidem nobis, quis
            voluptatum doloremque tempore. Nequeis eos deserunt a sit nesciunt
            alias accusantium incidunt nulla provident? Inventore vero animi
            sed, soluta consectetur ab reiciendis quod similique labore id
            voluptatibus sapiente unde omnis obcaecati sit illo! Soluta neque
            tempora quia ipsa minima, ducimus veniam.
          </p>
          <TabContainer>
            <TabContainerItem className="bg-secondary text-white">
              TAB
            </TabContainerItem>
            <TabContainerItem>TAB</TabContainerItem>
            <TabContainerItem>TAB</TabContainerItem>
            <TabContainerItem>TAB</TabContainerItem>
            <TabContainerItem>TAB</TabContainerItem>
          </TabContainer>

          <Textbox>
            <b>Lorem ipsum dolor, sit amet consectetur adipisicing</b> elit.
            Amet harum ipsum temporibus suscipit incidunt repellendus earum
            soluta similique? At, quaerat. Obcaecati, inventore cum. Delectus
            iusto facilis aliquid provident tempore cum optio minima obcaecati
            animi autem molestias at, dicta, fugiat ipsa similique error magnam
            natus vero.{" "}
            <b className="text-danger">Assumenda, eveniet labore.</b> Cupiditate
            facere nulla aliquam expedita sapiente ipsum tenetur enim id
            nostrum. Dolor unde ut dolores corporis odit assumenda, quidem minus
            exercitationem quis voluptatem blanditiis aut laudantium eos fugiat!
            Quia est repellat dolore necessitatibus dolorem voluptate excepturi
            rem consectetur, quo veniam corporis architecto reiciendis debitis
            cupiditate similique illum! Suscipit atque pariatur accusamus sequi.
          </Textbox>
        </div>

        {/* column 1 end here */}
        <div>
          <Form title="SIGN UP NOW" btnText="REGISTER" displayPhone="d-none" />
          <Form
            title="DOWNLOAD A COURSE GUIDE"
            btnText="REGISTER"
            displayPhone="d-block"
          />
        </div>
        {/* column 2  end here */}
      </GridContainer>
    </div>
  )
}

const CourseHost = ({ img_link, name, designation }) => {
  return (
    <>
      <div className="text-center m-1">
        <div>
          <img
            src={img_link}
            alt="img"
            className="img-fluid rounded-circle"
            width="200px"
          />
        </div>
        <h3>{name}</h3>
        <p>{designation}</p>
      </div>
    </>
  )
}

function Form({ title, btnText, displayPhone }) {
  return (
    <>
      <h2 className="text-center mt-3">{title}</h2>
      <div className="mt-3">
        <label  htmlFor="name" className="m-1">
          <b>Name</b>
        </label>
        <div>
          <input type="text" className="w-100 p-2" height="75px" name="name" />
        </div>
      </div>
      <div className="mt-3">
        <label  htmlFor="email" className="m-1">
          <b>Email</b>
        </label>
        <div>
          <input type="email" className="w-100 p-2" name="email" />
        </div>
      </div>

      <div className={`mt-3 ${displayPhone}`}>
        <label   htmlFor="phone" className="m-1">
          <b>phone</b>
        </label>
        <div>
          <input type="phone" className="w-100 p-2" name="phone" />
        </div>
      </div>
      <button className="btn btn-danger p-2 mt-3 w-100">{btnText}</button>
    </>
  )
}

export default Course_layout
