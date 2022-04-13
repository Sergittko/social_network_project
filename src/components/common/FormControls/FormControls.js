import React from "react";
import css from "./FormControls.module.css";
import { Field } from "redux-form";

export const Textarea = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={hasError ? css.inputContainer : ""}>
      <div>
        <textarea {...input} {...props} />
      </div>
      {hasError ? (
        <span className={css.errorMessage + " " + css.errorMessageTextarea}>
          {meta.error}
        </span>
      ) : (
        ""
      )}
    </div>
  );
};

export const Input = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={hasError ? css.inputContainer : ""}>
      <input type={"text"} {...input} {...props} />
      {props.label && (
        <label className={props.label.className} htmlFor={input.name}>
          {props.label.text}
        </label>
      )}
      {hasError ? (
        <span className={css.errorMessage + " " + css.errorMessageInput}>
          {meta.error}
        </span>
      ) : (
        ""
      )}
    </div>
  );
};

export const createField = (name, component, type, props = {}) => (
  <Field name={name} component={component} type={type} {...props}/>
);

export const contactsInput = (socialNetwork, style) => (
  <div className={style.field_container} key={socialNetwork}>
    {createField(`contacts.${socialNetwork}`, Input, "text", {
      placeholder: socialNetwork,
      className: style.field_input,
      label: {
        className: style.field_placeholder,
        text: socialNetwork
      }
    })}
  </div>
);
