import { render, screen } from '@testing-library/react';

import { Button } from '.';

describe('UI - Button', () => {
    it('should render', () => {
        render(<Button>Test</Button>);

        expect(screen.getByRole('button')).toBeInTheDocument();
        expect(screen.getByRole('button')).toHaveTextContent('Test');
    });
});
