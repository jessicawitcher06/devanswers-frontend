import { Spinner } from 'react-bootstrap';
import QuestionCard from './QuestionCard.jsx';
import './QuestionList.css';

const QuestionList = ({ questions, loading }) => {
  if (loading) {
    return (
      <div className="qlist-loading py-5">
        <Spinner animation="border" role="status" className="qlist-spinner mb-3" />
        <p className="mb-0">Loading questions...</p>
      </div>
    );
  }

  if (!Array.isArray(questions) || questions.length === 0) {
    return <p className="qlist-empty py-4">No questions found</p>;
  }

  return (
    <section>
      {questions.map((question) => (
        <QuestionCard key={question._id} question={question} />
      ))}
    </section>
  );
};

export default QuestionList;
