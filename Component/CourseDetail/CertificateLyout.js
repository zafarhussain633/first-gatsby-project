import React from "react"
import styled from "styled-components"

const CertificateBody = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20x;
`

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const CertificateLyout = () => {
  return (
    <div>
      <CertificateBody>
        <div>
          <i className="fas right_arrow text-danger">
            <b className="text-secondary">Certificate III</b>
          </i>
        </div>

        <div>
          <i className="fas right_arrow text-danger fa-long-arrow-alt-right">
            <b className="text-secondary">Certificate IV</b>
          </i>
        </div>

        <div>
          <i className="fas right_arrow text-danger fa-long-arrow-alt-right">
            <b className="text-secondary">Diploma</b>
          </i>
        </div>

        <div>
          <i className="fas right_arrow text-danger fa-long-arrow-alt-right">
            <b className="text-secondary">Advance Diploma</b>
          </i>
        </div>

        <div></div>
      </CertificateBody>
      <CardContainer>
        <CertificateCard />
        <CertificateCard />
        <CertificateCard />
        <CertificateCard />
        <CertificateCard />
        <CertificateCard />
        <CertificateCard />
        <CertificateCard />
        <CertificateCard />
      </CardContainer>
    </div>
  )
}

const CertificateCard = () => {
  return (
    <div className="shadow m-3 p-2">
      <div>
        <img
          className="img img-fluid img-responsive"
          src="https://previews.123rf.com/images/masterwilu/masterwilu1303/masterwilu130300412/18618939-an-imgae-of-blue-sky-with-clouds.jpg"
          alt="img"
          width="268px"
        />
      </div>
      <h4 className="text-secondary">FN123456 - </h4>
      <p>certificate IV in business</p>
      <button className="btn btn-danger w-100">find Out More</button>
    </div>
  )
}

export default CertificateLyout
