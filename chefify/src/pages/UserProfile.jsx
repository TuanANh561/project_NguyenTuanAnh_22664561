import React from 'react';
import { Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom'; // Thêm import

const UserProfile = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get('email');

  return (
    <Container>
      <h1>User Profile</h1>
      {email ? (
        <p><strong>Email:</strong> {decodeURIComponent(email)}</p>
      ) : (
        <p>No email provided. Please log in.</p>
      )}
    </Container>
  );
};

export default UserProfile;