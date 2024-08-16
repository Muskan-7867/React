import React from 'react'
import { BsInfoCircleFill } from 'react-icons/bs'
import Pageheader from '../../components/pageheader'


const Projects = () => {
  return (
    <section className="p-8">
      <Pageheader headertext="My Projects" icon={<BsInfoCircleFill size={30} />} />
    </section>
  )
}

export default Projects