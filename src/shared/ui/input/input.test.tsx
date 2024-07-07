import { render, screen } from '@testing-library/react';

import { Input } from '.';

describe('UI - Input', () => {
    it('should render', () => {
        render(<Input aria-label="Test" />);

        expect(screen.getByLabelText('Test')).toBeInTheDocument();
    });

    it('should render with placeholder', () => {
        render(<Input aria-label="Test" placeholder="Test placeholder" />);

        expect(screen.getByPlaceholderText('Test placeholder')).toBeInTheDocument();
    });

    it('should render with value', () => {
        render(<Input aria-label="Test" defaultValue="Test value" />);

        expect(screen.getByDisplayValue('Test value')).toBeInTheDocument();
    });
});
