import React, { useEffect, useRef } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useSpring, animated, config } from '@react-spring/web'
import teambalancerpic from './springboot.png'
import tensorflowpic from './tensorflow.png'
import reactspringpic from './react-spring.png'
import githubpic from './GitHub-Mark-64px.png'
import instagrampic from './instagramlogo.png'
import './mainpage.css'

const title = 0
const title_speed = 1.3

const pg_one = 0.8
const pg_one_speed = 1.2

const pg_two = pg_one+0.3
const pg_two_speed = 1

const pg_three = pg_two+1
const pg_three_speed = 2

const opacity_val = 0.1

const first_look_val = 400

const opacity_pic = 0.5

var locat = 0

function checkBound(placement){
  if(placement*500 <= locat && (placement+1)*500 >= locat){
    return true;
  }
  return false;
}

function checkBoundProj(placement){
  if((placement+0.65)*500 <= locat && (placement+2.1)*500 >= locat){
    return true;
  }
  return false;
}


export function Mainpage(){
  
  const alignCenter = { display: 'flex', alignItems: 'center' }

  const [styles_title_neg1, api_title_neg1] = useSpring(() => ({
    opacity: 0,
    y: 100,
    config: config.slow }))
  
  const [styles_title_0, api_title_0] = useSpring(() => ({
    opacity: 0,
    y: 170,
    config: config.slow }))

  const [styles_title_1, api_title_1] = useSpring(() => ({
    opacity: 0,
    y: 200,
    config: config.slow }))

  const [styles_title_2, api_title_2] = useSpring(() => ({
    opacity: 0,
    y: 200,
    config: config.slow }))
  
  const [styles_one, api_one] = useSpring(() => ({ 
    opacity: 0 }))
  
  const [styles_one_title, api_one_title] = useSpring(() => ({ 
    opacity: 0,
    y : first_look_val }))

  const [styles_one_text1, api_one_text1] = useSpring(() => ({ 
    opacity: 0,
    y : first_look_val,
    config: config.slow }))

  const [styles_one_text2, api_one_text2] = useSpring(() => ({ 
    opacity: 0,
    y : first_look_val,
    config: config.slow }))

  const [styles_one_text3, api_one_text3] = useSpring(() => ({ 
    opacity: 0,
    y : first_look_val,
    config: config.slow }))

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

  const [styles_socials_insta, api_socials_insta] = useSpring(() => ({
    opacity: 0,
    y: 200
  }))

  const [styles_socials_link, api_socials_link] = useSpring(() => ({
    opacity: 0,
    y: 200
  }))

  const [styles_socials_git, api_socials_git] = useSpring(() => ({
    opacity: 0,
    y: 200
  }))

  const [styles_socials_face, api_socials_face] = useSpring(() => ({
    opacity: 0,
    y: 200
  }))

  const [styles_socials_line, api_socials_line] = useSpring(() => ({
    opacity: 0,
    y: 200
  }))

  const [styles_socials_mail, api_socials_mail] = useSpring(() => ({
    opacity: 0,
    y: 200
  }))

  var first_look_one_title = false
  var first_look_one_text1 = false;
  var first_look_one_text2 = false;
  var first_look_one_text3 = false; 
  var first_look_two = false
  var first_look_proj1 = false;
  var first_look_proj2 = false;
  var first_look_proj3 = false;
  var first_look_socials = false;

  const parallax = useRef();

  const handleScroll = () => {
    if (parallax.current) {
      console.log(parallax.current.current)
      locat = parallax.current.current + 250;
      
      if(checkBound(title)){
        api_title_1.start({opacity : 1})
        api_title_2.start({opacity : 1})
      }
      else{
        api_title_1.start({opacity : opacity_val})
        api_title_2.start({opacity : opacity_val})
      }
      
      
      if(checkBound(pg_one)){
        api_one.start({
          opacity : 1,
          config: { duration: 500 }})
      }
      else{
        api_one.start({
          opacity : opacity_val,
          config: { duration: 500 }})
      }

      if(!first_look_one_title && checkBound(pg_one)){
        api_one_title.start({
          y: 0,
          opacity: 1
        })
        
        first_look_one_title = true
      }

      if(!first_look_one_text1 && checkBound(pg_one+0.1)){
        api_one_text1.start({
          y: 0,
          opacity: 1,
          height: 100          
        })
        
        first_look_one_text1 = true
      }

      if(!first_look_one_text2 && checkBound(pg_one+0.2)){
        api_one_text2.start({
          y: 0,
          opacity: 1
        })
        
        first_look_one_text2 = true
      }

      if(!first_look_one_text3 && checkBound(pg_one+0.4)){
        api_one_text3.start({
          y: 0,
          opacity: 1
        })
        
        first_look_one_text3 = true
      }

      if(!first_look_two && checkBoundProj(pg_two+0.1)){
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

      if(!first_look_proj1 && checkBoundProj(pg_two+0.3)){
        api_proj1_pic.start({
          x: 0,
          opacity: opacity_pic
        })
        api_proj1_text.start({
          x: 0,
          opacity: 1
        })

        // api_proj2_pic.start({
        //   x: 0,
        //   opacity: opacity_pic,
        //   delay: 500
        // })
        // api_proj2_text.start({
        //   x: 0,
        //   opacity: 1,
        //   delay: 500
        // })

        // api_proj3_pic.start({
        //   x: 0,
        //   opacity: opacity_pic,
        //   delay: 1000
        // })
        // api_proj3_text.start({
        //   x: 0,
        //   opacity: 1,
        //   delay: 1000
        // })

        first_look_proj1 = true
      }

      if(!first_look_proj1 && checkBoundProj(pg_two+0.3)){
        api_proj1_pic.start({
          x: 0,
          opacity: opacity_pic
        })
        api_proj1_text.start({
          x: 0,
          opacity: 1
        })
        
        first_look_proj1 = true
      }

      if(!first_look_proj2 && checkBoundProj(pg_two+0.5)){
        api_proj2_pic.start({
          x: 0,
          opacity: opacity_pic
        })
        api_proj2_text.start({
          x: 0,
          opacity: 1
        })
        
        first_look_proj2 = true
      }
      if(!first_look_proj3 && checkBoundProj(pg_two+0.7)){
        api_proj3_pic.start({
          x: 0,
          opacity: opacity_pic
        })
        api_proj3_text.start({
          x: 0,
          opacity: 1
        })
        
        first_look_proj3 = true
      }

      if(!first_look_socials && checkBoundProj(pg_two+1.6)){
        console.log("test")
        api_socials_insta.start({
          opacity: 1,
          y: 0
        })
        api_socials_link.start({
          opacity: 1,
          y: 0,
          delay: 200
        })
        api_socials_git.start({
          opacity: 1,
          y: 0,
          delay: 400
        })
        api_socials_face.start({
          opacity: 1,
          y: 0,
          delay: 600
        })

        api_socials_line.start({
          opacity: 1,
          y: 0,
          delay: 800
        })

        api_socials_mail.start({
          opacity: 1,
          y: 0,
          delay: 1000
        })
        
        first_look_socials = true
      }
    }
  }

  useEffect(() => {
    api_title_neg1.start({
      opacity:1
    })
    api_title_neg1.start({
      y: -70,
      opacity:0,
      delay:2000
    })
    api_title_0.start({
      opacity:1,
      y: 0,
      delay:2000
    })
    api_title_1.start({
      opacity:1,
      y: 0,
      delay:2500
    })
    api_title_2.start({
      opacity:1,
      y: 0,
      delay:3000
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
        <animated.div className = "name" style = {styles_title_0}>My name is:</animated.div>
        <animated.div className = "hello" style = {styles_title_neg1}>Hello!</animated.div>
        
        <animated.div className = "stanton" style = {styles_title_1}>
          <h1 className = "title">Stanton </h1>
        </animated.div>
        <animated.div className = "zeng" style = {styles_title_2}>
          <h1 className = "title">Zeng</h1>
        </animated.div>
        {/* <p className = "subTitle"> Stantonzeng@gmail.com </p> */}
        {/* <img src = {face} alt = "face"></img> */}
      </div>
      
      </ParallaxLayer>
      
      {/* <ParallaxLayer offset ={pg_one} speed={pg_one_speed} style={{ backgroundColor: '#B3D9FF' }} /> */}

      {/* Page one Start */}

      <ParallaxLayer offset ={pg_one} speed = {pg_one_speed} style = {{...alignCenter, justifyContent: 'center'}}>
        
        <animated.div className = "card" style = {styles_one}>
          <div className = "about">
            <animated.h1 className = "projects_title" style = {styles_one_title}>About Me</animated.h1>
            <animated.p className = "text1" style = {styles_one_text1}> I am a Physics new grad from UCR (University of California, Riverside)
            turned Software Developer at General Atomics.  </animated.p>
            <animated.p className = "text1" style = {styles_one_text2}>During my time in college, I was active with the Aerospace Systems club and a member
            of the American Institute of Chemical Engineers, as I was originally a Chemical Engineer. I also did research under Professor Simeon Bird
            with Phoebe Upton Sanderbeck as my advisor. There, I analyzed cosmological simulations through parameter tuning and studied the change 
            in universe formations.  </animated.p>
            <animated.p className = "text1" style = {styles_one_text3}>In my spare time, I like to code side projects to learn new technology that I find interesting. Beyond programming,
            I love watching movies, playing video games, and going rock climbing.</animated.p>
           </div> 
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
                  <animated.div 
                  onMouseEnter={() => api_proj1_pic.start({opacity:1})}
                  onMouseLeave={() => api_proj1_pic.start({opacity:opacity_pic})} 
                  style = {styles_proj1_pic} className = "proj1_pic">
                    
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
                  <animated.div 
                  onMouseEnter={() => api_proj2_pic.start({opacity:1})}
                  onMouseLeave={() => api_proj2_pic.start({opacity:opacity_pic})}
                  style = {styles_proj2_pic} className = "proj2_pic">
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
                    <animated.div 
                    onMouseEnter={() => api_proj3_pic.start({opacity:1})}
                    onMouseLeave={() => api_proj3_pic.start({opacity:opacity_pic})}
                    style = {styles_proj3_pic} className = "proj3_pic">
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
        <animated.div className = "contact">
          <h1> Contact Me </h1>
           {/* <hr /> */}
          {/* <img src = {githubpic} alt = "git" width = "64px" height = "64px"></img>
          <img src = {instagrampic} alt = "insta" width = "64px" height = "64px"></img> */}
          <animated.div className = "socials">
            <animated.div className = "insta" style = {styles_socials_insta}><a href = "https://www.instagram.com/stanelystanstan/"><b>Instagram</b></a></animated.div>
            <animated.div className = "link" style = {styles_socials_link}><a href = "https://www.linkedin.com/in/stanton-zeng-498215187/"><b>Linkedin</b></a></animated.div>
            <animated.div className = "git" style = {styles_socials_git}><a href = "https://github.com/stantonzeng/"><b>Github</b></a></animated.div>
            <animated.div className = "face" style = {styles_socials_face}><a href = "https://www.facebook.com/stanton.zeng/"><b>Facebook</b></a></animated.div>
          </animated.div>
          <animated.hr style = {styles_socials_line}/>
          <animated.div className = "email" style = {styles_socials_mail}>Stantonzeng@gmail.com</animated.div>
        </animated.div>
      </ParallaxLayer>

      {/* Projects End */}
      {/* Contact Start */}
      
      <ParallaxLayer offset = {pg_three} speed = {pg_three_speed}>
        

      </ParallaxLayer>

      {/* Contact End */}
      {/* <ParallaxLayer offset = {3}>
        <h1> test </h1>
      </ParallaxLayer> */}
    </Parallax>
    );
}
