import React, { useEffect, useRef } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useSpring, animated, config } from '@react-spring/web'
import teambalancerpic from './springboot.png'
import tensorflowpic from './tensorflow.png'
import reactspringpic from './react-spring.png'
import resume from '../resume/Resume_Stanton_Zeng.pdf'
import resumepic from './resume.png'
import './mainpage.css'

/*
Note for future Stanton:

If you want to change anything from this site, then you'll have to get used to it again. I don't think we engineered this 
well enough since we built this by assigning every component of the website their own little variable constant to which
we assigned them to useSpring to allow for the spring like animations. 

This somehow works, but again its not well designed. We have ~600 lines of code that could be condensed down into 200 if 
we were smarter. In addition to this, we have a bunch of odd values, such as the title-0.3 to track whether or not we see
the title page or not. You may be asking me, "How did we get 0.3?". Answer is that we eyeballed it. Meaning that there are
a bunch of these other values lying around that are eyeballed. Which also means that once we kind of change up the site, 
things are gonna break and its going to be annoying to fix. So best of luck to future me, since you'll be fixing most of
the stuff.

This site is built off of tape and dreams. Hold it well and note that most of the code is redundant.

-Stanton Zeng (7/7/2022)
*/


//Utilized where the title is placed and how fast
const title = 0
const title_speed = 1.3

//Utilized where the about me is placed and how fast
const pg_one = 0.8
const pg_one_speed = 1.2

//Utilized where the projects is placed and how fast
const pg_two = pg_one+0.3
const pg_two_speed = 1

//Value of the offset value from the contact page since the contact page is apart of pg_two... Basically just eyeball this value
const contact_offset = 2.3

//Opacity value for when we lose focus
const opacity_val = 0.1

//How far away each item is before they are looked at
const first_look_val = 400

//Opacity for pictures in projects
const opacity_pic = 0.5

//Total number of pgs
const total_number_pages = 2.7

//Location of where we are at
var locat = 0

//Checks if we are looking at a page
function checkBound(placement){
  if(placement*500 <= locat && (placement+1)*500 >= locat){
    return true;
  }
  return false;
}

//Checks if we are looking at a page but modified for projects
function checkBoundProj(placement){
  if((placement+0.65)*500 <= locat && (placement+2.3)*500 >= locat){
    return true;
  }
  return false;
}


export function Mainpage(){
  
  //Dont change this
  const alignCenter = { display: 'flex', alignItems: 'center' }

  // Bad way but this is a tacky way to start the configuration of each component of the website and connect it with
  // the react-spring useSpring hook. Now every component will utilize useSpring animations.
  // If we want a new component, just make a new one and assign its style to the new 'styles...'
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
  
  const [styles_title, api_title] = useSpring(() => ({ 
    opacity: 1 }))
  
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

  const [styles_proj4_pic, api_proj4_pic] = useSpring(() => ({ 
    opacity: 0,
    x : first_look_val }))
  
  const [styles_proj4_text, api_proj4_text] = useSpring(() => ({ 
    opacity: 0,
    x : -first_look_val }))

  const [styles_contact, api_contact] = useSpring(() => ({ 
    opacity: 1 }))

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

  //When we first look at each page, we can trigger the animation and then set the first look to true
  var first_look_one_title = false
  var first_look_one_text1 = false;
  var first_look_one_text2 = false;
  var first_look_one_text3 = false; 
  var first_look_two = false
  var first_look_proj1 = false;
  var first_look_proj2 = false;
  var first_look_proj3 = false;
  var first_look_proj4 = false;
  var first_look_socials = false;

  const parallax = useRef();

  //When we see each page for the first time, we utilize UseSpring's api to trigger the animation
  const handleScroll = () => {
    if (parallax.current) {
      console.log(parallax.current.current)
      locat = parallax.current.current + 250;
      
      if(checkBound(title-0.2)){
        api_title.start({opacity : 1})
      }
      else{
        api_title.start({opacity : opacity_val})
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

      if(!first_look_proj4 && checkBoundProj(pg_two+0.9)){
        api_proj4_pic.start({
          x: 0,
          opacity: opacity_pic
        })
        api_proj4_text.start({
          x: 0,
          opacity: 1
        })
        
        first_look_proj4 = true
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

      if(checkBound(pg_two+contact_offset)){
        api_contact.start({opacity : 1})
      }
      else{
        api_contact.start({opacity : opacity_val})
      }
    }
  }

  //Records the height and manages where we are looking at
  useEffect(() => {
    api_title_neg1.start({
      opacity:1
    })
    api_title_neg1.start({
      y: -70,
      opacity:0,
      delay:1000
    })
    api_title_0.start({
      opacity:1,
      y: 0,
      delay:1000
    })
    api_title_1.start({
      opacity:1,
      y: 0,
      delay:1500
    })
    api_title_2.start({
      opacity:1,
      y: 0,
      delay:2000
    })
    const container = document.querySelector('.test_layer')
    container.addEventListener('scroll', handleScroll)
    
    return () => {
      container.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return(
    <Parallax ref = {parallax} className = 'test_layer' pages = {total_number_pages}>
      {/* Title Start */}
      <ParallaxLayer speed={title_speed} style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'  
    }}>
      <animated.div className = "title_div" style = {styles_title}>
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
      </animated.div>
      
      </ParallaxLayer>
      {/* Title End */}
      
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
          <div className = "projects_title">
          <h1 >Personal Projects</h1>
          <p className = "projects_subtitle">Click on the pictures for links</p>
          </div>
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
                    <div className = "proj1_paragraph"> Teambalancer is a fullstack application that stores player information using a modified version of
                    the conventional FIDE elo system. It generates balanced and fair teams using the selected players needed. I deployed the 
                    web app using AWS and Google Cloud Platform.</div>
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
                    <div className = "proj3_paragraph"> To get more practice with front end design, I decided to revamp my old personal projects
                    site to learn more about Javascript and React. </div>
                  </animated.div>
                </animated.div>

                <animated.div className = "proj4">
                  <a href = {resume}>
                    <animated.div 
                    onMouseEnter={() => api_proj4_pic.start({opacity:1})}
                    onMouseLeave={() => api_proj4_pic.start({opacity:opacity_pic})}
                    style = {styles_proj4_pic} className = "proj4_pic">
                      <img src = {resumepic} alt = "4" width = "275px" height = "90%"></img>
                    </animated.div>
                  </a>
                  <animated.div style = {styles_proj4_text} className = "proj4_text">
                    <div className = "proj4_title"><b><i>Resume</i></b></div>
                    <div className = "proj4_paragraph"> If you would like more information, then you can check out my 
                    actual resume. </div>
                  </animated.div>
                </animated.div>
                
                {/* <animated.div className = "proj2">Project 2</animated.div>
                <animated.div className = "proj3">Project 3</animated.div>
                <animated.div className = "proj4">Project 4</animated.div> */}
            
            </div>
        </animated.div>
        
        {/* Projects End */}

        {/* Contact Start */}
        
        <animated.div className = "contact" style = {styles_contact}>
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
      
      {/* Contact End */}
    </Parallax>
    );
}
