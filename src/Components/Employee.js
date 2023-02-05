import Button from "./Button";
import "./Employee.css";
import Column from "./Column";
function Employee(props) {
    return (
        <div>
            <div className="employee">
                <Column data={props.id} />
                <Column data={props.firstName} />
                <Column data={props.lastName} />
                <Column data={props.details} />
                <Button text="Update" method="update" id={props.id} updateStatus={props.updateStatus} setUpdateStatus={props.setUpdateStatus} updateId = {props.updateId} setUpdateId = {props.setUpdateId}  />
                <Button text="Delete" method="delete" id={props.id} deletingStatus={props.deletingStatus} setDeletingStatus={props.setDeletingStatus}/>
            </div>
            {/* <div>

            </div> */}
            {/* <br></br> */}
        </div>
    )
}

export default Employee;