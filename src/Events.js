// src/Events.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Events = () => {
  const initialEvents = [
    {
      id: 1,
      title: 'Community Prayer Meeting',
      date: '2023-11-15',
      location: 'Main Hall',
      category: 'Religious',
      description: 'Join us for a peaceful evening of prayer and reflection.',
    },
    {
      id: 2,
      title: 'Charity Food Drive',
      date: '2023-11-20',
      location: 'Community Center',
      category: 'Charity',
      description: 'Help us collect food for those in need.',
    },
    {
      id: 3,
      title: 'Interfaith Social Gathering',
      date: '2023-11-25',
      location: 'Park Pavilion',
      category: 'Social',
      description: 'Meet people from different faiths and backgrounds.',
    },
  ];

  const [events, setEvents] = useState(initialEvents);
  const [filterCategory, setFilterCategory] = useState('All');
  const [newEvent, setNewEvent] = useState({
    title: '',
    date: '',
    location: '',
    category: '',
    description: '',
  });
  const [editEventId, setEditEventId] = useState(null);

  const handleFilterChange = (e) => {
    setFilterCategory(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editEventId) {
      // Update existing event
      const updatedEvents = events.map(event =>
        event.id === editEventId ? { ...newEvent, id: editEventId } : event
      );
      setEvents(updatedEvents);
      toast.success('Event updated successfully!');
      setEditEventId(null);
    } else {
      // Add new event
      const eventToAdd = { ...newEvent, id: events.length + 1 };
      setEvents([...events, eventToAdd]);
      toast.success('Event added successfully!');
    }
    setNewEvent({ title: '', date: '', location: '', category: '', description: '' });
  };

  const handleEdit = (event) => {
    setNewEvent(event);
    setEditEventId(event.id);
  };

  const handleDelete = (id) => {
    const updatedEvents = events.filter(event => event.id !== id);
    setEvents(updatedEvents);
    toast.success('Event deleted successfully!');
  };

  const filteredEvents = filterCategory === 'All'
    ? events
    : events.filter(event => event.category === filterCategory);

  return (
    <div className="events-page">
      <ToastContainer position="top-right" autoClose={3000} />
      <header className="header">
        <div className="logo">CommunionHub</div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/events">Events</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>

      <h1>Event Listing</h1>

      <div className="filter-section">
        <label htmlFor="category-filter">Filter by Category:</label>
        <select id="category-filter" value={filterCategory} onChange={handleFilterChange}>
          <option value="All">All</option>
          <option value="Religious">Religious</option>
          <option value="Social">Social</option>
          <option value="Charity">Charity</option>
        </select>
      </div>

      <div className="event-list">
        {filteredEvents.map(event => (
          <motion.div
            key={event.id}
            className="event-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <h2>{event.title}</h2>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Location:</strong> {event.location}</p>
            <p><strong>Category:</strong> {event.category}</p>
            <p><strong>Description:</strong> {event.description}</p>
            <div className="event-actions">
              <button className="edit-button" onClick={() => handleEdit(event)}>Edit</button>
              <button className="delete-button" onClick={() => handleDelete(event.id)}>Delete</button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="add-event-form">
        <h2>{editEventId ? 'Edit Event' : 'Add New Event'}</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={newEvent.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={newEvent.date}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              id="location"
              name="location"
              value={newEvent.location}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="category">Category:</label>
            <select
              id="category"
              name="category"
              value={newEvent.category}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Category</option>
              <option value="Religious">Religious</option>
              <option value="Social">Social</option>
              <option value="Charity">Charity</option>
            </select>
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={newEvent.description}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" className="submit-button">
            {editEventId ? 'Update Event' : 'Add Event'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Events;