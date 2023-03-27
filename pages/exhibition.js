import React from "react";

export default function Exhibition (){
    return(
        <div>
        <div className='flex items-center justify-center h-96 mb-12
        bg-fixed bg-center bg-cover bg-black' >
            {/* Overlay */}
            
            <div className='absolute top-0 left-8 right-0 bg-black z-[2]'/>

            <div className='p-5 text-white z-[2] mt-[-10rem]'>
                <h2 className='text-5xl font-bold'>Exhibition</h2>
                <p className='py-5 text-xl'>/</p>
                <button className='px-8 py-2 border hover:bg-blue-500 '>Learn more</button>
                
            </div>


        </div>
        </div>
    )
}