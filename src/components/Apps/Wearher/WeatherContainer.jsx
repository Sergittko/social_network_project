import React from "react";
import Weather from "./Weather";
import { connect } from "react-redux";
import { getWeatherDataTh } from "../../../redux/weather_reducer";
import Preloader from "../../common/preloader/Preloader";
import preloaderGif from "../../../img/preloader.gif";

class WeatherContainer extends React.Component {
  componentDidMount() {
    let lastSearchedWeather = localStorage.getItem('weatherCity');
    if(!lastSearchedWeather) localStorage.setItem('weatherCity','Kiev');
    this.props.getWeatherDataTh(localStorage.getItem('weatherCity'));
  }

  render() {
    return !this.props.weather ? (
      <Preloader preloaderGif={preloaderGif} />
    ) : (
      <Weather
        city={this.props.weather.request[0].query}
        temp_c={this.props.weather.current_condition[0].temp_C}
        obs_time={this.props.weather.current_condition[0].observation_time}
        date={this.props.weather.weather[0].date}
        sunrise={this.props.weather.weather[0].astronomy[0].sunrise}
        sunset={this.props.weather.weather[0].astronomy[0].sunset}
        icon_w={this.props.weather.weather[0].hourly[0].weatherIconUrl[0].value}
        icon_alt={this.props.weather.weather[0].hourly[0].weatherDesc[0].value}
      />
    );
  }
}

let mapStateToProps = state => ({
  weather: state.weather.weatherData
});

export default connect(mapStateToProps, { getWeatherDataTh })(WeatherContainer);
