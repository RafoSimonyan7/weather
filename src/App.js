import React from "react";
import "./App.css";
import Info from "./components/Weather/Info/info";
import Form from "./components/Weather/Form/form";
import WeatherInfo from "./components/Weather/WeatherInfo/weatherInfo";

const API_KEY = "f21dca52ef0a4965459dffa199649429";

class App extends React.Component {
  state = {
    temp: undefined,
    name: undefined,
    country: undefined,
    pressure: undefined,
    error: undefined,
  };

  gettingWeather = async (e) => {
    e.preventDefault();
    let city = e.target.elements.city.value;

    if (city) {
      const api_url = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      const data = await api_url.json();

      this.setState({
        temp: data.main.temp,
        name: data.name,
        country: data.sys.country,
        pressure: data.main.pressure,
        error: undefined,
      });
    } else {
      this.setState({
        temp: undefined,
        name: undefined,
        country: undefined,
        pressure: undefined,
        error: "Enter the name of the city",
      });
    }
  };

  render() {
    return (
      <div className='wrapper'>
        <Info />
        <Form weaterMethod={this.gettingWeather} />
        <WeatherInfo
          temp={this.state.temp}
          name={this.state.name}
          country={this.state.country}
          pressure={this.state.pressure}
        />
      </div>
    );
  }
}

export default App;
