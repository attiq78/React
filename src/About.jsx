import React from "react";
import web from "../src/images/about_img.gif"
import Common from "./Common";

const About = () => {
    return(
        <>
            <Common
            name = "Wellcom to about page"
                visit = "/contact"
                imgsrc = {web}
                btn = "Contect US"

                />
        </>
    );
}
export default About;