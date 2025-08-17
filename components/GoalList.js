import React, { useEffect, useState } from 'react';
import api from '../app/api';

export default function GoalList({ ownerId }) {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    setGoals(api.listGoals(ownerId));
  }, [ownerId]);

  return (
    <ul>
      {goals.map(goal => (
        <li key={goal.id}>{goal.title}</li>
      ))}
    </ul>
  );
}
