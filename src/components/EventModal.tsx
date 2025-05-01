import React from 'react';
import { X } from 'lucide-react';
import { Event } from '../types';
import EventRegistrationForm from './EventRegistrationForm';
import { format } from 'date-fns';

interface EventModalProps {
  event: Event;
  onClose: () => void;
}

const EventModal: React.FC<EventModalProps> = ({ event, onClose }) => {
  const [showRegistration, setShowRegistration] = React.useState(false);
  const formattedDate = format(new Date(event.date), 'EEEE, MMMM do, yyyy');

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center">
      <div className="relative bg-white w-full max-w-4xl rounded-lg shadow-xl mx-4">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <X size={24} />
        </button>

        <div className="p-6">
          {!showRegistration ? (
            <div className="space-y-6">
              {event.image && (
                <div className="h-64 overflow-hidden rounded-lg">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                  {
                    'Masterclass': 'bg-purple-100 text-purple-800',
                    'Competitions': 'bg-blue-100 text-blue-800',
                    'Social Welfare Drives': 'bg-green-100 text-green-800',
                    'Club Meetings': 'bg-yellow-100 text-yellow-800',
                    'Workshops': 'bg-orange-100 text-orange-800',
                    'Other Events': 'bg-gray-100 text-gray-800',
                  }[event.category]
                }`}>
                  {event.category}
                </span>
              </div>

              <h2 className="text-3xl font-bold text-gray-900">{event.title}</h2>
              
              <p className="text-gray-600 text-lg">{event.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Date & Time</h3>
                    <p className="text-gray-900">{formattedDate} at {event.time}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Duration</h3>
                    <p className="text-gray-900">{event.duration}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Location</h3>
                    <p className="text-gray-900">{event.location}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Organizer</h3>
                    <p className="text-gray-900">{event.organizer}</p>
                  </div>
                  
                  {event.capacity && (
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Capacity</h3>
                      <p className="text-gray-900">{event.capacity} participants</p>
                    </div>
                  )}
                  
                  {event.registrationDeadline && (
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Registration Deadline</h3>
                      <p className="text-gray-900">
                        {format(new Date(event.registrationDeadline), 'MMMM do, yyyy')}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <button
                onClick={() => setShowRegistration(true)}
                className="w-full mt-6 bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Register for Event
              </button>
            </div>
          ) : (
            <div>
              <button
                onClick={() => setShowRegistration(false)}
                className="mb-4 text-gray-600 hover:text-gray-800 transition-colors flex items-center"
              >
                <X size={16} className="mr-1" /> Back to Event Details
              </button>
              <EventRegistrationForm event={event} onClose={onClose} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventModal;