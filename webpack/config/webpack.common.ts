// Types
import { Configuration } from 'webpack';

// Constants
import { SRC_DIR, BUILD_DIR } from '../utils/constants';

// Common Configuration
export default () => {
  const commonConfig: Configuration = {
    mode: 'none',
    entry: {
      main: SRC_DIR,
    },
    output: {
      filename: '[name].js',
      path: BUILD_DIR,
    },
  };

  return commonConfig;
};
