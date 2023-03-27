import React from 'react'

const Hero = ({heading}) => {
    return(
        <div className='flex flex-col items-center justify-center h-screen mb-12
        bg-fixed bg-center bg-cover custom-img' >
            {/* Overlay */}
            
            <div className='absolute top-0 left-8 right-0 bg-black z-[2]'/>
            
            <div className='p-5 text-white z-[2] bg-black'>
                <h2 className='text-5xl font-bold '>{heading}</h2>
                
            </div>
        

        </div>
    )
}

export default Hero