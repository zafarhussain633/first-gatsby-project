import React from "react"
import Layout from "../../Component/Layout"
import Course_layout from "../../Component/Course_layout"
import CourseDesc1 from "../../Component/CourseDetail/CourseDesc1"
import CourseDesc2 from "../../Component/CourseDetail/CourseDesc2"
import { Salarydesc } from "../../Component/CourseDetail/Salarydesc"
import CertificateLyout from "../../Component/CourseDetail/CertificateLyout"
import Moredesc from "../../Component/CourseDetail/Moredesc"
import CourseTestimonial from "../../Component/CourseDetail/CourseTestimonial"
import Contact from "../../Component/Contact"
export default function Home() {
  return (
    <Layout>
      <main className="container">
        <Course_layout />
        <CourseDesc1 />
        <Salarydesc />
        <CourseDesc2 />
        <CertificateLyout />
        <Moredesc />
        <CourseTestimonial />
        <Contact />
      </main>
    </Layout>
  )
}
