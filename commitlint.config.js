export default {
    extends: ['@commitlint/config-conventional'],
    rules: {
      'header-max-length': [0, 'always', 72],
      'subject-case': [2, 'never', ['upper-case', 'pascal-case']],
      'type-enum': [
        2,
        'always',
        [
          'feat',
          'fix',
          'docs',
          'style',
          'refactor',
          'perf',
          'test',
          'chore',
        ],
      ],
      'scope-empty': [2, 'never'],
      'scope-case': [2, 'always', 'lower-case'],
    },
  };
  