import React, { useState, useEffect } from "react";
// import user from "./UserInfoStatus.module.css";

let UserInfoStatus = props => {
  let [editMode, setMode] = useState(false);
  let [status, changeStatus] = useState(props.status);

  let activateEditMode = () => {
    setMode(true);
  };

  let deactivateEditMode = () => {
    setMode(false);
    props.updateStatus(status);
  };

  useEffect(() => {
    changeStatus(props.status);
  }, [props.status]);

  let onStatusChange = e => {
    changeStatus(e.currentTarget.value);
  };

  let editModePermission = () => {
    if (props.defaultUserId === props.userId) {
      activateEditMode();
    }
    return;
  };

  return (
    <div>
      Status:{" "}
      {!editMode ? (
        <span onDoubleClick={editModePermission} style={{ cursor: "pointer" }}>
          {props.status != null ? props.status : "no status"}
        </span>
      ) : (
        <span style={{ position: "relative" }}>
          <input
            onBlur={deactivateEditMode}
            onChange={onStatusChange}
            value={status}
            type="text"
            autoFocus
            style={{ position: "absolute", bottom: "0" }}
          />
        </span>
      )}
    </div>
  );
};

// class UserInfoStatus extends React.Component {
//   state = {
//     editMode: false,
//     status: this.props.status
//   };
//
//   activateEditMode = () => {
//     this.setState({
//       editMode: true
//     });
//   };
//
//   deactivateEditMode = () => {
//     this.setState({
//       editMode: false
//     });
//     this.props.updateStatus(this.state.status);
//   };
//
//   componentDidUpdate(prevProps) {
//     if (prevProps.status !== this.props.status) {
//       this.setState({
//         status: this.props.status
//       });
//     }
//   }
//
//   onStatusChange = e => {
//     this.setState({
//       status: e.currentTarget.value
//     });
//   };
//
//   render() {
//     return (
//       <div>
//         Status:{" "}
//         {!this.state.editMode ? (
//           <span
//             onDoubleClick={this.activateEditMode}
//             style={{ cursor: "pointer" }}
//           >
//             {this.props.status != null ? this.props.status : "no status"}
//           </span>
//         ) : (
//           <span style={{ position: "relative" }}>
//             <input
//               type="text"
//               style={{ position: "absolute", bottom: "0" }}
//               autoFocus
//               onBlur={this.deactivateEditMode}
//               onChange={this.onStatusChange}
//               value={this.state.status}
//             />
//           </span>
//         )}
//       </div>
//     );
//   }
// }

export default UserInfoStatus;
