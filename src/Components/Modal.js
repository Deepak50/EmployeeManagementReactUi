import { wait } from "@testing-library/user-event/dist/utils";
import Axios from "axios";
import React, { useState } from "react";
import "./Modal.css";



function Modal(props) {
    // setAddingStatus(!addingStatus);
    function addEmployee(data) {
        const json = JSON.stringify(data);
        props.setAddingStatus(!props.addingStatus);
        props.setModalStatus(!props.modalStatus);
        Axios.post('http://localhost:8080/add', json, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {

                props.setAddingStatus(!props.addingStatus);
            })
            .then((response) => {
                window.location.reload(false);
            })
    }

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        details: ""
    })

    // if (modal) {
    // const [firstName,setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [details, setDetails] = useState("");

    function handle(e, field) {
        const newData = { ...data };
        newData[field] = e.target.value;
        setData(newData);
    }

    return (<>
        {/* <div className="modal"> */}
            <div className="overlay"></div>
            
            <div className="updateButton">
            <div className="closeButton" onClick={() => { props.setModalStatus(!props.modalStatus) }}>X</div>    
                <table className="tableMargin">
                    <tr><td><label>First Name</label></td><td><input onChange={(e) => handle(e, "firstName")} id="firstName" placeholder="First Name" type="text"></input></td><br></br></tr>
                    <tr><td><label>Last Name</label></td><td><input onChange={(e) => handle(e, "lastName")} id="lastName" placeholder="Last Name" type="text"></input></td><br></br></tr>
                    <tr><td><label>Details </label></td><td><input onChange={(e) => handle(e, "details")} id="details" placeholder="Details" type="text"></input></td><br></br></tr>
                    <tr><td colSpan={2} align="center"><button onClick={() => { addEmployee(data) }}>Add</button></td></tr>
                    {/* <button className="close-modal" onClick={toggleModal}> addEmployee(data,props.addingStatus, props.setAddingStatus)
                        CLOSE
                    </button> */}
                </table>

            </div>
        {/* </div> */}
    </>
    );
    // }
    // else {
    //     return (
    //         <button onClick={toggleModal} className="btn-modal">
    //             Add
    //         </button>
    //     );
    // }
}
export default Modal;