import { useTaskStore } from "../../store/useTaskStore";

function Card(){
    const tasks = useTaskStore((state) => state.tasks);
    return (
        <div className="cards-container">
            {tasks.map((task, index) => (
                <div key={index} className="card">
                    <h1>{task.title}</h1>
                    <p>{task.description}</p>
                </div>
            ))}
        </div>
    )   
}
export default Card;