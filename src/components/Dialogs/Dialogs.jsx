import React from "react";
import dial from "./Dialogs.module.css";
import UsersList from "./UsersList/UsersList";
import Messages from "./Messages/Messages";
import UserMessages from "./UserMessages/UserMessages";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../common/FormControls/FormControls";
import { maxLength } from "../../util/validators";

const maxLength20 = maxLength(20);

const DialogsForm = props => {
  return (
    <div className={dial.dialog_input}>
      <form onSubmit={props.handleSubmit}>
        <Field
          component={Textarea}
          name={"messageTextarea"}
          validate={[maxLength20]}
          placeholder="Type your message..."
          id="messageTextarea"
          rows="3"
          className={dial.textarea}
        />

        <button>Send</button>
      </form>
    </div>
  );
};

const DialogsReduxForm = reduxForm({ form: "dialogs" })(DialogsForm);

const Dialogs = props => {
  let dialogComponents = props.state.dialogsData.map(d => (
    <UsersList key={d.id} name={d.name} id={d.id} imgSrc={d.imgSrc} />
  ));
  let messagesComponents = props.state.messagesData.map((m, index) => (
    <Messages key={index} message={m.message} />
  ));
  let userMessagesComponents = props.state.messagesUserData.map((m, index) => (
    <UserMessages key={index} message={m.message} />
  ));

  const onMessageSubmit = formData => {
    props.messageTextareaAction(formData.messageTextarea);
  };

  return (
    <div className={dial.dialogs}>
      <div className={dial.dialogs_list}>{dialogComponents}</div>
      <div className={dial.message_wrapper}>
        <div className={dial.messages}>
          {messagesComponents}
          {userMessagesComponents}
        </div>
        <DialogsReduxForm onSubmit={onMessageSubmit} />
      </div>
    </div>
  );
};

export default Dialogs;
