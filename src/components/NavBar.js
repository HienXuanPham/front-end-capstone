import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import axios from "../httpClient.js";
import { UserContext } from "../UserContext.js";
import { useContext } from "react";

const kBaseUrl = process.env.REACT_APP_BACKEND_URL;

function NavBar() {
  const { currentUserId, setCurrentUserId } = useContext(UserContext);

  const loggedIn = currentUserId;
  console.log(loggedIn);

  const userLogOut = () => {
    axios.post(`${kBaseUrl}/logout`);

    localStorage.removeItem("userId");
    setCurrentUserId(null);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Journal</Navbar.Brand>
          <Nav className="me-auto">
            {loggedIn === null ? (
              <>
                <>
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/login">Log In</Nav.Link>
                  <Nav.Link href="/signup">Sign Up</Nav.Link>
                </>
              </>
            ) : (
              <Nav.Link href="/login" onClick={userLogOut}>
                Log Out
              </Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
