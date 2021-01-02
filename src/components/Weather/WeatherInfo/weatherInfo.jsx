import React from "react";

const WeatherInfo = props => {
  return (
    <div>
      {props.name && 
        <div>
          <p>location: {props.name}</p>
          <p>Temperature: {props.temp}</p>
          <p>Country: {props.country}</p>
          <p>Pressure: {props.pressure}</p>
        </div>
      }
      <p>{props.error}</p>
    </div>
  )
}

export default WeatherInfo;