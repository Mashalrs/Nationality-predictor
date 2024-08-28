// src/components/NameInput.js
import React, { useState, useRef, useEffect } from 'react';

const NameInput = ({ onFetchNationality }) => {
  // State to manage the input value (name)
  const [name, setName] = useState('');
  
  // Ref to store reference to the input element
  const inputRef = useRef(null);

  // Effect to focus on the input field when the component mounts
  useEffect(() => {
    inputRef.current.focus(); // Focuses on the input element
  }, []);

  // Handler function to update 'name' state when input value changes
  const handleChange = (e) => {
    setName(e.target.value); // Updates 'name' state with current input value
  };

  // Handler function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents default form submission behavior (page refresh)
    onFetchNationality(name); // Calls parent component's function with 'name' as argument
  };

  // Render the component
  return (
    <form onSubmit={handleSubmit}> {/* Form with handleSubmit function on submit */}
      <input
        type="text"
        ref={inputRef} // Associates inputRef with this input element
        value={name} // Binds input value to 'name' state
        onChange={handleChange} // Calls handleChange on input value change
        placeholder="Enter name" // Placeholder text when input is empty
      />
      <button type="submit">Predict Nationality</button> {/* Submit button */}
    </form>
  );
};

export default NameInput; // Exporting the NameInput component
