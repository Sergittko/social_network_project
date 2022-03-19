import React from "react";
import { connect } from "react-redux";
import style from "./WeatherSearch.module.css";
import { Input, createField } from "../../../common/FormControls/FormControls";
import { reduxForm, change, reset } from "redux-form";
import {
  getSearchDataTh,
  getWeatherDataTh,
  resetWeatherData
} from "../../../../redux/weather_reducer";
// import {} from "../../util/validators";

let WeatherSearchForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      {props.error && <div className={style.globalError}>{props.error}</div>}
      {createField("weatherSearchInput", Input, "text", {
        placeholder: "type city there...",
        maxLength: 40,
        autoComplete: "off"
      })}
      <button></button>
    </form>
  );
};

let WeatherSearchReduxForm = reduxForm({ form: "weatherSearch" })(
  WeatherSearchForm
);

let WeatherSearch = props => {
  let onSubmit = formData => {
    props.getWeatherDataTh(formData.weatherSearchInput).then(resp => {
      localStorage.setItem('weatherCity', formData.weatherSearchInput);
      if (resp) props.reset("weatherSearch");
    });
  };
  let onChange = formData => {
    if (formData.weatherSearchInput?.length > 2){
      !props.weatherInput.anyTouched
        ? props.getSearchDataTh(formData.weatherSearchInput)
        : (props.weatherInput.anyTouched = false);
      }else {
        props.resetWeatherData();
      }
  };
  let onListItemClick = e => {
    props.change("weatherSearch", "weatherSearchInput", e.target.innerText);
    props.resetWeatherData();
  };
  let resetForm = () => props.reset("weatherSearch");

  return (
    <div className={style.input_weth_wrapper}>
      <WeatherSearchReduxForm onChange={onChange} onSubmit={onSubmit} />
      {props.weatherInput?.values?.weatherSearchInput && (
        <button onClick={resetForm} className={style.cross_delete}></button>
      )}

      <div className={style.live_search_container}>
        <ul className={style.search_list}>
          {props.weatherSearchList
            ? props.weatherSearchList.map((elem, index) => {
                let areaName = elem.areaName[0]?.value;
                let country = elem.country[0].value;
                let region = elem.region[0].value;
                return (
                  <li
                    key={index}
                    className={style.search_element}
                    onClick={onListItemClick}
                  >
                    {areaName + " " + country + " " + region}
                  </li>
                );
              })
            : ""}
        </ul>
      </div>
    </div>
  );
};

let mapStateToProps = state => ({
  weatherSearchList: state.weather.weatherSearchList,
  weatherInput: state.form.weatherSearch
});

export default connect(mapStateToProps, {
  getSearchDataTh,
  getWeatherDataTh,
  resetWeatherData,
  change,
  reset
})(WeatherSearch);
