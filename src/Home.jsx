import React from "react";
import web from "../src/images/home_img.gif"
import Common from "./Common";
const Home = () => {
    return(
        <>
            <Common
                name = "Grow Your Business with"
                visit = "/service"
                imgsrc = {web}
                btn = "Get Started"
            />
        </>
    );
}
export default Home;