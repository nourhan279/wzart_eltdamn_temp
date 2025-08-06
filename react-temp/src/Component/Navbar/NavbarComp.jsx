import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../assets/img/logo.svg";
import "../Navbar/NavbarComp.css";

export function NavbarComp() {
  return (
    <>
      <Navbar expand="lg" className="shadow bg-body-tertiary py-1 fixed-top ">
        <Container fluid>
          <Navbar.Brand className="" href="#">
            <div className="d-flex">
              <img alt="logo" src={logo} width="50rem" height="50rem"></img>
              <div className="d-flex flex-column pe-2">
                <h6 className="m-0">جمهورية مصر العربية</h6>
                <p className="m-0 fs-6">وزاره التضامن الإجتماعي</p>
              </div>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto me-6 my-2 my-xl-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">الرئيسية</Nav.Link>
              <Nav.Link href="#action2">تصفح الخدمات</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <div className="position-relative">
                <Form.Control
                  type="search"
                  placeholder="ابحث عن خدمة"
                  className="ms-5 pe-5 text-end"
                  aria-label="Search"
                />
                <i
                  className="fa-solid fa-magnifying-glass position-absolute"
                  style={{
                    top: "50%",
                    right: "15px",
                    transform: "translateY(-50%)",
                    color: "#aaa",
                  }}
                ></i>
              </div>
            </Form>
            <Button className="me-5 ms-5 rounded-5">
              {" "}
              <i className="fa-regular fa-user"></i> تسجيل الدخول
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
