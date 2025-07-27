import React, { useContext, useState } from "react";
import { EventContext } from "../context/EventContextAPI";

//MANAGEEVENTSPAGE
function EventsPage() {
  const {
    events,
    addEvent,
    updateEvent,
    deleteEvent,
  } = useContext(EventContext);

  //state to manageevent input
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
    description: "",
  });

  //state to see if editing or event adding
  const [editIndex, setEditIndex] = useState(null);

  //handles change 
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //handles submission of new event or edited event
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      updateEvent(editIndex, formData);
      setEditIndex(null);
    } else {
      addEvent(formData);
    }
    setFormData({
      title: "",
      date: "",
      time: "",
      location: "",
      description: "",
    });
  };

  //updating existing
  const handleEdit = (index) => {
    setFormData(events[index]);
    setEditIndex(index);
  };

  //deletes event
  const handleDelete = (index) => {
    deleteEvent(index);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "2rem auto" }}>
      <h2>{editIndex !== null ? "Edit Event" : "Add Event"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Event Name"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <input
          name="date"
          type="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <input
          name="time"
          type="time"
          value={formData.time}
          onChange={handleChange}
          required
        />
        <input
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Event Description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <button type="submit" style={{ marginTop: "1rem" }}>
          {editIndex !== null ? "Update Event" : "Add Event"}
        </button>
      </form>

      <h3 style={{ marginTop: "2rem" }}>Your Events</h3>
      {events.length === 0 ? (
        <p>No events to show</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {events.map((event, index) => (
            <li
              key={index}
              style={{
                border: "1px solid #ccc",
                padding: "1rem",
                marginBottom: "1rem",
                borderRadius: "8px",
              }}
            >
              <strong>{event.title}</strong>
              <div>Date: {event.date}</div>
              <div>Time: {event.time}</div>
              <div>Location: {event.location}</div>
              <div>Description: {event.description}</div>
              <button onClick={() => handleEdit(index)} style={{ marginRight: "0.5rem" }}>
                Edit
              </button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default EventsPage;
