import React from "react";
import { motion } from "framer-motion";

export default function AboutTemp() {


    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                delayChildren: 0.3
            }
        }
    }


    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
    }

    var skills = [{
        name: "React-Js",
        img: "1.png"
    }, {
        name: "Node-Js",
        img: "2.png"
    }, {
        name: "HTML",
        img: "3.png"
    }, {
        name: "CSS",
        img: "4.png"
    }, {
        name: "JavaScript",
        img: "5.png"
    }, {
        name: "Mongo-DB",
        img: "6.png"
    }, {
        name: "SQL",
        img: "7.png"
    }]
    return (
        <div className="container d-flex">
            <div className="row">
                {/* <div class="d-flex mt-2"> */}
                    <div className="col-sm-4 pt-4">
                        <p class="h4 text-white"> Hi , I'm</p>
                        <motion.div animate={{ x: [400, 0] }} transition={{ duration: 0.3 }}><h3 id="about-name" style={{ fontSize: "50px" }}>Kathiresan,</h3></motion.div>
                        <p  id="about-para"> I am <span>Fullstack</span> web developer i design & build digital products with best user experience.
                        i like to explore  and learn new things and Experiment with them. Most of the times i got interested in solving the problems occuring while doing complex task.

                      </p>

                    </div>
                {/* </div> */}
               
                <div className="col-sm-8">
                    <div className="text-white p-3"><h3>SKILLS</h3></div>
                <motion.div animate="show" variants={container}
                    initial="hidden"
                   id="skillset-board">
                                     


                    {
                        skills.map((obj, index) => {
                            return <motion.div variants={item} whileHover={{
                                scale: 1.1,
                                transition: { duration: 0.3 },
                            }}>
                                <div className="card pt-1 p-1" id="skillset-cards">


                                    <div> <img src={`./images/${obj.img}`} height="100px" width="150px"></img></div>
                                    <div class="d-flex justify-content-center text-white p-2" >
                                        <h4> {obj.name}</h4>
                                    </div>

                                </div>
                            </motion.div>
                        })
                    }
                </motion.div>
                </div>
               
            </div>
        </div>
    )
}