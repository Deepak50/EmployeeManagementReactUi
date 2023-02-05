import "./UpdateButton.css";
import "./Modal.css";
import { useState } from "react";
import Axios from "axios";

function UpdateButton(props) {
    function addEmployee(data, setUpdateStatus, updateStatus) {
        const json = JSON.stringify(data);
        Axios.post('http://localhost:8080/add', json, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                setUpdateStatus(!updateStatus);
            })
            .then((response) => {
                window.location.reload(false);
            });
    }

    function handle(e, field) {
        const newData = { ...data };
        newData[field] = e.target.value;
        setData(newData);
    }

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        details: ""
    })
    return (

        <>
            <div className="overlay"></div>
            <div className="updateButton">
                <div className="closeButton" onClick={() => { props.setUpdateStatus(!props.updateStatus) }}>X</div>
                <table className="tableMargin">
                    <tr><td><label>Id</label></td><td><input value={props.updateId} readOnly={true}></input></td><br></br></tr>
                    <tr><td><label>First Name</label></td><td><input onChange={(e) => handle(e, "firstName")} id="firstName" placeholder="First Name" type="text"></input></td><br></br></tr>
                    <tr><td><label>Last Name</label></td><td><input onChange={(e) => handle(e, "lastName")} id="lastName" placeholder="Last Name" type="text"></input></td><br></br></tr>
                    <tr><td><label>Details </label></td><td><input onChange={(e) => handle(e, "details")} id="details" placeholder="Details" type="text"></input></td><br></br></tr>
                    <tr><td colSpan={2} align="center"><button onClick={() => { addEmployee(data, props.setUpdateStatus, props.updateStatus).then() }}>Add</button></td></tr>
                </table>
            </div>
        </>
    )
}

export default UpdateButton;