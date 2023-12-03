import React from "react";
import { useState } from "react";

const Contact = () => {

    const [data, setdata] = useState({
        fullName:"",
        phoneNo : "",
        email:"",
        msg:"",
    })

    const InputEvent = (event) =>{
        const {name, value}= event.target;
        setdata((preVal)=>{
            return{
                ...preVal,
                [name] : value,
            };
        });
    }
    const formsubmit = (e) =>{
        e.preventDefault();
        alert(`My Name is ${data.fullName}. My Phone No is ${data.phoneNo} and email is ${data.email},I want to say ${data.msg}`);
    }
    return(
        <>
            <div className="my-4">
            <h1 className="text-center">CONTECT</h1>
            </div>
            <div className="col-md-6 col-10 mx-auto">
                <form onSubmit={formsubmit}>
                <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Full Name</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" name="fullName" value={data.fullName} onChange={InputEvent} placeholder="Enter your Name"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Phone Number</label>
  <input type="number" className="form-control" id="exampleFormControlInput1" name="phoneNo" value={data.phoneNo} onChange={InputEvent} placeholder="enter your Phone No"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Message</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" name="msg" value={data.msg} onChange={InputEvent} rows="3"></textarea>
</div>
<div className="col-12">
    <button className="btn btn-outline-primary" type="submit">Submit form</button>
  </div>
                </form>
            </div>
        </>
    );
}
export default Contact;