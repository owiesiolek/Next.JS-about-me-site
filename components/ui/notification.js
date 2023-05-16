// ReactDOM import is necessary to use React Portals from _document.js
import ReactDOM from "react-dom";

import classes from "./notification.module.css";

function Notification(props) {
  const { title, message, status } = props;

  let statusClasses = "";

  if (status === "success") {
    statusClasses = classes.success;
  }

  if (status === "error") {
    statusClasses = classes.error;
  }

  const cssClasses = `${classes.notification} ${statusClasses}`;

  //   return (
  //     <div className={cssClasses}>
  //       <h2>{title}</h2>
  //       <p>{message}</p>
  //     </div>
  //   );
  // }

  // without using ReactDOM we simply would replace code below with code above
  return ReactDOM.createPortal(
    <div className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>,
    document.getElementById("notifications")
  );
}

export default Notification;
