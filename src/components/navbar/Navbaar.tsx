import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { HiOutlineRefresh } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";
import "./navbar.css";
const Navbaar = () => {
  return (
    <>
      <Navbar className="navbaarmain" expand="lg">
        <Container>
          <div className="brandnamemain">
            <div className="brandname">
              <span className="yamak">Yamak</span>
              <span className="ai">.ai</span>
            </div>
          </div>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <div className="navtxt">Home</div>
              <div className="navtxt">Marketing</div>
              <div className="navtxt">Social Media</div>
              <div className="navtxt">Sales Copy </div>
              <div className="navtxt">Blogs</div>
              <div className="navtxt">Others</div>
              <div className="refreshicon">
                <HiOutlineRefresh size="20px" color="#414756" />
              </div>

              <div className="refreshicontwo">
                <FaUserCircle size="26px" color="#7fc3f9" />
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbaar;
