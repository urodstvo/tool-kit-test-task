import { useTitle } from '@/shared/lib/browser';
import { RepoList } from '@/widgets/repo-list';

export default function Home() {
    useTitle('Home - Search GitHub Repositories');

    return (
        <main>
            <RepoList />
        </main>
    );
}
