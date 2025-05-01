import React from 'react';
import { Calendar, Clock, MapPin, User } from 'lucide-react';
import { Event } from '../types';
import { format } from 'date-fns';

// Map categories to background colors
const categoryColors: Record<string, string> = {
  'Masterclass': 'bg-purple-100 text-purple-800',
  'Competitions': 'bg-blue-100 text-blue-800',
  'Social Welfare Drives': 'bg-green-100 text-green-800', 
  'Club Meetings': 'bg-yellow-100 text-yellow-800',
  'Workshops': 'bg-orange-100 text-orange-800',
  'Other Events': 'bg-gray-100 text-gray-800',
};

interface EventCardProps {
  event: Event;
  onClick: () => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, onClick }) => {
  // Format the date to be more readable
  const formattedDate = format(new Date(event.date), 'EEEE, MMMM do, yyyy');
  
  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-100 cursor-pointer"
      onClick={onClick}
    >
      {event.image && (
        <div className="h-48 overflow-hidden">
          <img 
            src={event.image} 
            alt={event.title} 
            className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
          />
        </div>
      )}
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[event.category]}`}>
            {event.category}
          </span>
          
          <div className="flex items-center text-gray-500 text-sm">
            <Calendar size={14} className="mr-1" />
            <span>{formattedDate}</span>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{event.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{event.description}</p>
        
        <div className="border-t border-gray-100 pt-4 mt-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center text-gray-600 text-sm">
              <Clock size={14} className="mr-2 text-gray-400" />
              <span>{event.time} • {event.duration}</span>
            </div>
            
            <div className="flex items-center text-gray-600 text-sm">
              <MapPin size={14} className="mr-2 text-gray-400" />
              <span className="truncate">{event.location}</span>
            </div>
            
            <div className="flex items-center text-gray-600 text-sm col-span-2">
              <User size={14} className="mr-2 text-gray-400" />
              <span>{event.organizer}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;