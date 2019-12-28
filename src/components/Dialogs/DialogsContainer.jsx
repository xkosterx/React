import React from "react";
import { connect } from "react-redux";
import {
  sendMessageActionCreator,
  updateNewMessageBodyActionCreator
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

let mapStateToProps = state => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    messageText: state.dialogsPage.newMessageText
  };
};

let mapDispatchToProps = dispatch => {
  return {
    sendMessage: () => {
      dispatch(sendMessageActionCreator());
    },
    updateMessage: body => {
      dispatch(updateNewMessageBodyActionCreator(body));
    }
  };
};


export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withAuthRedirect
)(Dialogs);
