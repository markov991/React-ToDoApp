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
  const [taskInfo, SetTaskInfo] = useState();
  const [newTask, setNewTask] = useState({});

  const filteringActiveTasks = () => {
    setFilterEventPar(tasks.filter((task) => task.status === "ongoing"));
    console.log("hello");
  };
  const filteringSelectedEvent = (e) => {
    setFilterEventPar(tasks.filter((task) => task.eventName === e));
    console.log(e);
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
      console.log(tasks.includes(taskInfo));
      // let index = tasks.findIndex((task) => task.taskId === e.taskId);
      tasks[tasks.findIndex((task) => task.taskId === e.taskId)].status =
        "finished";
      setFilterEventPar(tasks);

      // taskInfo.status = "finished";
    }
    // setOpenTaskInfo(false);
    // e.preventDefault();
    console.log(e, string);
  };
  useEffect(() => {
    if (
      !events.includes(newTask.eventName) &&
      !newTask.eventName === undefined
    ) {
      events.push(newTask.eventName);

      setEventList(events);
      console.log(events);
    }
    if (!Object.keys(newTask).length === 0) {
      tasks.push(newTask);
    }
    console.log(events);
    console.log(newTask.eventName);
    console.log(tasks);
  }, [newTask, eventList]);
  // useEffect(() =>{},)

  // const y = (t) => {
  //   setNewTask({
  //     eventName: t.selectedEventField.eventName,
  //     taskName: t.taskNameInput.taskName,
  //     description: t.taskDescriptionInput.description,
  //     date: t.taskDateInput.date,
  //   });
  //   console.log(t);
  //   setAddingNewTask(false);
  // };
  // const y = ({
  //   selectedEventField,
  //   taskNameInput,
  //   taskDescriptionInput,
  //   taskDateInput,
  // }) => {
  //   setNewTask({
  //     ...selectedEventField,
  //     ...taskNameInput,
  //     ...taskDescriptionInput,
  //     ...taskDateInput,
  //     status: "ongoing",
  //   });
  //   console.log();
  //   setAddingNewTask(false);
  // };
  const y = ({
    selectedEventField,
    taskNameInput,
    taskDescriptionInput,
    taskDateInput,
  }) => {
    setNewTask({
      ...taskNameInput,
      ...selectedEventField,
      ...taskDescriptionInput,
      ...taskDateInput,
      status: "ongoing",
    });
    console.log();

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
      {addingNewTask && <Modal events={events} x={y} />}
      <Footer />
      <AddNewTask onClick={handleNewTask} />
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
