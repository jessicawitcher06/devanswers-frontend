import { useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { questions as questionData } from '../../../data/questions.js';
import AnswerForm from '../../components/Answer/AnswerForm.jsx';
import AnswerList from '../../components/Answer/AnswerList.jsx';
import QuestionContent from '../../components/Question/QuestionContent.jsx';
import './QuestionDetail.css';

const LOAD_DELAY_MS = 1000;

const QuestionDetail = ({ id }) => {
  const [question, setQuestion] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const timerId = setTimeout(() => {
      const matchedQuestion = questionData.find((item) => item._id === id) || null;
      setQuestion(matchedQuestion);
      setLoading(false);
    }, LOAD_DELAY_MS);

    return () => clearTimeout(timerId);
  }, [id]);

  if (loading) {
    return (
      <div className="qdetail-loading py-5">
        <Spinner animation="border" role="status" className="qdetail-spinner mb-3" />
        <p className="mb-0">Loading question details...</p>
      </div>
    );
  }

  if (!question) {
    return (
      <Container className="py-4">
        <p className="qdetail-empty mb-0">Question not found</p>
      </Container>
    );
  }

  return (
    <Container className="qdetail-container py-4">
      <QuestionContent question={question} />
      <AnswerList answers={question.answers} />
      <AnswerForm />
    </Container>
  );
};

export default QuestionDetail;