export class Menu {
  title?: string;
  icon?: string;
  link?: string;
  color?: string;
}

export class Course {
  id?: number;
  name?: string;
  instructor?: string;
  duration?: number;
}

export const COURSE_DATA: Course[] = [
  { id: 1, name: 'Introduction to Programming', instructor: 'John Doe', duration: 8 },
  { id: 2, name: 'Web Development Fundamentals', instructor: 'Jane Smith', duration: 10 },
  { id: 3, name: 'Data Structures and Algorithms', instructor: 'Alice Johnson', duration: 12 },
  { id: 4, name: 'Database Management', instructor: 'Bob Wilson', duration: 9 },
  { id: 5, name: 'Mobile App Development', instructor: 'Eva Brown', duration: 11 },
  { id: 6, name: 'Machine Learning Basics', instructor: 'Michael Clark', duration: 14 },
  { id: 7, name: 'Software Architecture', instructor: 'Sara White', duration: 10 },
  { id: 8, name: 'JavaScript Frameworks', instructor: 'David Taylor', duration: 8 },
  { id: 9, name: 'Digital Marketing Strategies', instructor: 'Olivia Adams', duration: 7 },
  { id: 10, name: 'Project Management Essentials', instructor: 'Peter Green', duration: 12 },
];
