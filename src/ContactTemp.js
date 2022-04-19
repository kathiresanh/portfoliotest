import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { motion } from "framer-motion";
import { useFormik } from 'formik';

export default function ContactTemp() {

    const formik = useFormik({
        initialValues: {
            email: '',
            message:"",
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            formik.setValues({email:"",message:""})
        },
    });


    return (
        <div className="container text-white">
            <div className="d-flex justify-content-center mt-5"><h1 class="display-2">Let's maket something great!</h1></div>
            <div className="d-flex justify-content-center mt-3">
                <div className="col-sm-8">

                    <h4 class="mt-3">I am looking for the opportunities to work with companies and individuals
                        not just work with them. Together we need to explore new things and solve real life problems and optimizes all of our
                        experience and knowledge.
                    </h4>

                    <h4 class="mt-3">Feel free to reach out through any platforms below.</h4>
                    <div>

                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >

                            <div>

                            </div>
                        </Box>

                    </div>
                    <div className="d-flex justify-content-start p-4">
                        <div className="col-sm-8">
                        <form onSubmit={formik.handleSubmit}>
                                <input className="form-control"
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                    placeholder="Enter Your Email">
                                </input><br></br>

                                <textarea
                                    className="form-control"
                                    type="text"
                                    id="message"
                                    name="message"
                                    required
                                    onChange={formik.handleChange}
                                    value={formik.values.message}
                                    rows="4" cols="80"
                                    placeholder="Enter Message">
                                </textarea><br></br>

                                <button type="submit" className="btn btn-primary">Send Message</button>
                            </form>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center p-5 " id="icons">
                        <Stack spacing={3} direction="row">
                           
                             <motion.div whileHover={{ scale: 1.3 }}><Button href="https://web.whatsapp.com/" target="_blank" variant="outlined" style={{ color: "white" }}><WhatsAppIcon></WhatsAppIcon> &nbsp; 8189970957</Button></motion.div>
                            <motion.div whileHover={{ scale: 1.3 }}><Button href="https://github.com/kathiresanh" target="_blank" variant="outlined" style={{ color: "white" }}><GitHubIcon /> &nbsp; Git Hub</Button></motion.div>
                            {/* <motion.div whileHover={{scale:1.3}}><Button  target="_blank" variant="outlined" style={{color:"white"}}><a href="mailto:hkathiresan@gmail.com">< EmailIcon></EmailIcon> &nbsp; Gmail</a></Button></motion.div>  */}
                            <motion.div whileHover={{ scale: 1.3 }}><Button href="https://www.linkedin.com/in/kathiresan-h-23b84821a/" target="_blank" variant="outlined" style={{ color: "white" }}><LinkedInIcon></LinkedInIcon> &nbsp; Linked In</Button></motion.div>
                            <motion.div whileHover={{ scale: 1.3 }}><Button href="https://drive.google.com/file/d/1TTaQlCi5cwh6T80ntAjRu9H1a-U7dhzW/view" target="_blank" variant="outlined" style={{ color: "white" }}><FileCopyIcon></FileCopyIcon> &nbsp; View CV</Button></motion.div>
                        </Stack>

                    </div>
                </div>
            </div>

        </div>
    )
}