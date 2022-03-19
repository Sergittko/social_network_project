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
      <div>
        <input type={"text"} {...input} {...props} />
      </div>
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
  <div>
    <Field name={name} component={component} type={type} {...props} />
  </div>
);

export const contactsInput = (socialNetwork, style) => (
  <div className={style}>
    <p>{socialNetwork}</p>
    {createField(`contacts.${socialNetwork}`, Input, "text", {
      placeholder: socialNetwork
    })}
  </div>
);
