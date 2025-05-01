import React, { useState } from 'react';
import { EventCategory, Event, CustomField } from '../types';
import { eventCategories } from '../data/events';
import EventCard from './EventCard';

interface CustomFieldInput {
  label: string;
  type: 'text' | 'number' | 'email' | 'select';
  required: boolean;
  options?: string;
}

const EventForm: React.FC = () => {
  const [formData, setFormData] = useState<Omit<Event, 'id'>>({
    title: '',
    description: '',
    category: 'Workshops',
    date: new Date().toISOString().split('T')[0],
    time: '12:00',
    duration: '1 hour',
    location: '',
    organizer: '',
    image: 'https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    capacity: undefined,
    registrationDeadline: undefined,
    customFields: []
  });

  const [customFieldInput, setCustomFieldInput] = useState<CustomFieldInput>({
    label: '',
    type: 'text',
    required: false,
    options: ''
  });

  // Create a preview event by adding a temporary ID
  const previewEvent: Event = {
    ...formData,
    id: 'preview'
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCustomFieldChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement;
      setCustomFieldInput(prev => ({
        ...prev,
        [name]: target.checked
      }));
    } else {
      setCustomFieldInput(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const addCustomField = () => {
    if (!customFieldInput.label) return;

    const newField: CustomField = {
      name: customFieldInput.label.toLowerCase().replace(/\s+/g, '_'),
      label: customFieldInput.label,
      type: customFieldInput.type,
      required: customFieldInput.required,
      options: customFieldInput.type === 'select' ? customFieldInput.options?.split(',').map(o => o.trim()) : undefined
    };

    setFormData(prev => ({
      ...prev,
      customFields: [...(prev.customFields || []), newField]
    }));

    setCustomFieldInput({
      label: '',
      type: 'text',
      required: false,
      options: ''
    });
  };

  const removeCustomField = (index: number) => {
    setFormData(prev => ({
      ...prev,
      customFields: prev.customFields?.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Event submission feature would be implemented in a full version. This is just a preview demonstration.');
  };

  return (
    <div className="mb-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Submit an Event</h1>
        <p className="text-gray-600">
          Fill out the form below to submit a new event for approval.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Event Form */}
        <div>
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="mb-4">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                Event Title *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Enter event title"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Description *
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Describe your event"
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                  Category *
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                >
                  {eventCategories.map(category => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                  Date *
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                  Time *
                </label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-1">
                  Duration *
                </label>
                <input
                  type="text"
                  id="duration"
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                  placeholder="e.g., 2 hours"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                Location *
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                placeholder="Enter event location"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="organizer" className="block text-sm font-medium text-gray-700 mb-1">
                Organizer *
              </label>
              <input
                type="text"
                id="organizer"
                name="organizer"
                value={formData.organizer}
                onChange={handleInputChange}
                placeholder="Enter organizing club/department"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="capacity" className="block text-sm font-medium text-gray-700 mb-1">
                  Capacity (optional)
                </label>
                <input
                  type="number"
                  id="capacity"
                  name="capacity"
                  value={formData.capacity || ''}
                  onChange={handleInputChange}
                  placeholder="Maximum participants"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="registrationDeadline" className="block text-sm font-medium text-gray-700 mb-1">
                  Registration Deadline (optional)
                </label>
                <input
                  type="date"
                  id="registrationDeadline"
                  name="registrationDeadline"
                  value={formData.registrationDeadline || ''}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4 mt-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Custom Registration Fields</h3>
              
              <div className="space-y-4 mb-4">
                {formData.customFields?.map((field, index) => (
                  <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-md">
                    <div>
                      <span className="font-medium">{field.label}</span>
                      <span className="text-sm text-gray-500 ml-2">
                        ({field.type}{field.required ? ', required' : ''})
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeCustomField(index)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <div>
                  <label htmlFor="customFieldLabel" className="block text-sm font-medium text-gray-700 mb-1">
                    Field Label
                  </label>
                  <input
                    type="text"
                    id="customFieldLabel"
                    name="label"
                    value={customFieldInput.label}
                    onChange={handleCustomFieldChange}
                    placeholder="e.g., T-Shirt Size"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="customFieldType" className="block text-sm font-medium text-gray-700 mb-1">
                      Field Type
                    </label>
                    <select
                      id="customFieldType"
                      name="type"
                      value={customFieldInput.type}
                      onChange={handleCustomFieldChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      <option value="text">Text</option>
                      <option value="number">Number</option>
                      <option value="email">Email</option>
                      <option value="select">Select</option>
                    </select>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="customFieldRequired"
                      name="required"
                      checked={customFieldInput.required}
                      onChange={handleCustomFieldChange}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label htmlFor="customFieldRequired" className="ml-2 block text-sm text-gray-900">
                      Required field
                    </label>
                  </div>
                </div>

                {customFieldInput.type === 'select' && (
                  <div>
                    <label htmlFor="customFieldOptions" className="block text-sm font-medium text-gray-700 mb-1">
                      Options (comma-separated)
                    </label>
                    <input
                      type="text"
                      id="customFieldOptions"
                      name="options"
                      value={customFieldInput.options}
                      onChange={handleCustomFieldChange}
                      placeholder="e.g., Small, Medium, Large, XL"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                )}

                <button
                  type="button"
                  onClick={addCustomField}
                  className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  Add Custom Field
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-6 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Submit Event
            </button>
          </form>
        </div>

        {/* Live Preview */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Live Preview</h2>
          <div className="bg-gray-50 p-6 rounded-lg border border-dashed border-gray-300">
            <EventCard event={previewEvent} onClick={() => {}} />
          </div>
          <div className="mt-4 text-sm text-gray-500">
            <p>This is a preview of how your event will appear on the calendar. Fill out the form to see the preview update in real-time.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventForm;