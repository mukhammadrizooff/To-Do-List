module.exports = {
  ci: {
    upload: {
      target: 'temporary-public-storage',
    },
    assert: {
      preset: 'lighthouse:no-pwa',
      assertions: {
        'csp-xss': 'off',
        'label': 'off',
        'unused-css-rules': 'off',
        'render-blocking-resources': 'off',
      },
    },
  },
};
