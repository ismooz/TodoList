import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

function TodoItem({ task, onToggleCompleted, onDeleteTask, onUpdateTask }) {
const [isEditing, setIsEditing] = useState(false);
const [editedText, setEditedText] = useState(task.text);

const [open, setOpen] = useState(false);

const handleClickOpen = () => {
setOpen(true);
};

const handleClose = () => {
setOpen(false);
};

const handleDelete = () => {
onDeleteTask(task.id);
setOpen(false);
};

const handleEdit = () => {
    setIsEditing(true);
    };

const handleSave = () => {
onUpdateTask(task.id, editedText);
setIsEditing(false);
};

  return (
    <li className='todo-item'>

    {isEditing ? (
    <input
        type="text"
        className='item-text'
        value={editedText}
        onChange={(e) => setEditedText(e.target.value)}
    />
    ) : (
    <span
        className="item-text"
        style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
    >
        {task.text}
    </span>
    )}

    <input
    type="checkbox"
    checked={task.completed}
    onChange={() => onToggleCompleted(task.id)}
    />
    
      {isEditing ? (
        <button className="task-button" onClick={handleSave}>💾</button>
      ) : (
        <button className="task-button" onClick={handleEdit}>⚙️</button>
      )}
      <button className="task-button" onClick={handleClickOpen}>🗑️</button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirmer la suppression"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Êtes-vous sûr de vouloir supprimer cette tâche ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Annuler</Button>
          <Button onClick={handleDelete} autoFocus>
            Supprimer
          </Button>
        </DialogActions>
      </Dialog>
    </li>
  );
}

export default TodoItem;