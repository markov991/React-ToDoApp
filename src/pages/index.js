import React, { useState } from "react";
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

const IndexPage = () => {
  const events = ["Frontend"];
  const tasks = [
    {
      taskName: "Learn React",
      description:
        "Lorem ipsum dolor sit amet consectetur,adipisicing elit. Necessitatibus odit quos in reprehenderit ipsum maiores",
      date: "2023-02-01",
      eventName: "Frontend",
      status: "ongoing",
      dateCreated: "2022-01-01",
    },
    {
      taskName: "Learn HTML",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus odit quos in reprehenderit ipsum maiores",
      date: "",
      eventName: "Frontend",
      status: "finished",
      dateCreated: "2022-01-01",
    },
    {
      taskName: "Learn CSS",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus odit quos in reprehenderit ipsum maiores",
      date: "",
      eventName: "Frontend",
      status: "finished",
      dateCreated: "2022-01-01",
    },
    {
      taskName: "Learn JS",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus odit quos in reprehenderit ipsum maiores",
      date: "",
      eventName: "Frontend",
      status: "finished",
      dateCreated: "2022-01-01",
    },
    {
      taskName: "Learn Python",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus odit quos in reprehenderit ipsum maiores",
      date: "2020-06-08",
      eventName: "Frontend",
      status: "unfinished",
      dateCreated: "2022-01-01",
    },
  ];

  const [openTaskInfo, setOpenTaskInfo] = useState(false);

  const [eventList, setEventList] = useState(events);
  const [filterEventPar, setFilterEventPar] = useState(tasks);
  const [taskInfo, SetTaskInfo] = useState();

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

  const modalHandler = (e) => {
    if (e === "close") {
      setOpenTaskInfo(false);
    }
    if (e === "confirm") {
      setOpenTaskInfo(false);
      console.log(tasks.includes(taskInfo));

      taskInfo.status = "finished";
    }
    // e.preventDefault();
    console.log(e);
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
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
