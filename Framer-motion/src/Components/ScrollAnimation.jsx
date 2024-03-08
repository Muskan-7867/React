import React from 'react'
import { motion , useScroll} from 'framer-motion'

export const ScrollAnimation = () => {
    const{scrollYProgress} = useScroll()
  return (
    <>
    <motion.div
    style={{
        scaleX:scrollYProgress,
        top:0,
        left:0,
        right:0,
        position:"fixed",
        height:10,
        background:"red",
        transformOrigin :"0%"
    }}>
    
           

    </motion.div>
    <h2>Scroll Demo</h2>
    <p>Scroll Animation using framer-motion</p><br/>
    <p>Scroll Animation using framer-motion</p><br/>
    <p>Scroll Animation using framer-motion</p><br/>
    <p>Scroll Animation using framer-motion</p><br/>
    <p>Scroll Animation using framer-motion</p><br/>
    <p>Scroll Animation using framer-motion</p><br/>
    <p>Scroll Animation using framer-motion</p><br/>
    <p>Scroll Animation using framer-motion</p><br/>
    <p>Scroll Animation using framer-motion</p><br/>
    <p>Scroll Animation using framer-motion</p><br/>
    <p>Scroll Animation using framer-motion</p><br/>
    <p>Scroll Animation using framer-motion</p><br/>
    <p>Scroll Animation using framer-motion</p><br/>
    <p>Scroll Animation using framer-motion</p><br/>
    <p>Scroll Animation using framer-motion</p><br/>
    <p>Scroll Animation using framer-motion</p><br/>
    <p>Scroll Animation using framer-motion</p><br/>
    <p>Scroll Animation using framer-motion</p><br/>
    </>
  )
}
