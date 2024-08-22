import React from 'react'

function Alert(props) {
    return (
    <div style={{height:'50px'}}>
       { props.alert && <div className={"alert alert-success alert-dismissible fade show"} role="alert">
    <center><strong>{props.alert.type}</strong>:{props.alert.msg}</center>
</div>}
    </div>
    )
}

export default Alert
