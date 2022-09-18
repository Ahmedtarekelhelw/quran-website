import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import MainSection from "../../components/mainSection/MainSection";
import SideBar from "../../components/sidebar/SideBar";
import "./style.scss";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { Col, Container, Row } from "react-bootstrap";

const Home = () => {
  const handleFullScreen = useFullScreenHandle();
  return (
    <FullScreen handle={handleFullScreen}>
      <Header handleFullScreen={handleFullScreen} />
      <Container fluid>
        <Row className="main-row">
          <Col lg={9}>
            <MainSection />
          </Col>
          <Col lg={3} className="position-fixed bg-white end-0">
            <SideBar />
          </Col>
        </Row>
        <Col>
          <Footer />
        </Col>
      </Container>
    </FullScreen>
  );
};

export default Home;
