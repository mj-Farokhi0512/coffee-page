import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/main.css";

function Main() {
  return (
    <div className="main">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="main-icon">
              <div>
                <div>
                  <img src="Images/Coffee-or-bartender-logo-on-transparent-background-PNG 1.png" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={6}>
            <div className="title1 group">
              <img src="Images/image 3.png" />
              <div className="box-title">
                <h4>سریع و بیرون بر</h4>
                <p>
                  هروقت هر زمان میتوانید <br /> قهوه خود را تهیه کنید
                </p>
              </div>
            </div>
          </Col>
          <Col xs={12} lg={6}>
            <div className="title2 group">
              <img src="Images/image 5.png" />
              <div className="box-title">
                <h4>سرو و فروش انواع قهوه</h4>
                <p>
                  انواع قهوه های آمریکایی ترک
                  <br />
                  عربیکا و روبوستا
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={6}>
            <div className="title3 group">
              <img src="Images/image 4.png" />
              <div className="box-title">
                <h4>سالم و تازه</h4>
                <p>
                  سالم وطبیعی بنوشید
                  <br />و لذت ببرید
                </p>
              </div>
            </div>
          </Col>
          <Col xs={12} lg={6}>
            <div className="title4 group">
              <img src="Images/image 6.png" />
              <div className="box-title">
                <h4>به همراه بروزترین آموزش ها</h4>
                <p>
                  آموزش تهیه و دیزاین قهوه
                  <br />
                  به روش های مختلف
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Main;
