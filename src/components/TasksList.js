import Task from "./Task";

function TasksList() {
    const taskItemList = [
        "Follow Edukasyon.ph on Facebook",
        "Follow AWS Siklab Pilipinas on Facebook",
        "Follow Zuitt Coding Bootcamp on Facebook",
        "Follow Zuitt Coding Bootcamp on Instagram"
    ];

    return (
        <>
            <input className="task-input" />
            <ul>
                {taskItemList.map((task, index) => {
                    console.log(task, index);
                    return <Task key={index} taskName={task} />;
                })}
            </ul>
        </>
    );
}

export default TasksList;