import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import './mainpage.css'

// const title = 0
const title_speed = 1.3

const pg_one = 1.3
const pg_one_speed = 1.5

export function Mainpage(){
  const alignCenter = { display: 'flex', alignItems: 'center' }
    return(
        <Parallax pages = {3.3}>
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
        <div className = "card">
          <p className = "text1"> I am a Physics new grad from UCR (University of California, Riverside)
           turned Software Developer at General Atomics. During my time in college, I was active with the Aerospace Systems club and a member
           of the American Institute of Chemical Engineers, as I was originally a Chemical Engineer. I also did research under Professor Simeon Bird
           with Phoebe Upton Sanderbeck as my advisor. There, I analyzed cosmological simulations through parameter tuning and studied the change 
           in universe formations. In my spare time, I like to code side projects to learn new technology that I find interesting. Beyond programming,
           I love watching movies, playing video games, and going rock climbing.</p>
        </div>  
      </ParallaxLayer> 
      
      {/* Page one END */}
      
      {/* <ParallaxLayer offset={1} speed = {1}style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
    }}>

        <h2>aaaaa</h2>
      
      </ParallaxLayer>

      <ParallaxLayer offset={1.3} speed={1} style={{ backgroundColor: '#FF6699' }} /> */}
    </Parallax>
    );
}
