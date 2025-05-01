export type EventCategory = 
  | 'Masterclass' 
  | 'Competitions' 
  | 'Social Welfare Drives' 
  | 'Club Meetings' 
  | 'Workshops' 
  | 'Other Events';

export interface CustomField {
  name: string;
  label: string;
  type: 'text' | 'number' | 'email' | 'select';
  required: boolean;
  options?: string[]; // For select type fields
}

export interface Event {
  id: string;
  title: string;
  description: string;
  category: EventCategory;
  date: string; // ISO format date string
  time: string; // e.g., "14:00"
  duration: string; // e.g., "2 hours"
  location: string;
  organizer: string;
  image?: string; // URL to event image (optional)
  customFields?: CustomField[]; // Additional registration fields
  capacity?: number; // Optional maximum number of registrants
  registrationDeadline?: string; // ISO format date string
}

export interface Registration {
  eventId: string;
  name: string;
  urnNumber: string;
  collegeEmail: string;
  batch: string;
  customFields: Record<string, string>; // Dynamic fields based on event requirements
}