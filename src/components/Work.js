import React from 'react';
// motion
import {motion} from 'framer-motion'
// variants
import {fadeIn} from '../variants'
// img
import img1 from '../assets/portfolio-img1.png';
import img2 from '../assets/portfolio-img2.png';
import img3 from '../assets/portfolio-img3.png';



const Work = () => {
  return( 
  <section className='lg:section' id='work '>
    <div className='container mx-auto my-auto'>
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <motion.div
        variants={fadeIn('right', 0.3)}
        initial= 'hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
        className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0 '>
          {/* text */}
          <div>
            <h2 className='h2 leading-tight text-gradient'>My Latest <br />
            Work.
            </h2>
            <p className='max-w-sm mb-16'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio deserunt dolorem iste, modi suscipit ullam tempora numquam dolor dolores corporis.
            </p>
            <button className='btn btn-sm'>view all projects</button>
          </div>
         {/* image */}
         <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>
            </div>
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500' src={img1} alt=''/>
            {/* pretitle */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>Food Order</span>
              </div>
             {/* title */}
             <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white'>Stack: reactJs, TailwindCss, JavaScript</span>
             </div>
          </div>
         
       
        </motion.div>
        <motion.div 
        variants={fadeIn('left', 0.2)}
        initial= 'hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
        className='flex-1 flex flex-col gap-y-10'>
          {/* image */}
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>
            </div>
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500' src={img2}alt=''/>
            {/* pretitle */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>Fashion E-Commerce</span>
              </div>
             {/* title */}
             <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white'>Stack: Html, Css, JavaScript</span>
             </div>
          </div>
          {/* image */}
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>
            </div>
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500' src={img3} alt=''/>
            {/* pretitle */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>Construction Site</span>
              </div>
             {/* title */}
             <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white'>Stack: Bootstrap, Html, Css</span>
             </div>
          </div>
         
          
        </motion.div>
      </div>
    </div>
    
    </section>
  );
};

export default Work;
