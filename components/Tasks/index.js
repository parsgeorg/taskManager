import React, { useState, useEffect, useMemo } from "react";
import { getTasks } from "../../services/Tasks";
import Login from "../Auth/Login";
import AddTaskForm from "../UI/Forms/Tasks/AddTaskForm";
import { View } from "./View";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage] = useState(3);
  const [upperPageBound, setUpperPageBound] = useState(3);
  const [lowerPageBound, setLowerPageBound] = useState(0);
  const [isPrevBtnActive, setIsPrevBtnActive] = useState("disabled");
  const [isNextBtnActive, setIsNextBtnActive] = useState("");
  const [pageBound] = useState(3);

  useEffect(() => {
    getTasks().then(res => {
      setTasks(tasks.concat(res));
    });
  }, []);

  useMemo(getTasks, [tasks]);

  const addTask = task => {
    setTasks(tasks.concat(task));
  };

  return (
    <div>
      <Login />
      <View
        tasks={tasks}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        todosPerPage={todosPerPage}
        upperPageBound={upperPageBound}
        setUpperPageBound={setUpperPageBound}
        lowerPageBound={lowerPageBound}
        setLowerPageBound={setLowerPageBound}
        isPrevBtnActive={isPrevBtnActive}
        setIsPrevBtnActive={setIsPrevBtnActive}
        isNextBtnActive={isNextBtnActive}
        setIsNextBtnActive={setIsNextBtnActive}
        pageBound={pageBound}
      />
      <AddTaskForm addTask={addTask} />
    </div>
  );
};

export default Tasks;
