import React from "react";
import abt from '../public/abt.jpg';


const About = () => {
    return(
        <div id='about' className="w-full md:h-screen p-2 flex items-center py-16">
        <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
          <div className= "col-span-2">
              <p className="uppercase text-xl tracking-widest text-[#071ff2]">About</p>
              <h2 className="py-4 text-3xl font-extrabold">What we do</h2>
              <p className="py-2">
              Welcome to Parfitt Gallery, a premier destination for contemporary art and a proud supporter of emerging artists from Croydon College. 
              Our gallery is dedicated to showcasing the diverse range of talent and creativity found within the student body of Croydon College.
              </p>
              <p className="py-2">
              At Parfitt Gallery, we believe that supporting emerging artists is crucial to the growth and development of the art world, 
              which is why we are proud to exclusively feature the work of Croydon College students.
               Our exhibitions change regularly, so there is always something new and exciting to discover at Parfitt Gallery.
              </p>
              <p className="py-2">
              We are committed to providing a welcoming and inclusive environment for all visitors,
              where they can explore and appreciate the artwork on display. Our knowledgeable and 
              friendly staff are always on hand to offer guidance and answer any questions you may have about the artwork or artists we feature.
              </p>
              <p className="py-2">
              In addition to our gallery exhibitions, we offer a range of 
              educational programs and workshops to inspire and support emerging artists. Our aim is to create opportunities for 
              Croydon College students to showcase their work and develop their skills, in order to prepare them for 
              successful careers in the art world.
              </p>
         
          </div>
          <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 ">
              <img className="rounded-xl"  src="/crd.jpg" alt="image" />
          </div>

        </div>
     </div>
    )
}

export default About;