import React, { createContext, useState, useEffect } from "react";

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [user, setUser] = useState(null);

  //load events from local storage
  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
    setEvents(storedEvents);
  }, []);

  //save events to local storage
  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  //function to login
  const loginUser = (userData) => {
    setUser(userData);
  };

  //function to logout
  const logoutUser = () => {
    setUser(null);
  };

  //function to add event
  const addEvent = (event) => {
    const updatedEvents = [...events, event];
    setEvents(updatedEvents);
  };

  //function to update 
  const updateEvent = (index, updatedEvent) => {
    const updatedEvents = [...events];
    updatedEvents[index] = updatedEvent;
    setEvents(updatedEvents);
  };

  //to delete event
  const deleteEvent = (index) => {
    const updatedEvents = events.filter((_, i) => i !== index);
    setEvents(updatedEvents);
  };

  return (
    <EventContext.Provider
      value={{
        events,
        user,
        loginUser,
        logoutUser,
        setUser,
        addEvent,
        updateEvent,
        deleteEvent,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};
