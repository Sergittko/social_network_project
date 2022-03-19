import React from "react";
import login from "./Login.module.css";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import { Input, createField } from "../common/FormControls/FormControls";
import { maxLength, required } from "../../util/validators";
import { logInTh } from "../../redux/auth_reducer";
import { Redirect } from "react-router";

const maxLength30 = maxLength(30);

const LoginForm = props => {
  return (
    <form onSubmit={props.handleSubmit} className={login.login_form}>
      {createField("email", Input, "text", {
        placeholder: "email",
        validate: [required, maxLength30],
        pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"
      })}
      {createField("password", Input, "password", {
        placeholder: "password",
        validate: [required, maxLength30]
      })}

      <div className={login.rememberMe}>
        {createField("rememberMe", Input, "checkbox", { id: "rememberMe" })}
        <label htmlFor="rememberMe" style={{ cursor: "pointer" }}>
          remember me
        </label>
      </div>
      {props.captcha && (
        <div className={login.captcha}>
          <img src={props.captcha} alt="" />
          {createField("captcha", Input, "text", { placeholder: "captcha" })}
        </div>
      )}
      {props.error && <div className={login.globalError}>{props.error}</div>}
      <div>
        <button>login</button>
      </div>
    </form>
  );
};

let LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const LoginContainer = props => {
  const onSubmit = formData => {
    let rememberMe = !formData.rememberMe ? false : formData.rememberMe;
    props.logInTh(
      formData.email,
      formData.password,
      rememberMe,
      formData.captcha
    );
  };

  if (props.isAuth === true) return <Redirect to="/profile" />;

  return (
    <div className={login.login}>
      {/*arikushi.tekimo@gmail.com 091001562 */}
      <div className={login.form}>
        <span className={login.spanHeader}>login</span>
        <LoginReduxForm onSubmit={onSubmit} captcha={props.captchaUrl} />
      </div>
    </div>
  );
};

let mapStateToProps = state => ({
  isAuth: state.authData.isAuthoriserd,
  captchaUrl: state.authData.captchaUrl
});

let Login = connect(mapStateToProps, { logInTh })(LoginContainer);

export default Login;
