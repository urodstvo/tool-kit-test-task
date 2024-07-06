import { useTitle } from '@/shared/lib/browser';
import { useSearchQueryStore } from '@/shared/store';
import { SearchList } from '@/widgets/repo-list';
import { ViewerList } from '@/widgets/viewer-list';

export default function Home() {
    useTitle('Home - Search GitHub Repositories');

    const query = useSearchQueryStore((state) => state.query);

    return <main>{query === '' ? <ViewerList /> : <SearchList />}</main>;
}
