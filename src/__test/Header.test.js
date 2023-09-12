import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Header from '../components/Header';

// Create a mock Redux store
const mockStore = configureStore([]);
const initialState = {
  user: {
    uid: 'testUid',
    email: 'test@example.com',
    displayName: 'Test User',
    photoURL: 'test-avatar.jpg',
  },
};
const store = mockStore(initialState);

// Mock the Firebase functions used in the component
jest.mock('firebase/auth', () => ({
  getAuth: jest.fn(),
  signOut: jest.fn(),
  onAuthStateChanged: jest.fn(),
}));
const mockSignOut = require('firebase/auth').signOut;
const mockOnAuthStateChanged = require('firebase/auth').onAuthStateChanged;

describe('Header component', () => {
 
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );
  

  it('renders the logo', () => {
    const logo = screen.getByAltText('');
    expect(logo).toBeInTheDocument();
  });

  it('renders user information and sign out button when a user is logged in', () => {
    const welcomeMessage = screen.getByText('Welcome, Test User');
    const avatar = screen.getByAltText('User Avatar');
    const signOutButton = screen.getByText('Sign Out');

    expect(welcomeMessage).toBeInTheDocument();
    expect(avatar).toBeInTheDocument();
    expect(signOutButton).toBeInTheDocument();
  });

  // it('calls the signOut function when the Sign Out button is clicked', () => {
  //   const signOutButton = screen.getByText('Sign Out');
  //   fireEvent.click(signOutButton);

  //   expect(mockSignOut).toHaveBeenCalled();
  // });

  // You can add more test cases for various scenarios as needed
});
