// Types
import { Configuration } from 'webpack';

// Constants
import { SRC_DIR, BUILD_DIR, DIST_DIR } from '../utils/constants';

// Common Configuration
export default () => {
  const commonConfig: Configuration = {
    mode: 'none',
    entry: {
      main: SRC_DIR,
    },
    output: {
      filename: '[name].js',
      path: DIST_DIR,
    },
  };

  return commonConfig;
};
