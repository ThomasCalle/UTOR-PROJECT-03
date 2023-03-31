// import React, { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { Navbar, Nav, Container, Modal, Tab } from "react-bootstrap";

// import Signup from "./Signup";
// import Login from "./Login";
// import Auth from "../utils/auth";

// const AppNavbar = () => {
//   // set modal display state
//   const [showModal, setShowModal] = useState(false);

//   return (
//     <>
//       <Navbar className="navbar navbar-expand-lg navbar-dark bg-dark">
//         <Container fluid>
//           <Navbar.Brand className="navbar-brand fs-2" as={Link} to="/">
//             JDT EventWorks
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="navbar" />
//           <Navbar.Collapse id="navbar" className="d-flex flex-row-reverse">
//             <Nav className="ml-auto d-flex">
//               <Nav.Link as={Link} to="/">
//                 Home
//               </Nav.Link>
//               {/* if user is logged in show users events and logout */}
//               {Auth.loggedIn() ? (
//                 <>
//                   <Nav.Link as={Link} to="/myEvents">
//                     {console.log("navbar run myEvents")}
//                     My Events
//                   </Nav.Link>
//                   <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
//                 </>
//               ) : (
//                 <Nav.Link onClick={() => setShowModal(true)}>
//                   Login/Sign Up
//                 </Nav.Link>
//               )}
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//         {/* <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button> */}
//       </Navbar>

//       {/* set up Modal (login/signup popups) */}
//       <Modal
//         size="lg"
//         show={showModal}
//         onHide={() => setShowModal(false)}
//         aria-labelledby="signup-modal"
//       >
//         {/* tab container to do either signup or login component */}
//         <Tab.Container defaultActiveKey="login">
//           <Modal.Header closeButton>
//             <Modal.Title id="signup-modal">
//               <Nav variant="pills">
//                 <Nav.Item>
//                   <Nav.Link eventKey="login">Login</Nav.Link>
//                 </Nav.Item>
//                 <Nav.Item>
//                   <Nav.Link eventKey="signup">Sign Up</Nav.Link>
//                 </Nav.Item>
//               </Nav>
//             </Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <Tab.Content>
//               <Tab.Pane eventKey="login">
//                 <Login handleModalClose={() => setShowModal(false)} />
//               </Tab.Pane>
//               <Tab.Pane eventKey="signup">
//                 <Signup handleModalClose={() => setShowModal(false)} />
//               </Tab.Pane>
//             </Tab.Content>
//           </Modal.Body>
//         </Tab.Container>
//       </Modal>
//     </>
//   );
// };

// export default AppNavbar;

import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav, Container, Modal, Tab } from "react-bootstrap";

import Signup from "./Signup";
import Login from "./Login";
import Auth from "../utils/auth";

const AppNavbar = () => {
  // set modal display state
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Container fluid>
          <Navbar.Brand className="navbar-brand fs-2" as={Link} to="/">
            JDT EventWorks
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar" />
          <Navbar.Collapse id="navbar" className="d-flex flex-row-reverse">
            <Nav className="ml-auto d-flex">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              {/* Add a link to all events */}
              <Nav.Link as={Link} to="/allevents">
                All Events
              </Nav.Link>
              {/* if user is logged in show users events and logout */}
              {Auth.loggedIn() ? (
                <>
                  <Nav.Link as={Link} to="/myEvents">
                    {console.log("navbar run myEvents")}
                    My Events
                  </Nav.Link>
                  <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                </>
              ) : (
                <Nav.Link onClick={() => setShowModal(true)}>
                  Login/Sign Up
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
      </Navbar>

      {/* set up Modal (login/signup popups) */}
      <Modal
        size="lg"
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby="signup-modal"
      >
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey="login">
          <Modal.Header closeButton>
            <Modal.Title id="signup-modal">
              <Nav variant="pills">
                <Nav.Item>
                  <Nav.Link eventKey="login">Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="signup">Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey="login">
                <Login handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey="signup">
                <Signup handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
  );
};

export default AppNavbar;