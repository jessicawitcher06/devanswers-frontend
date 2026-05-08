import { render, screen } from '@testing-library/react';
import QuestionList from '../../../src/components/Question/QuestionList.jsx';

const mockQuestions = [
	{
		_id: 'q1',
		title: 'How do I center a div using CSS Flexbox?',
		description: 'Use align-items and justify-content on a flex container.',
		voteCount: 12,
		author: { name: 'user123' },
		createdAt: '2023-10-01T12:00:00Z',
		tags: [{ name: 'CSS' }],
		answers: [{ _id: 'a1' }, { _id: 'a2' }],
	},
	{
		_id: 'q2',
		title: 'What is let vs const?',
		description: 'Explain block scoping and reassignment.',
		voteCount: 5,
		author: { name: 'devAlice' },
		createdAt: '2023-10-02T12:00:00Z',
		tags: [{ name: 'JavaScript' }],
		answers: [{ _id: 'a3' }],
	},
];

describe('QuestionList', () => {
	test('shows loading spinner and loading message when loading is true', () => {
		render(<QuestionList questions={[]} loading />);

		expect(screen.getByRole('status')).toBeInTheDocument();
		expect(screen.getByText('Loading questions...')).toBeInTheDocument();
	});

	test('shows empty-state message when questions is an empty array', () => {
		render(<QuestionList questions={[]} loading={false} />);

		expect(screen.getByText('No questions found')).toBeInTheDocument();
	});

	test('shows empty-state message when questions prop is missing', () => {
		render(<QuestionList loading={false} />);

		expect(screen.getByText('No questions found')).toBeInTheDocument();
	});

	test('renders all question titles when questions are passed', () => {
		render(<QuestionList questions={mockQuestions} loading={false} />);

		expect(screen.getByText('How do I center a div using CSS Flexbox?')).toBeInTheDocument();
		expect(screen.getByText('What is let vs const?')).toBeInTheDocument();
	});

	test('renders question details including description, votes, and author', () => {
		render(<QuestionList questions={[mockQuestions[0]]} loading={false} />);

		expect(screen.getByText('Use align-items and justify-content on a flex container.')).toBeInTheDocument();
		expect(screen.getByText('12')).toBeInTheDocument();
		expect(screen.getByText('user123')).toBeInTheDocument();
	});
});