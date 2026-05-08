import { Card } from 'react-bootstrap';
import VoteButtons from '../Shared/VoteButtons.jsx';
import './AnswerList.css';

const AnswerList = ({ answers }) => {
  const answerList = Array.isArray(answers) ? answers : [];
  const answerCount = answerList.length;

  if (!answerCount) {
    return (
      <section className="alist-wrapper mt-4">
        <h3 className="alist-title mb-3">0 Answers</h3>
        <p className="alist-empty mb-0">No answers yet. Be the first to answer this question.</p>
      </section>
    );
  }

  return (
    <section className="alist-wrapper mt-4">
      <h3 className="alist-title mb-3">{answerCount} {answerCount === 1 ? 'Answer' : 'Answers'}</h3>

      {answerList.map((answer, index) => {
        const authorName = answer.author?.name || 'Anonymous';
        const dateLabel = answer.createdAt
          ? new Date(answer.createdAt).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          })
          : 'Date unavailable';

        return (
          <Card key={answer._id || index} className="alist-card mb-3">
            <Card.Body className="d-flex gap-3">
              <div className="alist-votes">
                <VoteButtons
                  voteCount={answer.voteCount || 0}
                  onUpvote={() => alert('Answer upvoted!')}
                  onDownvote={() => alert('Answer downvoted!')}
                  variant="outline"
                  size="sm"
                />
              </div>
              <div className="flex-grow-1">
                <p className="alist-text mb-3">{answer.answerText}</p>
                <div className="alist-meta d-flex flex-wrap gap-3">
                  <span>By {authorName}</span>
                  <span>Posted {dateLabel}</span>
                </div>
              </div>
            </Card.Body>
          </Card>
        );
      })}
    </section>
  );
};

export default AnswerList;