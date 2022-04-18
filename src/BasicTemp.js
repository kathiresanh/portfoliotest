import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";


const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
    transition: { duration: 3 }
  }



export default function BasicTemp() {


    const [user, setuser] = useState("Hello.")
    const [user1, setuser1] = useState("I am")
    const [user2, setuser2] = useState("KATHIRESAN")



    return (

      <div className="container-fluid">
            <div className="row">
            <div className="col-sm-5 text-white p-3 d-flex justify-content-center" >
                <div className="column ">
                   <Link to="/about" style={{textDecoration:"none" ,color:"white"}} className='d-flex'> <motion.h1
                        whileHover={{ x: 50 }}
                        onHoverStart={() => { setuser("About") }}
                        onHoverEnd={() => { setuser("Hello.") }}
                    >
                        {user}
                    </motion.h1></Link>
                    <Link to="/project" style={{textDecoration:"none"}} className="d-flex">     <motion.h1 id="iam"
                        whileHover={{ x: 50 }}
                        onHoverStart={() => { setuser1("Projects") }}
                        onHoverEnd={() => { setuser1("I am") }}
                    >
                        {user1}
                    </motion.h1></Link>
                    <Link to="/contact" style={{textDecoration:"none"}} className="d-flex">    <motion.h1 id="iam"
                        whileHover={{ x: 50 }}
                        onHoverStart={() => { setuser2("Contact") }}
                        onHoverEnd={() => { setuser2("KATHIRESAN") }}
                    >
                        {user2}
                    </motion.h1></Link>

                    <p className="pt-4" id="about-para"> I am <span>Fullstack</span> web developer i design & build digital products with best user experience.
                        i like to explore  and learn new things and Experiment with them.

                      </p>
                </div>
            </div>
            <div className="col-sm-7" id="basictemp">
                <div class="d-flex justify-content-start">
                    <motion.div
                        initial="hidden"
                        animate={{ opacity: [0,0.1,0.2,0.5,0.8,1] ,scale : [1.5,1] }}
                        transition={{ ease: [0.17, 0.67, 0.83, 0.67] ,times : [4] }}
                   
                        >
                        <img src="./images/kathir1.jpg" id="photo"></img>
                    </motion.div>
                </div>
            </div>
        </div>

      </div>
      
    )
}