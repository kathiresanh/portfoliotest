import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutTemp from "./AboutTemp";
import BasicTemp from "./BasicTemp";
import ContactTemp from "./ContactTemp";
import ProjectTemp from "./ProjectTemp";
import TopbarTemp from "./TopbarTemp";


export default function IntroTemp() {
    return (
        <div className="container-fluid">
            <TopbarTemp></TopbarTemp>
            <Routes>
                <Route path="/" element={<BasicTemp></BasicTemp>}></Route>
                <Route path="/project" element={<ProjectTemp></ProjectTemp>}></Route>
                <Route path="/contact" element={<ContactTemp></ContactTemp>}></Route>
                <Route path="/about" element={<AboutTemp></AboutTemp>}></Route>
            </Routes>

        </div>
    )
}