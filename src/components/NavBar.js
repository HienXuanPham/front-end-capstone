import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useAuth, logout } from "../auth.js";

// const userLoggedIn = () => {
//   return (
//     <Nav className="me-auto">
//       <Nav.Link href="/">Home</Nav.Link>
//       <Nav.Link
//         href="/login"
//         onClick={() => {
//           logout();
//         }}
//       >
//         Log Out
//       </Nav.Link>
//     </Nav>
//   );
// };

// const userLoggedOut = () => {
//   return (
//     <Nav className="me-auto">
//       <Nav.Link href="/">Home</Nav.Link>
//       <Nav.Link href="/login">Log In</Nav.Link>
//       <Nav.Link href="/signup">Sign Up</Nav.Link>
//     </Nav>
//   );
// };

function NavBar() {
  //const [logged] = useAuth();
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Journal</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/login">Log In</Nav.Link>
            <Nav.Link href="/signup">Sign Up</Nav.Link>
            <Nav.Link href="/login" onClick={() => logout()}>
              Log Out
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
