import { act, fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { RepoSearch } from '.';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

describe('UI - Repo Search', () => {
    it('should render with empty input', () => {
        render(<RepoSearch />);

        expect(screen.getByLabelText('Search Repositories')).toBeInTheDocument();

        const button = screen.getByText('✖') as HTMLButtonElement;
        expect(button).toBeInTheDocument();
        expect(button.style.display).toBe('none');
    });

    it('should render with clear button', async () => {
        render(<RepoSearch />);

        const input = screen.getByLabelText('Search Repositories') as HTMLInputElement;
        fireEvent.change(input, { target: { value: 'urodstvo' } });
        expect(input.value).toBe('urodstvo');

        await act(async () => {
            await userEvent.type(input, 'urodstvo');

            await sleep(500);
        });

        const button = screen.getByText('✖') as HTMLButtonElement;
        expect(button.style.display).toBe('block');

        await userEvent.click(button);
        expect(input.value).toBe('');
    });
});
