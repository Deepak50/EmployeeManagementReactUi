import "./Button.css"
import Axios from "axios"
import { useState } from "react";

function del(id,deletingStatus, setDeletingStatus) {
    console.log("Its inside the del() method")
    Axios.post('http://localhost:8080/delete', id, {
        headers: {
            'Content-Type': 'text/plain'
        },
        responseType: 'text'
    })
    .then((response)=>{
        window.location.reload(false);
    })
    .then((response)=>{
        setDeletingStatus(!deletingStatus);
    })
}

function action(method, id, updateStatus, setUpdateStatus, updateId, setUpdateId, deletingStatus, setDeletingStatus){ //method, id, updateStatus, setUpdateStatus, updateId, setUpdateId, deletingStatus, setDeletingStatus) {
    if (method == "delete") {
        setDeletingStatus(!deletingStatus);
        del(id, deletingStatus, setDeletingStatus);
    }
    else if (method == "update") {
        setUpdateStatus(!updateStatus);
        setUpdateId(id);
    }
}

function Button(props) {
    return (
        <button className="button" onClick={() => {
            action(props.method, props.id, props.updateStatus, props.setUpdateStatus, props.updateId, props.setUpdateId, props.deletingStatus, props.setDeletingStatus);//props.method, props.id, props.updateStatus, props.setUpdateStatus, props.updateId, props.setUpdateId, props.deletingStatus, props.setDeletingStatus
            
        }}>{props.text}</button>
    );
}

export default Button;