import Employee from "./Employee";

function Employees(props) {

    // const items = [1, 2, 3, 4, 5];
    const json = props.json;
    // console.log(json);
    // console.log(props.updateStatus);
    return (
        <div>
            {
                json.map((employee) => {
                    return <Employee key={employee["id"]} id={employee["id"]} firstName={employee["firstName"]} lastName={employee["lastName"]} details={employee["details"]} updateStatus={props.updateStatus} setUpdateStatus={props.setUpdateStatus} updateId={props.updateId} setUpdateId={props.setUpdateId} deletingStatus={props.deletingStatus} setDeletingStatus={props.setDeletingStatus
                    } />
                })
            }
        </div>
    )
}

export default Employees;