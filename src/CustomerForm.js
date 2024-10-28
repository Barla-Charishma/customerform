import React, { useState } from 'react';
import './CustomerForm.css'; // Import the CSS file

const CustomerForm = () => {
  const [formData, setFormData] = useState({
    customerID: '',
    name: '',
    address: '',
    phone: '',
    email: '',
    dateOfBirth: '',
    gender: '',
    nationality: '',
    occupation: '',
    maritalStatus: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Customer Form</h1>
      <div>
        <label>
          Customer ID
          <input type="text" name="customerID" value={formData.customerID} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Name
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Address
          <input type="text" name="address" value={formData.address} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Phone
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Email
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Date of Birth
          <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Gender
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Nationality
          <input type="text" name="nationality" value={formData.nationality} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Occupation
          <input type="text" name="occupation" value={formData.occupation} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Marital Status
          <select name="maritalStatus" value={formData.maritalStatus} onChange={handleChange}>
            <option value="">Select Status</option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Divorced">Divorced</option>
            <option value="Widowed">Widowed</option>
          </select>
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CustomerForm;
