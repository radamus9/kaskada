const test = require('node:test');
const assert = require('node:assert');

const { navigate, setUserRoles } = require('../app/router');

test('redirects to login when user lacks admin role', () => {
  setUserRoles([]); // user without admin role
  const result = navigate('#/admin');
  assert.strictEqual(result, '#/login');
});
