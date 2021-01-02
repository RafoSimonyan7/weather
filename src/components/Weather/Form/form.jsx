import React from "react";

const Form = (props) => {
  return (
    <form onSubmit={props.weaterMethod}>
      <input type="text" name='city' placeholder='city'/>
      <button>Find Weather</button>
    </form>
  )
}

export default Form;