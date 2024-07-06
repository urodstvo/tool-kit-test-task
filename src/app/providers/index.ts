import { compose } from '@/shared/lib/compose';

import { withApollo } from './with-apollo';

export const withProviders = compose(withApollo);
