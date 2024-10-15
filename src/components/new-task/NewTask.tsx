import './NewTask.css';

function NewTask() {
    return (
        <section className="new-task-container">
            <input className="new-task-input" type="text" placeholder="Add title" />
            <textarea className="new-task-textarea" placeholder="Add task description"></textarea>
        </section>
    );
}

export default NewTask;