const INITIALIAZATE_TASKS = "toDoList/INITIALIAZATE_TASKS";
const ADD_TASK = "toDoList/ADD_TASK";
const DELETE_TASK = "toDoList/DELETE_TASK";
const CHANGE_TASK_PROGRESS = "toDoList/CHANGE_TASK_PROGRESS";
const REMOVE_ALL_TASKS = "toDoList/REMOVE_ALL_TASKS";

let initialState = {
  tasksData: null
};

const initTasks = tasksData => ({
  type: INITIALIAZATE_TASKS,
  tasksData
});
const addTask = tasksData => ({
  type: ADD_TASK,
  tasksData
});
const deleteTask = tasksData => ({
  type: DELETE_TASK,
  tasksData
});
const changeTask = tasksData => ({
  type: CHANGE_TASK_PROGRESS,
  tasksData
});
const removeAllTasks = tasksData => ({
  type: REMOVE_ALL_TASKS,
  tasksData
});

export const initTasksTh = tasks => dispatch => {
  if (tasks) {
    dispatch(initTasks(JSON.parse(tasks)));
  }
};
export const addTaskTh = taskText => dispatch => {
  let toDoArray = JSON.parse(localStorage.getItem("toDoList"));
  if (!toDoArray) {
    toDoArray = [
      {
        idTask: 1,
        isDone: false,
        taskText
      }
    ];
    localStorage.setItem("toDoList", JSON.stringify(toDoArray));
    return dispatch(addTask(JSON.parse(localStorage.getItem("toDoList"))));
  }
  if (toDoArray) {
    let id = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let reservedId = toDoArray.map(item => item.idTask);
    id = id.filter(n => reservedId.indexOf(n) === -1);
    if (id.length === 0) return;
    toDoArray.push({
      idTask: id[0],
      isDone: false,
      taskText
    });
    localStorage.setItem("toDoList", JSON.stringify(toDoArray));
    return dispatch(addTask(JSON.parse(localStorage.getItem("toDoList"))));
  }
};
export const deleteTaskTh = (taskId, tasks) => dispatch => {
  let deletedTask = tasks.filter(item => item.idTask !== taskId);
  localStorage.setItem("toDoList", JSON.stringify(deletedTask));
  dispatch(deleteTask(JSON.parse(localStorage.getItem("toDoList"))));
};
export const changeTaskTh = (taskId, tasks) => dispatch => {
  tasks.forEach((item, i, arr) => {
    if (item.idTask === taskId) {
      item.isDone ? (item.isDone = false) : (item.isDone = true);
    }
  });
  localStorage.setItem("toDoList", JSON.stringify(tasks));
  dispatch(changeTask(JSON.parse(localStorage.getItem("toDoList"))));
};
export const removeAllTasksTh = () => dispatch => {
  localStorage.removeItem("toDoList");
  dispatch(removeAllTasks(JSON.parse(localStorage.getItem("toDoList"))));
};

const toDoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIAZATE_TASKS:
      return {
        ...state,
        tasksData: action.tasksData
      };
    case ADD_TASK:
      return {
        ...state,
        tasksData: action.tasksData
      };
    case DELETE_TASK:
      return {
        ...state,
        tasksData: action.tasksData
      };
    case CHANGE_TASK_PROGRESS:
      return {
        ...state,
        tasksData: action.tasksData
      };
    case REMOVE_ALL_TASKS:
      return {
        ...state,
        tasksData: action.tasksData
      };

    default:
      return state;
  }
};

export default toDoListReducer;
