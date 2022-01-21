import { useState } from "react";
import Task from "./Task";

function TasksList() {
    const taskItemList = [
        "Follow Edukasyon.ph on Facebook",
        "Follow AWS Siklab Pilipinas on Facebook",
        "Follow Zuitt Coding Bootcamp on Facebook",
        "Follow Zuitt Coding Bootcamp on Instagram"
    ];

    const [taskValue, setTaskValue] = useState("Just another task");
    console.log("taskValue:", taskValue);

    const inputChangeHandler = (e) => {
        setTaskValue(e.target.value);
    };

    return (
        <>
            <input
                className="task-input"
                placeholder="Create a new task"
                onChange={inputChangeHandler}
            />
            <ul>
                {taskItemList.map((task, index) => {
                    return <Task key={index} taskName={task} />;
                })}
            </ul>
        </>
    );
}

export default TasksList;