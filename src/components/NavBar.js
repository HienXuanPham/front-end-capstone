import axios from "../httpClient.js";
import { UserContext } from "../context/UserContext.js";
import { useContext } from "react";
import { Container, Nav, Navbar, Dropdown } from "react-bootstrap";

const kBaseUrl = process.env.REACT_APP_BACKEND_URL;

function NavBar() {
  const {
    currentUserId,
    currentUserName,
    setCurrentUserId,
    setCurrentUserName,
  } = useContext(UserContext);

  const loggedIn = currentUserId;
  console.log(loggedIn);

  const userLogOut = () => {
    axios.post(`${kBaseUrl}/logout`);

    localStorage.removeItem("userId");
    localStorage.removeItem("userName");
    setCurrentUserId(null);
    setCurrentUserName(null);
  };

  return (
    <>
      <Navbar className="navbar navbar-expand-lg navbar-light bg-light">
        <Container>
          <Navbar.Brand href="/">Journal</Navbar.Brand>
          <Nav>
            {loggedIn === null ? (
              <Nav>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/login">Log In</Nav.Link>
                <Nav.Link href="/signup">Sign Up</Nav.Link>
              </Nav>
            ) : (
              <>
                <Dropdown>
                  <Dropdown.Toggle
                    id="dropdown-button-dark-example1"
                    variant="secondary"
                  >
                    Hi, {currentUserName}
                  </Dropdown.Toggle>
                  <Dropdown.Menu variant="light-dark sm">
                    <Dropdown.Item href="/login" onClick={userLogOut}>
                      Log Out
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
