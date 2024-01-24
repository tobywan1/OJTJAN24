// UpdatePage.js
import React, { useState, useEffect } from 'react';

const UpdatePage = ({ onUpdate, selectedData, onCancel }) => {
  const [updatedData, setUpdatedData] = useState({ ...selectedData });

  const handleUpdate = () => {
    onUpdate(updatedData);
  };

  const handleChange = (fieldName, value) => {
    setUpdatedData({ ...updatedData, [fieldName]: value });
  };

  useEffect(() => {
    // Reset the form when selectedData changes (e.g., when updating from UpdateDeletePage)
    setUpdatedData({ ...selectedData });
  }, [selectedData]);

  return (
    <div>
      <h2>Update Data</h2>
      <label>Expressway:</label>
      <input
        type="text"
        value={updatedData.expressway}
        onChange={(e) => handleChange('expressway', e.target.value)}
      />
      <label>Entry:</label>
      <input
        type="text"
        value={updatedData.entry}
        onChange={(e) => handleChange('entry', e.target.value)}
      />
      <label>Exit:</label>
      <input
        type="text"
        value={updatedData.exit}
        onChange={(e) => handleChange('exit', e.target.value)}
      />
      <label>Vehicle:</label>
      <input
        type="text"
        value={updatedData.vehicle}
        onChange={(e) => handleChange('vehicle', e.target.value)}
      />
      <label>Vehicle Class:</label>
      <input
        type="text"
        value={updatedData.vehicleclass}
        onChange={(e) => handleChange('vehicleclass', e.target.value)}
      />
      <label>Price:</label>
      <input
        type="text"
        value={updatedData.price}
        onChange={(e) => handleChange('price', e.target.value)}
      />
      
      <button onClick={handleUpdate}>Update</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default UpdatePage;
