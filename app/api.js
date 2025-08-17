import Store from './store';

// TODO: Replace Store calls with real REST/GraphQL requests when backend is available.
export function getGoal(id) {
  return Store.getGoal(id);
}

export function listGoals(ownerId) {
  return Store.listGoals(ownerId);
}

export function listCycles() {
  return Store.listCycles();
}

export default {
  getGoal,
  listGoals,
  listCycles
};
