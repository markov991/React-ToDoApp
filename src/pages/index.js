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

  const [eventList, setEventList] = useState(events);
  const [filterEventPar, setFilterEventPar] = useState(tasks);

  const filteringActiveTasks = () => {
    console.log("hello");
  };
  const filteringSelectedEvent = (e) => {
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
          <OnGoingTasks task={filterEventPar} />
        </MainBar>
      </Container>
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
