import React, { useState, useEffect } from "react";
import { validateMaxLength, validateRequired } from "../../helpers/Validation";
import { editTask } from "../../services/Tasks";
import { buff, sortNumbers, sortStrings } from "../Sorting";
import View from "./View";

const SortedTasks = props => {
  const [, setTasks] = useState([]);
  const [taskValue, setTaskValue] = useState("");
  const [textErr, setTextErr] = useState("");

  useEffect(() => {
    let tasks = fetchTasks();
    setTasks(tasks);
  });

  const fetchTasks = () => {
    let sortField = buff.sortField;
    let tasks = props.tasks;

    if ("text" === buff.fields[sortField]) tasks.sort(sortStrings);
    else tasks.sort(sortNumbers);
    return tasks;
  };

  const handleThClick = ev => {
    let sortField = buff.sortField;
    let sortDir = buff.sortDir;

    if (ev.currentTarget.dataset.field === sortField) {
      sortDir = !sortDir;
    } else {
      sortField = ev.currentTarget.dataset.field;
      sortDir = !sortDir;
    }

    // запрашиваем продукты заново с новыми сортировками
    buff.sortField = sortField;
    buff.sortDir = sortDir;
    let tasks = fetchTasks();

    setTasks([...tasks]);
  };

  const checkText = ev => {
    const valField = ev.target.value;
    let err = validateRequired(valField) || validateMaxLength(10)(valField);

    if (err) return setTextErr(err);
    return setTextErr("");
  };

  const saveChanges = (ev, id) => {
    const { value, name } = ev.target;

    if (taskValue !== value && !textErr) {
      editTask({
        id,
        [name]: value
      });
    }
  };

  const onFocus = e => {
    setTaskValue(e.target.value);
  };

  return (
    <div>
      <View
        tasks={props.tasks}
        onFocus={onFocus}
        checkText={checkText}
        textErr={textErr}
        saveChanges={saveChanges}
        handleThClick={handleThClick}
      />
    </div>
  );
};

export default SortedTasks;
