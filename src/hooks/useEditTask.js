import { useState } from 'react';

export function useEditTask(editTask) {
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState('');

  const handleEditClick = (id, currentTitle) => {
    setEditingId(id);
    setEditValue(currentTitle);
  };

  const handleEditChange = (e) => {
    setEditValue(e.target.value);
  };

  const handleEditSave = (id) => {
    editTask(id, editValue);
    setEditingId(null);
    setEditValue('');
  };

  const handleEditCancel = () => {
    setEditingId(null);
    setEditValue('');
  };

  return {
    editingId,
    editValue,
    handleEditClick,
    handleEditChange,
    handleEditSave,
    handleEditCancel,
  };
}