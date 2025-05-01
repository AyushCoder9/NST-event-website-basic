import React, { useState } from 'react';
import { Event, Registration } from '../types';

interface EventRegistrationFormProps {
  event: Event;
  onClose: () => void;
}

const EventRegistrationForm: React.FC<EventRegistrationFormProps> = ({ event, onClose }) => {
  const [formData, setFormData] = useState<Partial<Registration>>({
    eventId: event.id,
    name: '',
    urnNumber: '',
    collegeEmail: '',
    batch: '',
    customFields: {},
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name.startsWith('custom_')) {
      setFormData(prev => ({
        ...prev,
        customFields: {
          ...prev.customFields,
          [name.replace('custom_', '')]: value,
        },
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the registration data to a backend
    console.log('Registration submitted:', formData);
    alert('Registration submitted successfully!');
    onClose();
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Register for {event.title}</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label htmlFor="urnNumber" className="block text-sm font-medium text-gray-700">
            URN Number *
          </label>
          <input
            type="text"
            id="urnNumber"
            name="urnNumber"
            required
            value={formData.urnNumber}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label htmlFor="collegeEmail" className="block text-sm font-medium text-gray-700">
            College Email *
          </label>
          <input
            type="email"
            id="collegeEmail"
            name="collegeEmail"
            required
            value={formData.collegeEmail}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label htmlFor="batch" className="block text-sm font-medium text-gray-700">
            Batch *
          </label>
          <input
            type="text"
            id="batch"
            name="batch"
            required
            value={formData.batch}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        {event.customFields?.map(field => (
          <div key={field.name}>
            <label htmlFor={`custom_${field.name}`} className="block text-sm font-medium text-gray-700">
              {field.label} {field.required ? '*' : ''}
            </label>
            {field.type === 'select' ? (
              <select
                id={`custom_${field.name}`}
                name={`custom_${field.name}`}
                required={field.required}
                value={formData.customFields?.[field.name] || ''}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              >
                <option value="">Select an option</option>
                {field.options?.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            ) : (
              <input
                type={field.type}
                id={`custom_${field.name}`}
                name={`custom_${field.name}`}
                required={field.required}
                value={formData.customFields?.[field.name] || ''}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            )}
          </div>
        ))}

        <div className="flex gap-4">
          <button
            type="submit"
            className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Submit Registration
          </button>
          <button
            type="button"
            onClick={onClose}
            className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EventRegistrationForm;