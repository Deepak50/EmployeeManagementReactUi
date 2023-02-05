import './App.css';
import Nav from "./Components/Nav"
import React, { useEffect, useState } from 'react';
import Modal from "./Components/Modal"
import Employees from './Components/Employees';
import UpdateButton from './Components/UpdateButton';
import Waiting from './Components/Waiting';
import Overlay from './Components/Overlay';


function App() {

  const [json, setJson] = useState({});
  const [strJson, setStrJson] = useState("");
  const [retrieveAllStatus, setRetrieveAllStatus] = useState(false);
  const [trigger, setTrigger] = useState(false);
  const [updateStatus, setUpdateStatus] = useState(false);
  const [updateId, setUpdateId] = useState("");
  const [addingStatus, setAddingStatus] = useState(false);
  const [modalStatus, setModalStatus] = useState(false);
  const [deletingStatus, setDeletingStatus] = useState(false);
  const [overlayStatus, setOverlayStatus] = useState(false);


  function open() {
    console.log("Opening");
    setTrigger(true);
  }

  useEffect(() => {
    fetch('http://localhost:8080/retrieveAll')
      .then(res => res.json())
      .then((json) => {
        setJson(json);
        setStrJson(JSON.stringify(json));
        setRetrieveAllStatus(true);
      }).then(() => {
        console.log(strJson);
      });
  }, []);

  function del(i) {
    console.log("The index is : ", i);
  }

  const test = "testing";

  return (
    <React.Fragment>
      <Nav name="Employee Management"></Nav>
      <div>
        {(() => {
          const items = []
          for (let i = 0; i < json.length; i++) {
            items.push(json[i]);
          }
          return (
            <div>
              <Employees json={items} updateStatus={updateStatus} setUpdateStatus={setUpdateStatus} updateId={updateId} setUpdateId={setUpdateId} deletingStatus={deletingStatus} setDeletingStatus={setDeletingStatus} />
            </div>
          )
        })()}
      </div>

      <>
        <div className="centerDiv">
          <button onClick={() => { setModalStatus(!modalStatus) }} className="modalButton">Add</button>
        </div>
        {modalStatus && <Modal modalStatus={modalStatus} setModalStatus={setModalStatus} addingStatus={addingStatus} setAddingStatus={setAddingStatus} />}
        {addingStatus && (<Waiting />)}
      </>
      {updateStatus && (<UpdateButton updateStatus={updateStatus} setUpdateStatus={setUpdateStatus} updateId={updateId} setUpdateId={setUpdateId} overlayStatus={overlayStatus} setOverlayStatus={setOverlayStatus} />)}
      {deletingStatus && (<Waiting />)}
      {overlayStatus && (<Overlay />)}
    </React.Fragment>
  )
}
export default App;