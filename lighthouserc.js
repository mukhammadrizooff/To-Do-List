module.exports = {
  ci: {
    upload: {
      target: 'temporary-public-storage',
    },
    assert: {
      preset: 'lighthouse:no-pwa',
      assertions: {
        'csp-xss': 'off',
         label: 'off',
        'unused-css-rules': 'off',
        'render-blocking-resources': 'off',
        'categories:performance': ['error', {minScore: 0.93}],
        'categories:best-practices': ['error', {minScore: 0.9}],
        'categories:seo': ['error', {minScore: 0.9}],
      },
    },
  },
};
