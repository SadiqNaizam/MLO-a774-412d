import React from 'react';
import AuthCard from '../components/Auth/AuthCard';

// Define the structure of login data that AuthCard will pass to onLoginSubmit
interface LoginData {
  username: string;
  password: string;
}

/**
 * LoginPage Component
 * 
 * This page serves as the primary authentication screen for users to log in.
 * It features the AuthCard component, which is centered on the page using a flexbox layout.
 * The overall page layout adheres to the 'AuthPageLayout' concept, ensuring a clean,
 * full-screen background with the login card prominently displayed.
 * 
 * The component handles the submission of login credentials via the AuthCard's 
 * `onLoginSubmit` prop, simulating an API call and providing feedback.
 */
const LoginPage: React.FC = () => {

  /**
   * Handles the login form submission from the AuthCard component.
   * Simulates an asynchronous API call to authenticate the user.
   * 
   * @param data - An object containing the username and password input by the user.
   * @returns A promise that resolves when the login attempt is complete.
   */
  const handleLoginSubmit = async (data: LoginData): Promise<void> => {
    console.log('Login attempt with:', { username: data.username, password: '[REDACTED]' });
    
    // Simulate an API call
    try {
      // In a real-world application, you would make an API request here.
      // e.g., const response = await fetch('/api/login', { method: 'POST', body: JSON.stringify(data) });
      // For demonstration, we simulate a network delay.
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Simulate a successful login
      // Check for mock credentials or simply assume success for this example
      if (data.username) { // Basic check, replace with real validation
        console.log('Login successful (simulated) for user:', data.username);
        // In a real app, you would typically navigate to a dashboard or user-specific page:
        // import { useNavigate } from 'react-router-dom';
        // const navigate = useNavigate();
        // navigate('/dashboard');
        alert(`Login successful! Welcome, ${data.username}.`);
      } else {
        // Simulate a failed login if username is empty (very basic example)
        throw new Error('Username cannot be empty.');
      }

    } catch (error) {
      console.error('Login failed (simulated):', error instanceof Error ? error.message : String(error));
      // Display an error message to the user.
      // This could be a toast notification or an error message component.
      alert('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    // Implements the AuthPageLayout: items-center justify-center h-screen bg-background px-4
    // This div centers the AuthCard component vertically and horizontally on the page.
    <div className="flex items-center justify-center h-screen bg-background px-4">
      <AuthCard 
        onLoginSubmit={handleLoginSubmit}
        signupHref="/signup" // Defines the navigation path for the 'sign up' link
        // initialUsername="user@example.com" // Optionally pre-fill username
        // initialPassword="password123" // Optionally pre-fill password (generally not recommended for security)
      />
    </div>
  );
};

export default LoginPage;
