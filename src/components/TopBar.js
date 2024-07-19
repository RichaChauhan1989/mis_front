import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function TopBar() {
  const username = localStorage.getItem('username');
  const isLoggedIn = !!username;
  const handleLogout = () => {
    // Clear user session (e.g., remove token, username, etc.)
    // Redirect to the login page
       // Clear local storage
    window.localStorage.clear();
    window.location.href = '/home';
  };
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      {/*<Container fluid>*/}
        <Navbar.Brand href="#">MIS</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
            <Nav
             className="me-auto my-2 my-lg-0"
             style={{ maxHeight: '100px' }}
             navbarScroll>
            {/*/>*/}
            <Nav.Link href="/">Home</Nav.Link>
                {isLoggedIn ? (
                    <>
                        {username.trim() ? (
                        <>
                            <Nav.Link href="#">{username}</Nav.Link>
                            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                        </>
                        ) : null}
                    </>
                ) : (
                    <>
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/register">Register</Nav.Link>
                    </>
                )}

            {/*{username.trim() ? null : <Nav.Link href="/login">Login</Nav.Link>}*/}
            {/*{username.trim() ? null : <Nav.Link href="/register">Register</Nav.Link>}*/}

           </Nav>
        </Navbar.Collapse>

    </Navbar>
  );
}

export default TopBar;