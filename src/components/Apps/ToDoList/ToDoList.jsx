import React, { useEffect } from "react";
import style from "./ToDoList.module.css";
import { connect } from "react-redux";
import { Input, createField } from "../../common/FormControls/FormControls";
import { reduxForm, reset } from "redux-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import {
  addTaskTh,
  initTasksTh,
  deleteTaskTh,
  changeTaskTh
} from "../../../redux/toDoList_reducer";

// let tasksData = [
//   {
//     idTask: 1,
//     isDone: false,
//     taskText: "one two three"
//   },
//   {
//     idTask: 2,
//     isDone: false,
//     taskText: "two three"
//   },
//   {
//     idTask: 3,
//     isDone: true,
//     taskText: "three"
//   },
//   {
//     idTask: 4,
//     isDone: false,
//     taskText: "44444"
//   }
// ];

let ToDoListForm = props => {
  return (
    <form onSubmit={props.handleSubmit} className={style.input_tasks}>
      {createField("toDoListInput", Input, "text", {
        placeholder: "type task there...",
        maxLength: 30,
        autoComplete: "off"
      })}
      <button>Add task</button>
    </form>
  );
};

let ToDoListReduxForm = reduxForm({ form: "toDoListForm" })(ToDoListForm);

let ToDoList = props => {
  useEffect(() => {
    props.initTasksTh(localStorage.getItem("toDoList"));
  }, []);

  let onSubmit = formData => {
    formData.toDoListInput &&
      props.addTaskTh(formData.toDoListInput) &&
      props.reset("toDoListForm");
  };

  return (
    <div className={style.todoList}>
      <div className={style.tasks_list_global}>
        <div className={style.tasks_list_wrapper}>
          <h2 className={style.list_header}>Todo list</h2>
          <div className={style.tasks_list}>
            <ul className={style.ul_tasks}>
              {props.tasks &&
                props.tasks.map(task => {
                  return (
                    <li
                      key={task.idTask}
                      className={task.isDone ? style.doneTask : ""}
                    >
                      <span
                        className={style.dot_span}
                        onClick={() => {
                          props.changeTaskTh(task.idTask, props.tasks);
                        }}
                      />
                      {task.taskText}
                      <button
                        type="button"
                        onClick={() => {
                          props.deleteTaskTh(task.idTask, props.tasks);
                        }}
                      >
                        <FontAwesomeIcon icon={faTrashAlt} />
                      </button>
                    </li>
                  );
                })}
            </ul>
          </div>
          <ToDoListReduxForm onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
};

let mapDispatchToProps = state => ({
  tasks: state.toDoList.tasksData
});

export default connect(mapDispatchToProps, {
  addTaskTh,
  initTasksTh,
  deleteTaskTh,
  changeTaskTh,
  reset
})(ToDoList);
