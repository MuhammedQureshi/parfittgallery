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
              <img className="rounded-xl"  src="https://lh3.googleusercontent.com/i160MSMSeLFjH70KbijRe8MjrZVxRaAF5OEWTO6yYsJK2-0Ser4hiIEo_x5yOniof05dKsqAUkLD35NOcRodYcsb2WcY0OLJq6PKRB7rqnxkfxBhOA6bCXynTnRMwY1h2Tuv1jKdLuz5hXxQsNNd8F2RCvOkUt6NwMXQydcjrChUf9naCKRGMBKsRh0W_1_6QEWMb4Jva0wBVl2ugv4LutCDVrbXRjqszN0N431WWmjnxql-BtCZ0rEttVrIw4arSbU-IXQfC8dFOYLGNxiJjBSQJpnIBSmzrObSeEjp-RlO2P8V6Ar1ORu7qXfFTNlc134nWj6Li2YBQJY6Hp8rnrBjAOuLyph4aCx8sb7zg2Ta_J3HA2F7cB4PQdyAkchxWBzsbH26HMF6a6RD9i85uo-CgHLIpv5CG_ph68Pa54DsMePMQ8fUb7j3c5i4d7G2nAECii7_GmbLkhNBev4Ocg6TMbcQ_e4rG2v1eprxc1Vvs1ZnNaKq7MfbjGGw6wf2k1GaP5C-_KYYPQ3GBzByWYn6kIw2ZG-D18tGIWnoyDFc5qVDQt9iSLCVnkSr5fn4aKKwBtWb9rbqGaW8ztQfkfB8aHhD0r4Frdr8SlfUO2Tc5WnHAe-cSdGEgedqwidKM-ewls33vqyub_9i9J_fNTmusYh3sJdgT4LCpVlx9eThekluxi-3x87ZOzaBSbrwaTWTy5Jh9SRTDVK53ZZUpMy-eCxGdQ7sLxVuenc8XlUcOWwF962fs5Q6tobYjv6Fm0NNe1mQ3VnxGFs9aWBykPddf-gIywRxxAGlrDA4mVCXELqG0dAxCrMMpni9j6cy0vWWeLt3LpwTeC_ayeYL6wGGcy68ykxKdtfrgWxbZvxn4HaG7nFUgJY_2hmO5xIqrvEGQ5Xy-XrQj6SbY51E3c9gpWl06MRcMhzz3Si64fYnQgTULMYXWjENZloSygWAkAc5YPtKyR5HFCkLeofKZ06_4ntHXzGvSXM5KFO1hflqnC6k2JRZT5C3BkPhifNkDdTemWlkk4wc0gjJmuAuE_E=w972-h1296-s-no?authuser=0" alt="image" />
          </div>

        </div>
     </div>
    )
}

export default About;