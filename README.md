# Nationality Predictor Application🌍

## Project Overview
This project is a Nationality Predictor application built using React. It allows users to input a name and predicts the most likely nationality associated with that name using the Nationalize.io API. The application provides a simple and intuitive interface for users to interact with and view the prediction results.

## Features
+ Name Input: Users can enter a name into an input field.
+ Nationality Prediction: The application fetches and displays the predicted nationality for the entered name.
+ Loading State: Displays a loading message while fetching data from the API.
+ Error Handling: Shows an error message if there's an issue with the API request.
+ Restart Functionality: Allows users to clear the current prediction and start over.
+ Responsive Design: Ensures the application is usable on different screen sizes.

## Achievements 
+ API Integration: Successfully integrates with the Nationalize.io API to fetch nationality predictions.
+ State Management: Utilizes React's useState hook to manage application state effectively.
+ Component-Based Architecture: Demonstrates the use of React components (App, NameInput, and NationalityResult) to create a modular and maintainable codebase.
+ Error Handling: Implements error handling to provide feedback on API request failures.
+ User Experience: Focuses on user experience with features like input auto-focus and clear feedback on prediction results.

## Components
+ App.js
    + Main component that manages the application state and contains the logic for fetching nationality data.
    + Renders the NameInput and NationalityResult components.
    + Handles the restart functionality.

+ NameInput.js
    + Manages the input field for entering names.
    + Implements auto-focus on the input field when the component mounts.
    + Handles form submission to trigger the nationality prediction.
    
+ NationalityResult.js
    + Displays the prediction results, loading state, or error messages.
    + Conditionally renders different content based on the current state of the prediction process.

## Technologies Used
+ React: A JavaScript library for building user interfaces, utilized for component-based development.
+ JavaScript: The core programming language used to create the functionality of the application.
+ Fetch API: Used for making HTTP requests to the Nationalize.io API.
+ CSS: Used for styling the components (assumed, as App.css is imported).
