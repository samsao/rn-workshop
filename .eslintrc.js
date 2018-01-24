module.exports = {
  parser: 'babel-eslint',

  settings: {
    'import/parser': 'babel-eslint',
    'import/resolver': {
      'babel-module': {},
    },
  },
  globals: {
    Class: true,
    TimeoutID: true,
    SyntheticEvent: true,
    SyntheticKeyboardEvent: true,
    SyntheticInputEvent: true,
    $Keys: true,
    $Values: true,
    PositionError: true,
    Position: true,
    __DEV__: true,
  },
  extends: ['samsao-mobile'],
};
