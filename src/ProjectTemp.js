import React from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from '@mui/icons-material/GitHub';


const itemms = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
}

export default function ProjectTemp() {

    const items = [
        {
            name: "Version Control System",
            image: "version.png",
            website: "https://gleeful-salmiakki-6264d5.netlify.app/",
            frontend: "https://github.com/kathiresanh/VersionControlSystem-Frontend",
            backend: "https://github.com/kathiresanh/version-control-backend",
            content: "This version control system allows the users to track the changes continously. Each history  is recorded. each time stamp and user name is updated in database."
        },
        {
            name: "Shop Easy",
            image: "shopeasy.png",
            website: "https://shiny-pegasus-4acbdc.netlify.app/",
            frontend: "https://github.com/kathiresanh/shopeasy-frontend",
            backend: "https://github.com/kathiresanh/shopeasy-backend",
            content: "Shop Easy is the simple online shop here we can buy the products place orders and add to cart options are implemented , also here payment gateway also integrated."
        },
        {
            name: "Optical Character Recognition",
            image: "OCR.jpg",
            website: "https://unrivaled-madeleine-26eaac.netlify.app/",
            frontend: "https://github.com/kathiresanh/imageToText-frontend",
            backend: "https://github.com/kathiresanh/imgageToText-backend",
            content: "OCR is Optical Character Recognition it used to scan the docoument as a picture and the convert the text into machine readable format, simply it has more useful applications."
        },
        {
            name: "Chat Easy",
            image: "chat.jpg",
            website: "https://bespoke-brigadeiros-b90626.netlify.app/",
            frontend: "https://github.com/kathiresanh/chatapp-frontend",
            backend: "https://github.com/kathiresanh/chatapp-backend",
            content: "Chat Easy is simple chat app integrated with websockets, websocket is special method to implement the bidirectional data transmission and low latency communication ."
        },
    ]


    return (
        <div className="container-fluid text-white pt-5" id="projecttemp">
            <div className="row">
                {
                    items.map((obj) => {
                        return <AnimateSharedLayout>
                            <div className="col-sm-6 text-dark">
                                <div className=" p-0" id="card-colour">
                                    {/* <div className="d-flex justify-content-center"> <h4> {obj.name}</h4></div> */}
                                    {/* <img src={`./images/${obj.image}`} className="p-3" id="project-image" ></img> */}
                                    <Item data={obj} />
                                </div>
                            </div>
                        </AnimateSharedLayout>
                    })
                }
            </div>
        </div>
    )
}



function Item(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (

        <motion.div variants={itemms} onClick={toggleOpen} onHoverStart={toggleOpen} onHoverEnd={toggleOpen} class="" id="projects-list">
                <motion.div layout initial={{ borderRadius: 10 }} >
                <AnimatePresence>{isOpen && <Content data1={props.data} />}</AnimatePresence>
            </motion.div>
            <h3 className="p-1">{props.data.name}</h3>
        <div col-sm-2>  <img src={`./images/${props.data.image}`} className="p-1" id="project-image" ></img></div>
          <h6 className="p-3">{props.data.content}</h6>
          
        </motion.div>


    );
}


function Content(props) {
    return (
        <motion.div
            layout

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            id="project-content"
        >
            {/* <h6 className="p-3">{props.data1.content}</h6> */}
            {/* <div class="d-flex flex-column p-3" >
                 <a className="btn btn-success mt-2" href={props.data1.website} target="_blank">Visit Website</a>

                 <a className="btn btn-primary mt-2" href={props.data1.frontend} target="_blank">View frontend source code</a>

                 <a className="btn btn-secondary mt-2" href={props.data1.backend} target="_blank">View backend source code</a>
            </div> */}
            <div className="p-2 d-flex justify-content-between ">
                {/* <Stack spacing={4} direction="row"> */}
                     
                <Button href={props.data1.website} target="_blank" variant="outlined" style={{color:"black"}}><LanguageIcon></LanguageIcon> &nbsp; website</Button>
                <Button href={props.data1.frontend} target="_blank" variant="outlined" style={{color:"black"}}><GitHubIcon></GitHubIcon> &nbsp; Front-end</Button>
                <Button href={props.data1.backend} target="_blank" variant="outlined" style={{color:"black"}}><GitHubIcon></GitHubIcon> &nbsp; Back-end</Button>
                {/* </Stack> */}
            </div>

        </motion.div>
    );
}