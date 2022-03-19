import React from "react";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { compose } from "redux";
import { messageTextareaAction } from "../../redux/dialogs_reducer.js";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

class DialogsContainer extends React.Component {
  render() {
    return <Dialogs {...this.props} />;
  }
}

let mapStateToProps = state => {
  return {
    state: state.dialogsPage
  };
};

export default compose(
  connect(mapStateToProps, {
    messageTextareaAction
  }),
  withAuthRedirect
)(DialogsContainer);
