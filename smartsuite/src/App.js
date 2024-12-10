import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { CountDownTimer } from "./components/CountDownTimer";
import { ExpenseTracker } from "./components/ExpenseTracker";
import { NoteApp } from "./components/NoteApp";
import { ToDoList } from "./components/ToDoList";
import { Home } from "./pages/Home";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <Router>
      <Container className="d-flex flex-column min-vh-100">
        <Row>
          <Col style={{marginTop: "15px"}}>
            <Header />
          </Col>
        </Row>
        <Row className="flex-grow-1 justify-content-center">
          <Col md={8} className="p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/timer" element={<CountDownTimer />} />
              <Route path="/expense" element={<ExpenseTracker />} />
              <Route path="/note" element={<NoteApp />} />
              <Route path="/todo" element={<ToDoList />} />
            </Routes>
          </Col>
        </Row>
        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
