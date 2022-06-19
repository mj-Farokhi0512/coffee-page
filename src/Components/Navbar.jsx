import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Styles/navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <Container>
          <ul className="nav-list">
            <li>
              <a href="#">محصولات</a>
            </li>
            <li>
              <a href="#">درباره ما</a>
            </li>
            <li>
              <a href="#">تماس با ما</a>
            </li>
            <li>
              <a href="#">ورود/ثبت نام</a>
            </li>
          </ul>
        </Container>
      </div>
    );
  }
}

export default Navbar;
