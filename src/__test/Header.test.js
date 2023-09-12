import { render, fireEvent, screen } from "@testing-library/react";
import Header from "../components/Header";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';

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
describe("Header", () => {
  it("should render the header correctly", () => {
    render(
      <Provider store={store}>
           <BrowserRouter>
       <Header />
      </BrowserRouter>
      </Provider>
     
     
    );
    // const logo = screen.getByText((content, node) => {
    //   return content.includes('logo') && node.nodeName === 'H1';
    // });
    // expect(logo).toBeInTheDocument();
    expect(screen.getByAltText("logo")).toBeInTheDocument();
  });
  // it("should show the user's name and email when signed in", () => {
  //   const user = {
  //     displayName: "John Doe",
  //     email: "john.doe@example.com",
  //   };
  //   render(<Header user={user} />);
  //   expect(screen.getByText("Welcome, John Doe")).toBeInTheDocument();
  //   expect(screen.getByText("john.doe@example.com")).toBeInTheDocument();
  // });
  // it("should show a sign out button when signed in", () => {
  //   const user = {
  //     displayName: "John Doe",
  //     email: "john.doe@example.com",
  //   };
  //   render(<Header user={user} />);
  //   expect(screen.getByText("Sign Out")).toBeInTheDocument();
  // });
  // it("should redirect to the login page when signed out", () => {
  //   const {  history } = render(<Header />);
  //   fireEvent.click(screen.getByText("Sign Out"));
  //   expect(history.location.pathname).toBe("/");
  // });
});