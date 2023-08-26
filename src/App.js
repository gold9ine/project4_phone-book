import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

// https://noona-phone-book.netlify.app/
// https://hackmd.io/@oW_dDxdsRoSpl0M64Tfg2g/ryQRnXTm9
// https://github.com/legobitna/phone-book
// 1. 왼쪽에는 연락처 등록하는 폼이, 오른쪽에는 연락처 리스트와 search 창이 있다.
// 2. 리스트에 유저 이름과 전화번호를 추가할 수 있다.
// 3. 리스트에 아이템이 몇 개 있는지 보인다.
// 4. 사용자가 유저를 이름 검색으로 찾을 수 있다.

function App() {
  return (
    <div>
      <h1 className="text-center m-3">연락처</h1>
      <Container>
        <Row>
          <Col className="border-column">
            <ContactForm />
          </Col>
          <Col>
            <ContactList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
