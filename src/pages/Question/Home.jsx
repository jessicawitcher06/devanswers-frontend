import { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { questions as questionData } from '../../../data/questions.js';
import QuestionList from '../../components/Question/QuestionList.jsx';
import './Home.css';

const LOAD_DELAY_MS = 300;

const Home = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const timerId = setTimeout(() => {
      setQuestions(questionData);
      setLoading(false);
    }, LOAD_DELAY_MS);

    return () => clearTimeout(timerId);
  }, []);

  return (
    <Container fluid className="home-container py-4 px-3 px-md-4">
      <Row className="justify-content-center">
        <Col lg={10} className="home-col">
          <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-3">
            <div>
              <h1 className="home-title mb-1">All Questions</h1>
              <p className="home-subtitle mb-0">{questions.length} questions</p>
            </div>
            <Button className="home-ask-btn" onClick={() => alert('Ask Question clicked')}>
              Ask Question
            </Button>
          </div>

          <QuestionList questions={questions} loading={loading} />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;