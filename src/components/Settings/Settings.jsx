import React, { useState, useEffect } from "react";
import style from "./Settings.module.css";
import defaultImg from "../../assets/userImages/user_default.jpg";
import { CSSTransition } from "react-transition-group";
import { compose } from "redux";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import {
  getUserProfileTh,
  setProfileSettingsTh,
  updateUserPhotoTh
} from "../../redux/settings_reducer";
import {
  Input,
  Textarea,
  createField,
  contactsInput
} from "../common/FormControls/FormControls";
import { reduxForm } from "redux-form";
import { required } from "../../util/validators";
import Preloader from "../common/preloader/Preloader";
import preloaderGif from "../../img/preloader.gif";

const SettingsForm = props => {
  let [editPhoto, editPhotoMode] = useState(false);
  let onPhotoUploaded = e => {
    if (e.target.files.length) props.updatePhoto(e.target.files[0]);
  };

  return (
    <form onSubmit={props.handleSubmit}>
      {props.submitSucceeded && props.valid && props.pristine && (
        <div className={style.submitSucceeded}>Changes saved</div>
      )}
      {props.error &&
        props.error.map(error => (
          <div className={style.globalError} key={error}>
            {error}
          </div>
        ))}
      <div className={style.settings}>
        <div className={style.mainInformation}>
          <div
            className={style.userPhotoContainer}
            onMouseOver={() => {
              if (props.defaultUserId === props.id) editPhotoMode(true);
            }}
            onMouseLeave={() => {
              if (props.defaultUserId === props.id) editPhotoMode(false);
            }}
          >
            <img
              className={style.app__content_avatar}
              src={defaultImg && props.initialValues?.photos?.large}
              alt=""
            />
            {
              <CSSTransition
                in={editPhoto}
                timeout={5}
                mountOnEnter
                classNames={{
                  enterActive: style.logOutButton_enter,
                  enterDone: style.logOutButton_enter_active,
                  exitActive: style.logOutButton_exit,
                  exitDone: style.logOutButton_exit_active
                }}
              >
                <div>
                  <input type="file" id="file" onChange={onPhotoUploaded} />
                  <label htmlFor="file">choose a file</label>
                </div>
              </CSSTransition>
            }
          </div>

          <div>
            <div className={style.inputContainer}>
              <label htmlFor="lookingForAJob">Looking for a job</label>
              {createField("lookingForAJob", Input, "checkbox", {
                id: "lookingForAJob"
              })}
              {/*<label className={style.check_1}>
              <input type="checkbox" />
              <div className={style.inner}></div>
              <div className={style.bullet}></div>
            </label>*/}
            </div>

            <div className={style.field_container}>
              {createField("fullName", Input, "text", {
                placeholder: " ",
                validate: [required],
                className: style.field_input,
                label: {
                  className: style.field_placeholder,
                  text: "Full name"
                }
              })}
            </div>

            <div className={style.field_container}>
              {createField("lookingForAJobDescription", Input, "text", {
                placeholder: " ",
                validate: [required],
                className: style.field_input,
                label: {
                  className: style.field_placeholder,
                  text: "My skills"
                }
              })}
            </div>
            <div className={style.field_container}>
              {createField("aboutMe", Input, "text", {
                placeholder: " ",
                validate: [required],
                className: style.field_input,
                label: {
                  className: style.field_placeholder,
                  text: "Profile description"
                }
              })}
            </div>
          </div>
        </div>

        <div className={style.contactsContainer}>
          {Object.keys(props.initialValues.contacts).reverse().map(contact => {
            return contactsInput(contact, {
              field_container: style.field_container,
              field_input: style.field_input,
              field_placeholder: style.field_placeholder
            });
          })}
        </div>
      </div>

      <div className={style.submitButton}>
        <button>save</button>
      </div>
    </form>
  );
};

let SettingsReduxForm = reduxForm({ form: "settings" })(SettingsForm);

const SettingsContainer = props => {
  let onSubmit = formData => {
    props.setProfileSettingsTh(formData);
  };
  useEffect(() => {
    props.userInfoData || props.getUserProfileTh(props.userId);
  }, [props.userInfoData]);

  if (!props.userInfoData) {
    return <Preloader preloaderGif={preloaderGif} />;
  }
  return (
    <div className={style.main}>
      <h1>My profile settings</h1>
      <div>
        <SettingsReduxForm
          initialValues={props.userInfoData}
          onSubmit={onSubmit}
          updatePhoto={props.updateUserPhotoTh}
        />
      </div>
    </div>
  );
};

let mapStateToProps = state => ({
  userInfoData: state.settingsPage.userData,
  userId: state.authData.id
});

let Settings = compose(
  connect(mapStateToProps, {
    getUserProfileTh,
    setProfileSettingsTh,
    updateUserPhotoTh
  }),
  withAuthRedirect
)(SettingsContainer);

export default Settings;

// <div className={style.field_container}>
//   <div>
//     <input
//       className={style.field_input}
//       name="inputName"
//       type="text"
//       placeholder=" "
//     />
//     <label className={style.field_placeholder} htmlFor="inputName">
//       First name
//     </label>
//   </div>
// </div>;
