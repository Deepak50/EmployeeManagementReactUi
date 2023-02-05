import "./Popup.css"

function Popup(props){
    if(props.trigger)
        return(
            <div className = "box">This is a popup</div>
        );
    return "";
}

export default Popup;