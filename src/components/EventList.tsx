import React, { useState } from 'react';
import EventCard from './EventCard';
import EventModal from './EventModal';
import CategoryFilter from './CategoryFilter';
import { Event } from '../types';
import { upcomingEvents, pastEvents } from '../data/events';
import { Search } from 'lucide-react';

const EventList: React.FC = () => {
  const [showPastEvents, setShowPastEvents] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  // Choose which events to display based on toggle state
  const eventsToDisplay = showPastEvents ? pastEvents : upcomingEvents;

  // Apply category filter if selected
  const filteredEvents = selectedCategory 
    ? eventsToDisplay.filter(event => event.category === selectedCategory)
    : eventsToDisplay;

  // Apply search filter
  const searchedEvents = searchQuery 
    ? filteredEvents.filter(event => 
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.organizer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredEvents;

  // Function to render the event list or a message if empty
  const renderEventList = (events: Event[]) => {
    if (events.length === 0) {
      return (
        <div className="flex flex-col items-center justify-center py-12 text-center bg-gray-50 rounded-lg">
          <svg 
            className="w-16 h-16 text-gray-400 mb-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            ></path>
          </svg>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No events found</h3>
          <p className="text-gray-600 max-w-md">
            {selectedCategory 
              ? `There are no ${showPastEvents ? 'past' : 'upcoming'} events in the "${selectedCategory}" category.`
              : `There are no ${showPastEvents ? 'past' : 'upcoming'} events.`}
          </p>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map(event => (
          <EventCard 
            key={event.id} 
            event={event} 
            onClick={() => setSelectedEvent(event)}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="mb-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {showPastEvents ? 'Past Events' : 'Upcoming Events'}
        </h1>
        <p className="text-gray-600">
          {showPastEvents 
            ? 'Browse past events at Newton School of Technology' 
            : 'Discover upcoming events at Newton School of Technology'}
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        {/* Search input */}
        <div className="relative w-full md:w-auto md:min-w-[260px]">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Search events..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Toggle for past/upcoming events */}
        <div className="flex items-center">
          <label htmlFor="past-events-toggle" className="mr-3 text-sm font-medium text-gray-700">
            {showPastEvents ? 'View Upcoming Events' : 'View Past Events'}
          </label>
          <div className="relative inline-block w-12 align-middle select-none">
            <input 
              type="checkbox" 
              name="past-events-toggle" 
              id="past-events-toggle" 
              className="sr-only peer"
              checked={showPastEvents}
              onChange={() => setShowPastEvents(!showPastEvents)}
            />
            <div className="block h-6 bg-gray-300 rounded-full w-12 peer-checked:bg-indigo-600 transition-colors"></div>
            <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-6"></div>
          </div>
        </div>
      </div>

      {/* Category filters */}
      <CategoryFilter 
        selectedCategory={selectedCategory} 
        onCategoryChange={setSelectedCategory} 
      />

      {/* Event list */}
      {renderEventList(searchedEvents)}

      {/* Event Modal */}
      {selectedEvent && (
        <EventModal 
          event={selectedEvent} 
          onClose={() => setSelectedEvent(null)} 
        />
      )}
    </div>
  );
};

export default EventList;