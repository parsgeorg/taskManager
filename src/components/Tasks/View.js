import $ from "jquery";
import React, { useEffect } from "react";
import SortedTasks from "../SortedTasks";
import "./index.css";
import { getTasks } from "../../services/Tasks";

export const View = props => {
  const {
    tasks,
    currentPage,
    setCurrentPage,
    todosPerPage,
    upperPageBound,
    setUpperPageBound,
    lowerPageBound,
    setLowerPageBound,
    isPrevBtnActive,
    setIsPrevBtnActive,
    isNextBtnActive,
    setIsNextBtnActive,
    pageBound
  } = props;

  useEffect(() => {
    $("ul li.active").removeClass("active");
    $("ul li#" + currentPage).addClass("active");
  });

  const handleClick = event => {
    let listId = Number(event.target.id);
    setCurrentPage(listId);
    getTasks(currentPage).then(() => {
      $("ul li.active").removeClass("active");
      $("ul li#" + listId).addClass("active");
      setPrevAndNextBtnClass(listId);
    });
  };

  const setPrevAndNextBtnClass = listId => {
    let totalPage = Math.ceil(tasks.length / todosPerPage);
    setIsNextBtnActive("disabled");
    setIsPrevBtnActive("disabled");

    if (totalPage === listId && totalPage > 1) {
      setIsPrevBtnActive("");
    } else if (listId === 1 && totalPage > 1) {
      setIsNextBtnActive("");
    } else if (totalPage > 1) {
      setIsNextBtnActive("");
      setIsPrevBtnActive("");
    }
  };

  const btnIncOrDecClick = type => {
    setUpperPageBound(
      type === "inc" ? upperPageBound + pageBound : upperPageBound - pageBound
    );
    setLowerPageBound(
      type === "inc" ? lowerPageBound + pageBound : lowerPageBound - pageBound
    );
    let listid =
      type === "inc" ? upperPageBound + 1 : upperPageBound - pageBound;
    setCurrentPage(listid);
    setPrevAndNextBtnClass(listid);
  };

  const btnPrevOrNextClick = type => {
    if ((currentPage - 1) % pageBound === 0) {
      setUpperPageBound(
        type === "next"
          ? upperPageBound + pageBound
          : upperPageBound - pageBound
      );
      setLowerPageBound(
        type === "next"
          ? lowerPageBound + pageBound
          : lowerPageBound - pageBound
      );
    }
    let listId = type === "next" ? currentPage + 1 : currentPage - 1;
    setCurrentPage(listId);
    setPrevAndNextBtnClass(listId);
  };

  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTasks = tasks.slice(indexOfFirstTodo, indexOfLastTodo);

  const pageNumbers = [];
  const propsTasksLength = tasks.length;
  for (let i = 1; i <= Math.ceil(propsTasksLength / todosPerPage); i += 1) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map(number => {
    if (number === 1 && currentPage === 1) {
      return (
        <li key={number} className="active" id={number}>
          <button id={number} onClick={handleClick}>
            {" "}
            {number}
          </button>
        </li>
      );
    } else if (number < upperPageBound + 1 && number > lowerPageBound) {
      return (
        <li key={number} id={number}>
          <button id={number} onClick={handleClick}>
            {number}
          </button>
        </li>
      );
    } else {
      return null;
    }
  });

  let pageIncrementBtn = null;
  if (pageNumbers.length > upperPageBound) {
    pageIncrementBtn = (
      <li>
        <button onClick={btnIncOrDecClick("inc")}> &hellip; </button>
      </li>
    );
  }
  let pageDecrementBtn = null;
  if (lowerPageBound >= 1) {
    pageDecrementBtn = (
      <li>
        <button onClick={btnIncOrDecClick}> &hellip; </button>
      </li>
    );
  }
  let renderPrevBtn = null;
  if (isPrevBtnActive === "disabled") {
    renderPrevBtn = (
      <li className={isPrevBtnActive}>
        <span id="btnPrev"> Prev </span>
      </li>
    );
  } else {
    renderPrevBtn = (
      <li className={isPrevBtnActive}>
        <button id="btnPrev" onClick={btnPrevOrNextClick}>
          {" "}
          Prev{" "}
        </button>
      </li>
    );
  }
  let renderNextBtn = null;
  if (isNextBtnActive === "disabled") {
    renderNextBtn = (
      <li className={isNextBtnActive}>
        <span id="btnNext"> Next </span>
      </li>
    );
  } else {
    renderNextBtn = (
      <li className={isNextBtnActive}>
        <button id="btnNext" onClick={() => btnPrevOrNextClick("inc")}>
          {" "}
          Next{" "}
        </button>
      </li>
    );
  }
  return (
    <div>
      <SortedTasks tasks={currentTasks} />
      <ul className="pagination">
        {renderPrevBtn}
        {pageDecrementBtn}
        {renderPageNumbers}
        {pageIncrementBtn}
        {renderNextBtn}
      </ul>
    </div>
  );
};
