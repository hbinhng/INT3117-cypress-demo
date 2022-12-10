import { defineConfig } from 'cypress';

export default defineConfig({
  fileServerFolder: '.',
  projectId: 'crax9p',
  video: true,
  videosFolder: './dist/videos',
  downloadsFolder: './dist/downloads',
  screenshotsFolder: './dist/screenshots',

  e2e: {
    setupNodeEvents(_on, _config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },
});
