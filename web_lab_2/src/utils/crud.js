import { coursesDB } from '../database/products.js';
import { findCourseIndex } from './filters.js';

let courses = [...coursesDB];

export const getAllCourses = () => [...courses];

export const getCourseById = (id) => {
  return courses.find((course) => course.id === id);
};

export const createCourse = (courseData) => {
  const newId = courses.length > 0 ? Math.max(...courses.map((c) => c.id)) + 1 : 1;
  const newCourse = {
    id: newId,
    ...courseData,
    inStock: courseData.inStock !== undefined ? courseData.inStock : true
  };
  courses = [...courses, newCourse];
  return newCourse;
};

export const updateCourse = (id, updates) => {
  const index = findCourseIndex(courses, id);
  if (index === -1) return null;
  
  courses = courses.map((course) => 
    course.id === id ? { ...course, ...updates } : course
  );
  
  return courses[index];
};

export const deleteCourse = (id) => {
  const index = findCourseIndex(courses, id);
  if (index === -1) return false;
  
  courses = courses.filter((course) => course.id !== id);
  return true;
};

export const resetCourses = () => {
  courses = [...coursesDB];
};
