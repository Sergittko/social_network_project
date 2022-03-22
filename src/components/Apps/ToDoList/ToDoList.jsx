import React from "react";
import style from "./ToDoList.module.css";

let ToDoList = () => {
  return (
    <div className={style.todoList}>
      <div className={style.tasks_list_global}>
        <div className={style.tasks_list_wrapper}>
          <h2 className={style.list_header}>Todo list</h2>
          <div className={style.tasks_list}>
            <ul className={style.ul_tasks}>
              <li>
                <span className={style.dot_span}/>
                
                <button type="button">
                  +
                </button>
              </li>
            </ul>
          </div>
          <div className={style.input_tasks}>
            <input
              type="text"
              id="input_task"
              defaultValue=""
              maxLength={30}
              placeholder="type task there..."
              autoComplete="off"
            />
            <button>Add task</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
