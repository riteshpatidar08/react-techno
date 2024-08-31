import React from 'react';
import { useNavigate } from 'react-router-dom';

function Services() {

  const navigate = useNavigate();

  // -1 value always navigate it to you the previous page...
  //navigate takes the path of the page you want to navigate to for eg for aboutus if you path is '/aboutus' then you will pass navigate('/aboutus')...

  const handleClick = () => {
    navigate(-1);     
  };

  return (
    <div>
      services
      <button
        onClick={handleClick}
        className="bg-blue-500 px-8 rounded-md text-white py-2 m-3"
      >
        Back
      </button>
    </div>
  );
}

export default Services;
