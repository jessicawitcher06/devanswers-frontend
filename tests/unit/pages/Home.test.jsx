import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import Home from '../../../src/pages/Question/Home.jsx';

describe('Home', () => {
	test('renders the page heading', () => {
		render(<Home />);

		expect(screen.getByRole('heading', { name: 'All Questions' })).toBeInTheDocument();
	});

	test('renders Ask Question button and shows alert on click', async () => {
		const user = userEvent.setup();
		const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {});

		render(<Home />);
		await user.click(screen.getByRole('button', { name: 'Ask Question' }));

		expect(alertSpy).toHaveBeenCalledWith('Ask Question clicked');
		alertSpy.mockRestore();
	});

	test('shows loading spinner initially', () => {
		render(<Home />);

		expect(screen.getByRole('status')).toBeInTheDocument();
		expect(screen.getByText('Loading questions...')).toBeInTheDocument();
	});

	test('shows the question count after loading completes', async () => {
		render(<Home />);

		await screen.findByText('How do I center a div using CSS Flexbox?');
		expect(screen.getByText('20 questions')).toBeInTheDocument();
	});

	test('renders question details after loading and hides loading message', async () => {
		render(<Home />);

		expect(await screen.findByText('How do I center a div using CSS Flexbox?')).toBeInTheDocument();
		expect(screen.getByText(/I'?m trying to center a div both vertically and horizontally using Flexbox/i)).toBeInTheDocument();

		await waitFor(() => {
			expect(screen.queryByText('Loading questions...')).not.toBeInTheDocument();
		});
	});
});