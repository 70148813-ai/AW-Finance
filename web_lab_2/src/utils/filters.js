import { containsText } from './stringHelpers.js';

export const mapCourses = (courses) => {
  return courses.map((course) => ({
    ...course,
    displayPrice: `$${course.price}`,
    displayName: course.name.toUpperCase()
  }));
};

export const filterByCategory = (courses, category) => {
  if (!category || category === `all`) return courses;
  return courses.filter((course) => course.category === category);
};

export const filterByStock = (courses, inStock) => {
  return courses.filter((course) => course.inStock === inStock);
};

export const findCourseById = (courses, id) => {
  return courses.find((course) => course.id === id);
};

export const findCourseIndex = (courses, id) => {
  return courses.findIndex((course) => course.id === id);
};

export const hasAvailableCourses = (courses) => {
  return courses.some((course) => course.inStock === true);
};

export const allCoursesAvailable = (courses) => {
  return courses.every((course) => course.inStock === true);
};

export const calculateTotalPrice = (courses) => {
  return courses.reduce((total, course) => total + course.price, 0);
};

export const calculateAveragePrice = (courses) => {
  if (courses.length === 0) return 0;
  const total = calculateTotalPrice(courses);
  return total / courses.length;
};

export const sortByName = (courses, ascending = true) => {
  return [...courses].sort((a, b) => {
    if (ascending) {
      return a.name.localeCompare(b.name);
    }
    return b.name.localeCompare(a.name);
  });
};

export const sortByPrice = (courses, ascending = true) => {
  return [...courses].sort((a, b) => {
    if (ascending) {
      return a.price - b.price;
    }
    return b.price - a.price;
  });
};

export const searchCourses = (courses, query) => {
  if (!query) return courses;
  return courses.filter((course) => 
    containsText(course.name, query) || 
    containsText(course.category, query) ||
    containsText(course.instructor, query)
  );
};

export const forEachCourse = (courses, callback) => {
  courses.forEach(callback);
};

export const getCourseCategories = (courses) => {
  const categories = courses.map((course) => course.category);
  return [...new Set(categories)];
};
