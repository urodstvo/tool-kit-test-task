import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { RepoCard } from '.';
import repo from './mock-repo.json';

describe('UI - Repo Card', () => {
    it('Should render repository link', () => {
        // @ts-expect-error Code Generation Issue
        render(<RepoCard {...repo} />, { wrapper: BrowserRouter });
        expect(screen.getByText('urodstvo / coursework')).toBeInTheDocument();
        expect(screen.getByText('urodstvo / coursework').getAttribute('href')).toEqual(
            'https://github.com/urodstvo/coursework',
        );
    });
    it('Should render stars', () => {
        // @ts-expect-error Code Generation Issue
        render(<RepoCard {...repo} />, { wrapper: BrowserRouter });
        expect(screen.getByText('0')).toBeInTheDocument();
    });

    it('Should render correct commit date', () => {
        // @ts-expect-error Code Generation Issue
        render(<RepoCard {...repo} />, { wrapper: BrowserRouter });

        expect(screen.getByText('June 8, 2023 at 11:44 AM')).toBeInTheDocument();
    });
    it('Should render incorrect commit date', () => {
        const props = { ...repo, defaultBranchRef: null };

        // @ts-expect-error Code Generation Issue
        render(<RepoCard {...props} />, { wrapper: BrowserRouter });

        expect(screen.getByText('No commits yet')).toBeInTheDocument();
    });

    it('Should render link button', () => {
        const props = { ...repo, defaultBranchRef: null };
        // @ts-expect-error Code Generation Issue
        render(<RepoCard {...props} />, { wrapper: BrowserRouter });
        expect(screen.getByRole('button')).toBeInTheDocument();
        expect(screen.getByRole('button')).toHaveTextContent('Show Repository Card');

        expect(screen.getByRole('link', { name: 'Show Repository Card' })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: 'Show Repository Card' }).getAttribute('href')).toEqual(
            '/repo/R_kgDOJWC2KQ',
        );
    });
});
