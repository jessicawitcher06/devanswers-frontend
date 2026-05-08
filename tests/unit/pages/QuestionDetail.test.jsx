import { render, screen, waitFor } from '@testing-library/react';
import QuestionDetail from '../../../src/pages/Question/QuestionDetail.jsx';

describe('QuestionDetail', () => {
	test('shows loading spinner initially', () => {
		render(<QuestionDetail id="q1" />);

		expect(screen.getByRole('status')).toBeInTheDocument();
		expect(screen.getByText('Loading question details...')).toBeInTheDocument();
	});

	test('renders question content after loading', async () => {
		render(<QuestionDetail id="q1" />);

		expect(await screen.findByRole('heading', { name: 'How do I center a div using CSS Flexbox?' })).toBeInTheDocument();
		expect(screen.getByText(/Asked Oct 1, 2023/)).toBeInTheDocument();
	});

	test('renders answer list and answer count', async () => {
		render(<QuestionDetail id="q1" />);

		expect(await screen.findByText('3 Answers')).toBeInTheDocument();
		expect(screen.getByText(/You can center a div using Flexbox/)).toBeInTheDocument();
	});

	test('renders answer form after question data loads', async () => {
		render(<QuestionDetail id="q1" />);

		expect(await screen.findByRole('heading', { name: 'Your Answer' })).toBeInTheDocument();
		expect(screen.getByPlaceholderText('Write your answer here...')).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'Post Answer' })).toBeInTheDocument();
	});

	test('shows not-found message for invalid question id', async () => {
		render(<QuestionDetail id="does-not-exist" />);

		expect(await screen.findByText('Question not found')).toBeInTheDocument();

		await waitFor(() => {
			expect(screen.queryByText('Loading question details...')).not.toBeInTheDocument();
		});
	});
});