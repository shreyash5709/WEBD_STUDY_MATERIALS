import { useState } from "react"

export default function Form(){
    let [formData, setFormData] = useState({
        fullName: "",
        userName: ""
    });

    let handleFormChange = (event) => {
        setFormData((currData) => {
            return {...currData, [event.target.name]: event.target.value};
        })
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullName: "",
            userName: ""
        });
    }

     return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name: </label>
            <input 
                id="fullName" 
                type="text" 
                placeholder="Enter your name" 
                value={formData.fullName} 
                onChange={handleFormChange} 
                name="fullName"
            /> <br /><br />
            <label htmlFor="userName">User Name: </label>
            <input 
                id="userName" 
                type="text" 
                placeholder="Enter username" 
                value={formData.userName} 
                onChange={handleFormChange} 
                name="userName"
            /> <br /> <br />
            <button>Submit</button>
        </form>
     )
}