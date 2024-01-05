import './About.css'
import vision from './images/vision.png'
import mission from './images/mission.png'
import values from './images/values.png'
import { Box } from '@mui/material'
export default function About(){
    const aboutobj = [
        {
            img:vision,
            title:"Our Vision",
            desc:"To become the world’s largest eye care service provider, bringing quality healthcare to each and every citizen.",
        },
        {
            img:mission,
            title:"Mission",
            desc:"Follow stringent ethical practices. Provide value for money.Practice transparency in all our services. Prioritize quality without compromise. Upload our tradition of care.",
        },
        {
            img:values,
            title:"Values",
            desc:"To maintain a smooth and standardized work flow process. To provide impeccable patient care that exceeds customer satisfaction and expectation.To uphold the pride of our organization, stakeholders and investors at all times.",
        },
       
    ]
    return(
        <div className='about'>
            <div className='about_top'>
                <h1>About Med+</h1>
                <p>Welcome to Vasan medical shop, your trusted source for quality healthcare and well-being. As a newly established medical shop, we're thrilled to be part of your community, and we're dedicated to providing you with the best in pharmaceuticals, healthcare products, and expert advice.</p>
                <h1>Our Story</h1>
                <p>Our journey began with a vision to create a healthcare destination that prioritizes your health and convenience. Our founders, [Founder Names], are experienced pharmacists with a deep commitment to serving the community's healthcare needs.</p>
            </div>
        <div className="Aboutdata">
            
               {aboutobj.map((val)=>{
                return(
                    <div className='Aboutdatalist'>
                <img src={val.img} alt='amkk' />
                <h1>{val.title}</h1>
                <hr style={{backgroundColor:'red',color:'red'}}></hr>
                <p>{val.desc}</p>
                </div>
                )
               })} 
           
            
        </div>
        <div className='quates'>
               <div className='quatebox'>
               <h1>"</h1>
            <h1>A dream does not become reality through magic; it takes sweat, determination, and hard work
</h1><p className='quateauthor'>Colin Powell, former U.S. Defense Secretary</p>
      
               </div>
              </div>
        </div>
    )
}