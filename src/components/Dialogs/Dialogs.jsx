import React from "react";
import MaterialIcon, { colorPalette } from "material-icons-react";
import s from "./dialogs.module.scss";
import DialogItem from "./DialogItem/DialogItem";
import DialogMessage from "./DialogMessage/DialogMessage";

const Dialogs = props => {
  let dialogElements = props.state.dialogs.map(dialog => (
    <DialogItem
      avatar={dialog.avatar}
      userId={dialog.userId}
      userName={dialog.userName}
      postDate={dialog.postDate}
    />
  ));

  let dialogMessageElements = props.state.messages.map(message => (
    <DialogMessage
      avatar={message.avatar}
      userId={message.userId}
      message={message.message}
      date={message.date}
      userType={message.userType}
    />
  ));
  return (
    <div className={s.dialogs}>
      <div className={s.contentArea}>
        <div className={s.dialogsList}>{dialogElements}</div>
      </div>
      <div className={s.contentArea}>
        <div className={s.dialogArea}>
          {dialogMessageElements}
          <div className={s.postMessage}>
            <form action="#">
              <MaterialIcon icon="attach_file" size={18} />
              <input type="text" placeholder="Message..." />
              <button type="submit">
                <MaterialIcon icon="send" size={24} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;