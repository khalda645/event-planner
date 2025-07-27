import React, { useContext } from "react";
import { EventContext } from "../context/EventContextAPI";

//DASHBOARD
function MyDashboard() {
  const { events } = useContext(EventContext);

  //filter of events  by date then sort, and take the first 3
  const upcomingEvents = events
    .filter(event => new Date(event.date) >= new Date())
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, 3);

  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto", padding: "1rem" }}>
      <h2>Your Upcoming Events!!</h2>

      {upcomingEvents.length === 0 ? (
        <p>You do not have any upcoming events available to view</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {upcomingEvents.map((event, index) => (
            <li
              key={index}
              style={{
                border: "1px solid #ccc",
                padding: "1rem",
                marginBottom: "1rem",
                borderRadius: "8px",
                backgroundColor: "#f9f9f9",
              }}
            >
              <strong>{event.title}</strong>
              <div>Date: {event.date}</div>
              <div>Time: {event.time}</div>
              <div>Place: {event.location}</div>
              <div>Description: {event.description}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MyDashboard;