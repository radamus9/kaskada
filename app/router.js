let currentRoles = [];

function setUserRoles(roles) {
  currentRoles = roles;
}

function requireRole(role) {
  if (!role) return true;
  return currentRoles.includes(role);
}

const routes = {
  '#/login': {},
  '#/admin': { role: 'admin' },
  '#/home': {}
};

function navigate(hash) {
  const route = routes[hash];
  if (route && !requireRole(route.role)) {
    return '#/login';
  }
  return hash;
}

module.exports = { navigate, setUserRoles, requireRole, routes };
