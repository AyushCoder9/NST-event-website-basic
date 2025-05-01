import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import EventList from './components/EventList';
import EventForm from './components/EventForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<EventList />} />
          <Route path="submit" element={<EventForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;