import React, { useEffect, useRef, useState } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useSpring, animated } from '@react-spring/web'
import { useWheel, wheelAction } from '@use-gesture/react'
import './mainpage.css'

// const title = 0
const title_speed = 1.3

const pg_one = 0.6
const pg_one_speed = 1.5

const pg_two = pg_one+1
const pg_two_speed = 1.5

export function Mainpage(){
  
  const alignCenter = { display: 'flex', alignItems: 'center' }

  // useEffect(()=>{
  //   console.log(wheelAction.key)
    
  // }, [])

  // const [hover, toggle] = useState(false)
  // const [opacity, api] = useSpring(() => ({opacity: 0.5}));
  // const bind = useWheel(() => {
  //   api.start({opacity: hover ? 0.5 : 1})
  //   toggle(!hover)
  //   console.log(window.pageYOffset)
  // })

const parallax = useRef();

const handleScroll = () => {
  if (parallax.current) {
    console.log(parallax.current.current)
  }
}

useEffect(() => {
  const container = document.querySelector('.test_layer')
  container.addEventListener('scroll', handleScroll)
  return () => {
    container.removeEventListener('scroll', handleScroll)
  }
}, [])

  return(
        <Parallax ref = {parallax} className = 'test_layer' pages = {6}>
      <ParallaxLayer speed={title_speed} style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>

      <div>
        <h1 className = "title">Stanton Zeng</h1>
        <p className = "subTitle"> Software and Math</p>
      </div>
      
      </ParallaxLayer>
      
      {/* <ParallaxLayer offset ={pg_one} speed={pg_one_speed} style={{ backgroundColor: '#B3D9FF' }} /> */}

      {/* Page one Start */}

      <ParallaxLayer offset ={pg_one} speed = {pg_one_speed} style = {{...alignCenter, justifyContent: 'center', opacity: 0.8}}>
        <animated.div className = "card" {...bind()} style = {opacity}>
          <p className = "text1"> I am a Physics new grad from UCR (University of California, Riverside)
           turned Software Developer at General Atomics. During my time in college, I was active with the Aerospace Systems club and a member
           of the American Institute of Chemical Engineers, as I was originally a Chemical Engineer. I also did research under Professor Simeon Bird
           with Phoebe Upton Sanderbeck as my advisor. There, I analyzed cosmological simulations through parameter tuning and studied the change 
           in universe formations. In my spare time, I like to code side projects to learn new technology that I find interesting. Beyond programming,
           I love watching movies, playing video games, and going rock climbing.</p>
        </animated.div>  
      </ParallaxLayer> 
      
      {/* Page one END */}
      
      {/* Projects START */}

      <ParallaxLayer sticky = {{start: pg_two, end: pg_two+1}} offset = {pg_two} speed = {pg_two_speed} >
        <h1 className = "projects_title">Projects</h1>
        
      </ParallaxLayer>
      <ParallaxLayer sticky = {{start: pg_two+0.5, end: pg_two+1}} offset = {pg_two+0.5} style = {{...alignCenter}}>
      
      <div className = "text1">
        <div className = "project_grid">
            <div className = "proj1">hello</div>
        </div>
      </div>
      
      </ParallaxLayer>

      {/* Projects End */}


      {/* <ParallaxLayer offset = {3}>
        <h1> test </h1>
      </ParallaxLayer> */}
    </Parallax>
    );
}
