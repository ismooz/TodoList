import React, {useState} from "react";

function AddTodoForm({onAddTask}) {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        onAddTask(text);
        setText('');
    };

    return (
        <form className="todo-input" onSubmit={handleSubmit}>
            <input className="input"
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Ajouter une nouvelle tâche"
            />
            <button className="button-ajouter" type="submit">Ajouter la tâche</button>
        </form>
    );
}

export default AddTodoForm;