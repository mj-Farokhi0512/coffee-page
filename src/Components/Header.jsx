import { Container } from "react-bootstrap";
import "./Styles/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <div className="header">
      <div className="banner">
        <Container>
          <h1>کافه چی</h1>
        </Container>
      </div>
      <div className="search">
        <h4>جستجوی جدیدترین،پرفروش ترین و محبوبت ترین محصولات</h4>
        <form>
          <input
            type="search"
            name="search"
            placeholder="جستجو"
            className="search-input"
          />
        </form>
      </div>
    </div>
  );
}

export default Header;
