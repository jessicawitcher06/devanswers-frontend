import { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import './AnswerForm.css';

const AnswerForm = () => {
  const [answerText, setAnswerText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!answerText.trim()) {
      alert('Answer cannot be empty!');
      return;
    }

    alert('Answer submitted!');
    setAnswerText('');
  };

  return (
    <Card className="aform-card mt-4">
      <Card.Body>
        <h3 className="aform-title mb-3">Your Answer</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="answer-textarea" className="mb-3">
            <Form.Control
              as="textarea"
              rows={8}
              placeholder="Write your answer here..."
              value={answerText}
              onChange={(event) => setAnswerText(event.target.value)}
              className="aform-textarea"
            />
          </Form.Group>
          <Button type="submit" className="aform-submit-btn">
            Post Answer
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default AnswerForm;