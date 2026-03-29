# AW Finance - Interactive Finance Education Platform

A fully interactive, data-driven web application for professional finance education. This project extends a static website into a dynamic platform with course management, search/filter functionality, theme persistence, and comprehensive JavaScript features.

## Project Description

AW Finance is a modern finance education platform that allows users to browse courses, search and filter content, and provides an admin panel for dynamic course management. The application demonstrates advanced JavaScript concepts including array methods, string manipulation, CRUD operations, and localStorage persistence.

## File Structure

\`\`\`
web_lab_2/
├── index.html
├── script.js
├── README.md
├── assets/
│   ├── audios/
│   ├── images/
│   ├── pdfs/
│   └── videos/
└── src/
    ├── about/
    │   └── about.html
    ├── contact/
    │   └── contact.html
    ├── signin/
    │   └── signin.html
    ├── signup/
    │   └── signup.html
    ├── pages/
    │   └── home.html
    ├── constants/
    │   └── themeConstants.js
    ├── database/
    │   └── products.js
    └── utils/
        ├── crud.js
        ├── filters.js
        ├── stringHelpers.js
        ├── theme.js
        └── shared.js
\`\`\`

## How to Run Locally

1. Clone or download this repository
2. Open the project folder in your code editor
3. Use a local development server to run the project:
   - Using VS Code: Install Live Server extension and click "Go Live"
   - Using Python: Run \`python -m http.server 8000\` in the project directory
   - Using Node.js: Run \`npx serve\` in the project directory
4. Open your browser and navigate to \`http://localhost:8000\` (or the port shown)
5. The application will load with the home page displaying all courses

## JavaScript Features Used

### Array Methods (filters.js)
- \`map\` - Transform course data with display properties
- \`filter\` - Filter courses by category, stock status, and search query
- \`find\` - Locate specific course by ID
- \`findIndex\` - Get index of course in array
- \`some\` - Check if any courses are available
- \`every\` - Verify all courses meet criteria
- \`reduce\` - Calculate total and average prices
- \`sort\` - Sort courses by name or price
- \`forEach\` - Iterate through courses for rendering

### String Methods (stringHelpers.js)
- \`toUpperCase\` - Convert text to uppercase
- \`toLowerCase\` - Convert text to lowercase
- \`trim\` - Remove whitespace from strings
- \`includes\` - Search for text within strings
- \`startsWith\` - Check string prefix
- \`endsWith\` - Check string suffix
- \`split\` - Split strings into arrays
- \`join\` - Join array elements into strings
- \`replace\` - Replace text in strings
- \`slice\` - Extract portions of strings
- \`padStart\` - Pad string from start
- \`padEnd\` - Pad string from end

### Object CRUD Operations
- CREATE - Add new properties to course objects dynamically
- READ - Access and display object properties
- UPDATE - Modify existing object properties
- DELETE - Remove properties from objects

### Array CRUD Operations (crud.js)
- CREATE - Add new courses to the database
- READ - Retrieve all courses or specific course by ID
- UPDATE - Modify existing course data
- DELETE - Remove courses from the database

### DOM Manipulation
- Dynamic rendering of courses grid
- Real-time search and filter updates
- Admin panel for course management
- Navbar and Footer injection via JavaScript

### Theme Toggle with localStorage
- Light/Dark theme switching
- Theme preference saved to localStorage
- Automatic theme application on page load
- Persistent across all pages

### ES6+ Features
- Arrow functions throughout
- Template literals for all strings
- const for immutable references
- let for reassignable values
- Module imports/exports
- Destructuring
- Spread operator

## Student Information

- Student Name: Hafiza Ayesha Waheed
- Student ID: 12345678
- Course: Web Engineering (BSCS Spring 2026)
- University: University of Lahore
- Assignment: Assignment 02

## Features Implemented

1. Five HTML pages with shared navigation
2. Semantic HTML5 tags (header, main, section, article, footer, aside, nav)
3. JavaScript-injected Navbar and Footer
4. Course database with 8 courses
5. Full CRUD operations on courses
6. Live search functionality
7. Category filtering
8. Sort by name and price (ascending/descending)
9. Admin panel with dynamic field creation
10. Theme toggle with localStorage persistence
11. All array methods demonstrated
12. All string methods demonstrated
13. Object CRUD with dynamic property management
14. No emojis in UI
15. No CSS gradients
16. Modern ES6+ JavaScript only
