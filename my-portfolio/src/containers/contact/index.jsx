import React from 'react'
import { BsInfoCircleFill } from 'react-icons/bs'
import Pageheader from '../../components/pageheader'

const Contact = () => {
  return (
    <section className="p-8">
    <Pageheader headertext="Contact Me" icon={<BsInfoCircleFill size={30} />} />
  </section>
  )
}

export default Contact