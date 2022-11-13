import { defineConfig } from 'cypress';

export default defineConfig({
  fileServerFolder: '.',
  video: true,
  videosFolder: './dist/videos',
  downloadsFolder: './dist/downloads',
  screenshotsFolder: './dist/screenshots',
  e2e: {
    setupNodeEvents(_on, _config) {
      // implement node event listeners here
    },
  },
});
