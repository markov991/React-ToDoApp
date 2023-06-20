import React, { useState, useEffect } from "react";
import "./index.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Container from "../components/UI/Container/Container";
import SideBar from "../components/UI/SideBar/SideBar";
import MainBar from "../components/UI/MainBar/MainBar";
import DateFilter from "../components/DateFilter/DateFilter";
import Default from "../components/Default/Default";
import Events from "../components/Events/Events";
import OnGoingTasks from "../components/Tasks/OnGoingTasks/OnGoingTasks";
import FinishedTasks from "../components/Tasks/FinishedTasks/FinishedTasks";
import UnfinishedTasks from "../components/Tasks/UnfinishedTasks/UnfinishedTasks";
import Modal from "../components/Modal/Modal";
import AddNewTask from "../components/AddNewTask/AddNewTask";
const events = ["Frontend"];
const tasks = [
  {
    taskId: 101,
    taskName: "Learn React",
    description:
      "Lorem ipsum dolor sit amet consectetur,adipisicing elit. Necessitatibus odit quos in reprehenderit ipsum maiores",
    date: "2023-02-01",
    eventName: "Frontend",
    status: "ongoing",
    dateCreated: "2022-01-01",
  },
  {
    taskId: 102,
    taskName: "Learn HTML",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus odit quos in reprehenderit ipsum maiores",
    date: "",
    eventName: "Frontend",
    status: "finished",
    dateCreated: "2022-01-01",
  },
  {
    taskId: 103,
    taskName: "Learn CSS",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus odit quos in reprehenderit ipsum maiores",
    date: "",
    eventName: "Frontend",
    status: "finished",
    dateCreated: "2022-01-01",
  },
  {
    taskId: 104,
    taskName: "Learn JS",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus odit quos in reprehenderit ipsum maiores",
    date: "",
    eventName: "Frontend",
    status: "finished",
    dateCreated: "2022-01-01",
  },
  {
    taskId: 105,
    taskName: "Learn Python",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus odit quos in reprehenderit ipsum maiores",
    date: "2020-06-08",
    eventName: "Frontend",
    status: "unfinished",
    dateCreated: "2022-01-01",
  },
];

const IndexPage = () => {
  const [openTaskInfo, setOpenTaskInfo] = useState(false);
  const [addingNewTask, setAddingNewTask] = useState(false);

  const [eventList, setEventList] = useState(events);
  const [filterEventPar, setFilterEventPar] = useState(tasks);
  const [taskInfo, SetTaskInfo] = useState({});
  const [newTask, setNewTask] = useState({});
  const [currentDate, setCurrentDate] = useState();

  useEffect(() => {
    let now = new Date();
    let year = now.getFullYear();
    let month =
      now.getMonth() > 9 ? now.getMonth() + 1 : "0" + (now.getMonth() + 1);
    let date = now.getDate() > 9 ? now.getDate() : "0" + now.getDate();

    console.log(now.getDate());

    setCurrentDate(year + "-" + month + "-" + date);
  }, []);

  const filteringActiveTasks = () => {
    setFilterEventPar(tasks.filter((task) => task.status === "ongoing"));
  };
  const filteringSelectedEvent = (e) => {
    setFilterEventPar(tasks.filter((task) => task.eventName === e));
  };
  const openModalInfo = (filterdtask) => {
    SetTaskInfo(filterdtask);
    setOpenTaskInfo(true);
  };
  const handleNewTask = () => {
    if (!addingNewTask) {
      setAddingNewTask(true);
    }
    if (addingNewTask) {
      setAddingNewTask(false);
    }
  };

  const modalHandler = (e, string) => {
    if (e === "close") {
      setOpenTaskInfo(false);
    }
    if (string === "confirm") {
      setOpenTaskInfo(false);

      tasks[tasks.findIndex((task) => task.taskId === e.taskId)].status =
        "finished";

      if (e.eventName) {
        setFilterEventPar(
          tasks.filter((task) => task.eventName === e.eventName)
        );
      } else {
        setFilterEventPar(tasks);
      }
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("tasks"));

    if (!data) return;
    data.forEach((task, index) => {
      tasks.forEach((originalTask) => {
        if (task.taskId === originalTask.taskId) {
          originalTask.status = task.status;
        }
      });
      if (!tasks[index]) {
        tasks.push(task);
      }
      if (!events.includes(task.eventName)) {
        events.push(task.eventName);
      }
    });

    setEventList([...events]);
  }, []);

  useEffect(() => {
    tasks.forEach((task) => {
      if (currentDate > task.date && !(task.status === "finished")) {
        task.status = "unfinished";
        console.log(task);
      }
    });
    setFilterEventPar(tasks.filter((task) => task.status === "ongoing"));
  }, [currentDate]);

  useEffect(() => {
    if (!events.includes(newTask.eventName) && newTask.eventName) {
      events.push(newTask.eventName);

      setEventList([...events]);

      console.log(events);
    }
  }, [newTask, eventList]);

  useEffect(() => {
    if (!(Object.keys(newTask).length === 0)) {
      tasks.push(newTask);
      localStorage.setItem("tasks", JSON.stringify(tasks));

      if (!newTask.eventName) {
        setFilterEventPar([
          ...tasks.filter((task) => task.status === "ongoing"),
        ]);
      } else {
        setFilterEventPar([
          ...tasks.filter((task) => task.eventName === newTask.eventName),
        ]);
      }
      console.log(newTask.eventName, tasks);
    }
  }, [newTask]);

  const addingNewTaskHandler = ({
    selectedEventField,
    taskNameInput,
    taskDescriptionInput,
    taskDateInput,
  }) => {
    setNewTask({
      taskId: Math.floor(Math.random() * 1000),
      ...taskNameInput,
      ...selectedEventField,
      ...taskDescriptionInput,
      ...taskDateInput,
      status: "ongoing",
      dateCreated: currentDate,
    });

    setAddingNewTask(false);
  };

  return (
    <>
      <Header />
      <Container>
        <SideBar>
          <DateFilter />
          <Default onClick={filteringActiveTasks} />
          <Events onClick={filteringSelectedEvent} events={eventList} />
        </SideBar>
        <MainBar>
          <FinishedTasks onClick={openModalInfo} task={filterEventPar} />
          <OnGoingTasks onClick={openModalInfo} task={filterEventPar} />
          <UnfinishedTasks onClick={openModalInfo} task={filterEventPar} />
        </MainBar>
      </Container>
      {openTaskInfo && <Modal onClick={modalHandler} task={taskInfo} />}
      {addingNewTask && (
        <Modal events={events} addingNewTask={addingNewTaskHandler} />
      )}
      <Footer />
      <AddNewTask onClick={handleNewTask} />
    </>
  );
};

export default IndexPage;

export const Head = () => <title>React ToDoApp</title>;
