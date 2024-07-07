import { fireEvent, render, screen } from '@testing-library/react';

import { Paginator } from '.';

describe('UI - Paginator', () => {
    it('should render', () => {
        render(<Paginator total={5} value={0} />);

        expect(screen.getByLabelText('paginator')).toBeInTheDocument();
    });

    it('should render 5 buttons with 5 pages', () => {
        render(<Paginator aria-label="Test" total={5} value={0} />);

        const buttons = screen.getAllByRole('button');

        expect(buttons).toHaveLength(5);
    });

    it('should render with correct values', () => {
        render(<Paginator aria-label="Test" total={7} value={2} />);

        expect(screen.getByText('1')).toBeInTheDocument();
        expect(screen.getByText('2')).toBeInTheDocument();
        expect(screen.getByText('3')).toBeInTheDocument();
        expect(screen.getByText('4')).toBeInTheDocument();
        expect(screen.getByText('5')).toBeInTheDocument();

        expect(screen.getByText('3').className).contains('active');
    });

    it('should change active page', () => {
        render(<Paginator aria-label="Test" total={7} value={2} />);

        expect(screen.getByText('3').className).contains('active');

        fireEvent.click(screen.getByRole('button', { name: '4' }));

        expect(screen.getByText('4').className).contains('active');
    });
});
