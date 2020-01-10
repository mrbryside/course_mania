/**
 *
 * Asynchronously loads the component for TestVideo
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
