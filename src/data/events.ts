import { Event } from '../types';

// Get current date at midnight for comparison
const currentDate = new Date();
currentDate.setHours(0, 0, 0, 0);

// Helper function to create dates relative to today
const createDate = (dayOffset: number): string => {
  const date = new Date();
  date.setDate(date.getDate() + dayOffset);
  return date.toISOString().split('T')[0];
};

export const events: Event[] = [
  {
    id: '1',
    title: 'Machine Learning Fundamentals',
    description: 'Learn the basics of machine learning algorithms and their applications in real-world scenarios.',
    category: 'Masterclass',
    date: createDate(5),
    time: '10:00',
    duration: '3 hours',
    location: 'Turing Auditorium',
    organizer: 'AI Research Club',
    image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: '2',
    title: 'Hackathon 2025',
    description: 'A 48-hour coding competition to build innovative solutions for campus sustainability challenges.',
    category: 'Competitions',
    date: createDate(15),
    time: '09:00',
    duration: '48 hours',
    location: 'Innovation Hub',
    organizer: 'CS Department',
    image: 'https://images.pexels.com/photos/7102/notes-macbook-study-conference.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: '3',
    title: 'Campus Clean-up Drive',
    description: 'Join us in cleaning up the campus grounds and surrounding areas to promote environmental awareness.',
    category: 'Social Welfare Drives',
    date: createDate(2),
    time: '08:30',
    duration: '4 hours',
    location: 'Campus Main Entrance',
    organizer: 'ECO Club',
    image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: '4',
    title: 'Photography Club Meeting',
    description: 'Weekly meeting to discuss photography techniques and plan for the upcoming exhibition.',
    category: 'Club Meetings',
    date: createDate(1),
    time: '16:00',
    duration: '1.5 hours',
    location: 'Arts Center Room 201',
    organizer: 'Photography Club',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: '5',
    title: 'Web Development Workshop',
    description: 'Hands-on workshop on React.js and modern frontend development practices.',
    category: 'Workshops',
    date: createDate(8),
    time: '14:00',
    duration: '4 hours',
    location: 'Computer Lab 3',
    organizer: 'Web Dev Society',
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: '6',
    title: 'Freshman Orientation',
    description: 'Welcome event for new students with campus tours, activities, and information sessions.',
    category: 'Other Events',
    date: createDate(3),
    time: '09:00',
    duration: '6 hours',
    location: 'University Main Hall',
    organizer: 'Student Affairs Office',
    image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: '7',
    title: 'Data Science Masterclass',
    description: 'Advanced techniques in data analysis and visualization with industry experts.',
    category: 'Masterclass',
    date: createDate(-2), // Past event
    time: '11:00',
    duration: '3 hours',
    location: 'Newton Hall Room 105',
    organizer: 'Data Science Institute',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: '8',
    title: 'Debate Competition',
    description: 'Annual inter-college debate on current technological trends and ethical considerations.',
    category: 'Competitions',
    date: createDate(-5), // Past event
    time: '13:00',
    duration: '5 hours',
    location: 'Debating Chamber',
    organizer: 'Debating Society',
    image: 'https://images.pexels.com/photos/1709003/pexels-photo-1709003.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: '9',
    title: 'Blood Donation Camp',
    description: 'Contribute to saving lives by donating blood. All donations will be sent to local hospitals.',
    category: 'Social Welfare Drives',
    date: createDate(6),
    time: '10:00',
    duration: '8 hours',
    location: 'Medical Center',
    organizer: 'Medical Students Association',
    image: 'https://images.pexels.com/photos/6823533/pexels-photo-6823533.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: '10',
    title: 'Robotics Club Meeting',
    description: 'Discussion on the upcoming robotics competition and progress on current projects.',
    category: 'Club Meetings',
    date: createDate(4),
    time: '17:30',
    duration: '2 hours',
    location: 'Engineering Building Lab 2',
    organizer: 'Robotics Club',
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: '11',
    title: 'UI/UX Design Workshop',
    description: 'Learn principles of user interface and experience design with practical examples.',
    category: 'Workshops',
    date: createDate(12),
    time: '15:00',
    duration: '3 hours',
    location: 'Design Studio',
    organizer: 'Design Club',
    image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: '12',
    title: 'Alumni Networking Event',
    description: 'Connect with successful alumni and learn about career opportunities in tech industries.',
    category: 'Other Events',
    date: createDate(20),
    time: '18:00',
    duration: '3 hours',
    location: 'Grand Hall',
    organizer: 'Alumni Association',
    image: 'https://images.pexels.com/photos/2422293/pexels-photo-2422293.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: '13',
    title: 'Artificial Intelligence in Healthcare',
    description: 'Explore how AI is transforming healthcare delivery and medical research.',
    category: 'Masterclass',
    date: createDate(18),
    time: '13:30',
    duration: '2.5 hours',
    location: 'Medical Sciences Building',
    organizer: 'AI in Medicine Group',
    image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: '14',
    title: 'Coding Challenge',
    description: 'Test your programming skills with algorithmic problems and puzzles.',
    category: 'Competitions',
    date: createDate(-8), // Past event
    time: '10:00',
    duration: '4 hours',
    location: 'Computer Science Department',
    organizer: 'Competitive Programming Club',
    image: 'https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: '15',
    title: 'Food Drive for Local Shelter',
    description: 'Collecting non-perishable food items for donation to the local homeless shelter.',
    category: 'Social Welfare Drives',
    date: createDate(9),
    time: '09:00',
    duration: '7 hours',
    location: 'Student Union Building',
    organizer: 'Community Outreach Club',
    image: 'https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  }
];

// Helper function to determine if an event is upcoming
export const isUpcomingEvent = (event: Event): boolean => {
  const eventDate = new Date(event.date);
  eventDate.setHours(0, 0, 0, 0);
  return eventDate >= currentDate;
};

// Exported lists for convenience
export const upcomingEvents = events.filter(isUpcomingEvent)
  .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

export const pastEvents = events.filter(event => !isUpcomingEvent(event))
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // Most recent first

// Get all unique categories
export const eventCategories: string[] = Array.from(new Set(events.map(event => event.category)));