import React from 'react'

export default function Alerts(props) {
    const capitalize = (str) =>
    {
        // const str1 = str.toLowerCase();
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return (
        <>
            <div style={{height : '50px'}}>
    <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalize (props.alert.type) } : {props.alert.msg}</strong> 
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    
                </div>
                </div>
    </>
  )
}
