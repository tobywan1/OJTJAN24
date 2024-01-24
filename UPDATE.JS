// UpdateDeletePage.js
import React, { useState } from 'react';


const UpdateDeletePage = ({ selectedData, onUpdate, onDelete, confirmationId, setConfirmationId }) => {
  const [updatedData, setUpdatedData] = useState({ ...selectedData });
  const [isUpdateSuccessful, setIsUpdateSuccessful] = useState(null);
  
  const handleUpdate = () => {
    // Validate confirmationId and show error message if needed
    if (confirmationId !== 'toby') {
      alert('Invalid confirmation ID');
      return;
    }

    onUpdate(confirmationId, updatedData); // Pass confirmationId and updatedData
    setIsUpdateSuccessful(true);
  };

  const handleDelete = () => {
    // Validate confirmationId and show error message if needed
    if (confirmationId !== 'toby') {
      alert('Invalid confirmation ID');
      return;
    }

    onDelete(confirmationId); // Pass confirmationId
    setIsUpdateSuccessful(false);
  };

  const handleChange = (fieldName, value) => {
    setUpdatedData({ ...updatedData, [fieldName]: value });
  };

  return (
    <div className='form'>
      <div>
        <h2>Update Data</h2>
        <label>Confirmation ID:</label>
        <input
          type="text"
          value={confirmationId}
          onChange={(e) => setConfirmationId(e.target.value)}
        />

        <label>Expressway:</label>
        <input
          type="text"
          value={updatedData.expressway}
          onChange={(e) => handleChange('expressway', e.target.value)}
        />
        {/* ... Add similar input fields for other properties ... */}
        <button onClick={handleUpdate}>Update</button>

        <h2>Delete Data</h2>
        <p>Are you sure you want to delete this data?</p>
        <button onClick={handleDelete}>Delete</button>

        {/* Display feedback to the user */}
        {isUpdateSuccessful !== null && (
          <p style={{ color: isUpdateSuccessful ? 'green' : 'red' }}>
            {isUpdateSuccessful ? 'Update successful' : 'Delete successful'}
          </p>
        )}
      </div>
    </div>
  );
};

export default UpdateDeletePage;
