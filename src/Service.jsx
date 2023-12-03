import React from "react";
import Cards from "./Cards";
import sdata from "./sdata";

const Service = () => {
    return(
        <>
            <div className="my-4">
            <h1 className="text-center">Our Services</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                    <div className="row gy-4">
                        {
                            sdata.map((val,index) =>{
                                return <Cards key={index}
                                    imgsrc={val.imgsrc}
                                    title={val.title}
                                />
                            })
                        }

 
                    </div>
                    </div>
                    </div>
                </div>
            
        </>
    );
}
export default Service;