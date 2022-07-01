import React, { useEffect, useRef } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useSpring, animated } from '@react-spring/web'
import teambalancerpic from './springboot.png'
import tensorflowpic from './tensorflow.png'
import reactspringpic from './react-spring.png'
import face from './face.png'
import './mainpage.css'

const title = 0
const title_speed = 1.3

const pg_one = 0.7
const pg_one_speed = 1.2

const pg_two = pg_one+0.3
const pg_two_speed = 1

const opacity_val = 0.1

const first_look_val = 400

var locat = 0

function checkBound(placement){
  if(placement*500 <= locat && (placement+0.75)*500 >= locat){
    return true;
  }
  return false;
}

function checkBoundProj(placement){
  if((placement+0.6)*500 <= locat && (placement+2.1)*500 >= locat){
    return true;
  }
  return false;
}


export function Mainpage(){
  
  const alignCenter = { display: 'flex', alignItems: 'center' }

  const [styles_title, api_title] = useSpring(() => ({
    opacity: 0,
    y : 100 }))
  
  const [styles_one, api_one] = useSpring(() => ({ 
    opacity: 0,
    y : first_look_val }))

  const [styles_two, api_two] = useSpring(() => ({ 
    opacity: 0,
    y : first_look_val }))

  const [styles_proj1_text, api_proj1_text] = useSpring(() => ({ 
    opacity: 0,
    x : -first_look_val }))

  const [styles_proj1_pic, api_proj1_pic] = useSpring(() => ({ 
    opacity: 0,
    x : first_look_val }))

    const [styles_proj2_pic, api_proj2_pic] = useSpring(() => ({ 
      opacity: 0,
      x : first_look_val }))
  
  const [styles_proj2_text, api_proj2_text] = useSpring(() => ({ 
    opacity: 0,
    x : -first_look_val }))

  const [styles_proj3_pic, api_proj3_pic] = useSpring(() => ({ 
    opacity: 0,
    x : first_look_val }))
  
  const [styles_proj3_text, api_proj3_text] = useSpring(() => ({ 
    opacity: 0,
    x : -first_look_val }))

  var first_look_one = false
  var first_look_two = false
  var first_look_proj1 = false;
  var first_look_proj2 = false;
  var first_look_proj3 = false;

  const parallax = useRef();

  const handleScroll = () => {
    if (parallax.current) {
      console.log(parallax.current.current)
      locat = parallax.current.current + 250;
      
      if(checkBound(title)){
        api_title.start({opacity : 1})
      }
      else{
        api_title.start({opacity : opacity_val})
      }
      
      if(!first_look_one && checkBound(pg_one)){
        api_one.start({
          y: 0,
          opacity: 1
        })
        first_look_one = true
      }
      if(first_look_one && checkBound(pg_one)){
        api_one.start({
          opacity : 1,
          config: { duration: 500 }})
      }
      else if(first_look_one){
        api_one.start({
          opacity : opacity_val,
          config: { duration: 500 }})
      }

      if(!first_look_two && checkBoundProj(pg_two+0.3)){
        api_two.start({
          y: 0,
          opacity: 1
        })
        first_look_two = true
      }
      if(first_look_two && checkBoundProj(pg_two)){
        api_two.start({opacity : 1})
      }
      else if(first_look_two){
        api_two.start({opacity : opacity_val})
      }

      if(!first_look_proj1 && checkBoundProj(pg_two+0.5)){
        api_proj1_pic.start({
          x: 0,
          opacity: 1
        })
        api_proj1_text.start({
          x: 0,
          opacity: 1
        })
        
        first_look_proj1 = true
      }

      if(!first_look_proj2 && checkBoundProj(pg_two+0.7)){
        api_proj2_pic.start({
          x: 0,
          opacity: 1
        })
        api_proj2_text.start({
          x: 0,
          opacity: 1
        })
        
        first_look_proj2 = true
      }
      if(!first_look_proj3 && checkBoundProj(pg_two+0.9)){
        api_proj3_pic.start({
          x: 0,
          opacity: 1
        })
        api_proj3_text.start({
          x: 0,
          opacity: 1
        })
        
        first_look_proj3 = true
      }
    }
  }

  useEffect(() => {
    api_title.start({
      y: 0,
      opacity:1
    })
    const container = document.querySelector('.test_layer')
    container.addEventListener('scroll', handleScroll)
    
    return () => {
      container.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return(
    <Parallax ref = {parallax} className = 'test_layer' pages = {3}>
      <ParallaxLayer speed={title_speed} style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'  
    }}>
      <div className = "title_div">
        <animated.div style = {styles_title}>
          <h1 className = "title">Stanton Zeng</h1>
          
          {/* <p className = "subTitle"> Software and Math</p> */}
        </animated.div>
        {/* <img src = {face} alt = "face"></img> */}
      </div>
      
      </ParallaxLayer>
      
      {/* <ParallaxLayer offset ={pg_one} speed={pg_one_speed} style={{ backgroundColor: '#B3D9FF' }} /> */}

      {/* Page one Start */}

      <ParallaxLayer offset ={pg_one} speed = {pg_one_speed} style = {{...alignCenter, justifyContent: 'center'}}>
        <animated.div className = "card" style = {styles_one}>
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

      <ParallaxLayer offset = {pg_two} speed = {pg_two_speed} >
        <animated.div style = {styles_two}>
          <h1 className = "projects_title">Personal Projects</h1>
            <div className = "project_grid">

                <animated.div className = "proj1">
                <a href="https://github.com/stantonzeng/elo-balancer2/">
                  <animated.div style = {styles_proj1_pic} className = "proj1_pic">
                    
                      <img src = {teambalancerpic} alt = "TeamBalancer.com" height = "100%"></img>
                    
                  </animated.div>
                  </a>
                  <animated.div style = {styles_proj1_text} className = "proj1_text">
                    <div className = "proj1_title"><b><i>React Java Springboot Postgresql AWS GCP</i></b></div>
                    <div className = "proj1_paragraph"> Teambalancer is a project that stores player information using a modified version of
                    the conventional FIDE elo system. It generates balanced and fair teams using the selected players needed. I deployed the 
                    web app using AWS and Google Cloud Platflorm.</div>
                  </animated.div>
                </animated.div>

                <animated.div className = "proj2">
                <a href = "https://github.com/stantonzeng/sign-langauge-translator">
                  <animated.div style = {styles_proj2_pic} className = "proj2_pic">
                    <img src = {tensorflowpic} alt = "2" width = "275px" height = "100%"></img>
                  </animated.div>
                </a>
                  <animated.div style = {styles_proj2_text} className = "proj2_text">
                    <div className = "proj2_title"><b><i>Python Tensorflow Keras OpenCV</i></b></div>
                    <div className = "proj2_paragraph"> I developed my own American Sign Langugage Alphabet translator. I utilized Computer
                    Vision to read in the hand signs and machine learning to interpret what is being shown. Using my own training data and 
                    CNN model, I was able to achieve a validation accuracy of 85% </div>
                  </animated.div>
                </animated.div>

                <animated.div className = "proj3">
                  <a href = "https://github.com/stantonzeng/personal-page">
                    <animated.div style = {styles_proj3_pic} className = "proj3_pic">
                      <img src = {reactspringpic} alt = "3" width = "275px" height = "100%"></img>
                    </animated.div>
                  </a>
                  <animated.div style = {styles_proj3_text} className = "proj3_text">
                    <div className = "proj3_title"><b><i>Reactjs React-Spring HTML/CSS</i></b></div>
                    <div className = "proj3_paragraph"> As more practice with front end design, I decided to revamp my old personal projects
                    site and learn more about javascript and react. </div>
                  </animated.div>
                </animated.div>
                
                {/* <animated.div className = "proj2">Project 2</animated.div>
                <animated.div className = "proj3">Project 3</animated.div>
                <animated.div className = "proj4">Project 4</animated.div> */}
            
            </div>
        </animated.div>
      </ParallaxLayer>

      {/* Projects End */}


      {/* <ParallaxLayer offset = {3}>
        <h1> test </h1>
      </ParallaxLayer> */}
    </Parallax>
    );
}
