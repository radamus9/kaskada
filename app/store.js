const goals = [
  { id: 1, ownerId: 1, title: 'Learn React' },
  { id: 2, ownerId: 1, title: 'Build an app' },
  { id: 3, ownerId: 2, title: 'Write documentation' }
];

const cycles = [
  { id: 1, name: 'Cycle 1' },
  { id: 2, name: 'Cycle 2' }
];

export function getGoal(id) {
  return goals.find(g => g.id === id) || null;
}

export function listGoals(ownerId) {
  return goals.filter(g => g.ownerId === ownerId);
}

export function listCycles() {
  return cycles;
}

export default {
  getGoal,
  listGoals,
  listCycles
};
