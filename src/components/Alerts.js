import React from 'react'

export default function Alerts(props) {
    const Capitalize=(word)=>
    {
 let lower=word.toLowerCase();
 return lower.charAt(0).toUpperCase() + lower.slice(1)
    }
  return (
    <div style={{height: '50px'}}>
 { props.alrt && <div className={`alert alert-${props.alrt.type} alert-dismissible fade show`} role="alert">
  <strong>{Capitalize(props.alrt.type)}</strong>: {props.alrt.msg}
  
</div>}
</div>
  )
}

