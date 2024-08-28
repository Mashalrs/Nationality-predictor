// src/components/NationalityResult.js

// Importing React library to define the component
import React from 'react';

// Functional component NationalityResult receives props: nationality
const NationalityResult = ({ nationality, loading, error }) => {
  // Display loading state if data is being fetched
  if (loading) {
    return <p> Loading...</p>
  }

  // Display error message if an error occurred
  if (error) {
    return <p>Error fetching nationality data. Please try again.</p>
  }

  // Conditional rendering based on whether nationality data is available
  if (!nationality) {
    return <p>No nationality data available for this name.</p>
  }

  // Rendering component when nationlity data is available
  return (
    <div>
      <h2>Prediction Results:</h2> {/* Heading for prediction results */}
      <p>Country Name: {nationality}</p>{/* Displaying country name*/}
    </div>
  );
};

export default NationalityResult; //Exporting NationalityResult component