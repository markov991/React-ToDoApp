import React from "react";
import "./Events.css";

const Events = ({ events, onClick }) => {
  console.log(events);
  return (
    <div className="events-container">
      {events.map((event, i) => {
        return (
          <p
            onClick={(e) => onClick(e.currentTarget.innerHTML)}
            className="event"
            key={i + 100}
          >
            {event}
          </p>
        );
      })}
    </div>
  );
};

export default Events;
