// src/ExchangeTaskPage.tsx
import React, { useState } from "react";
import TaskComponent from "./TaskComponent";

interface Task {
  id: number;
  title: string;
  description: string;
}

const ExchangeTaskPage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Exchange Item 1", description: "Exchange for item 2" },
    { id: 2, title: "Exchange Item 2", description: "Exchange for item 3" },
    { id: 3, title: "Exchange Item 3", description: "Exchange for item 4" },
  ]);

  const [newTaskTitle, setNewTaskTitle] = useState<string>("");
  const [newTaskDescription, setNewTaskDescription] = useState<string>("");

  const completeTask = (taskId: number) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const addTask = () => {
    if (newTaskTitle && newTaskDescription) {
      const newTask: Task = {
        id: tasks.length + 1,
        title: newTaskTitle,
        description: newTaskDescription,
      };
      setTasks([...tasks, newTask]);
      setNewTaskTitle("");
      setNewTaskDescription("");
    }
  };

  return (
    <div className="container bg-slate-950 min-h-screen mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Exchange Tasks</h1>

      {/* Input fields for adding new tasks */}
      <div className="mb-5">
        <input
          type="text"
          placeholder="Task Title"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 mr-2 mb-4  w-full md:w-1/3"
        />
        <input
          type="text"
          placeholder="Task Description"
          value={newTaskDescription}
          onChange={(e) => setNewTaskDescription(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 mr-2 w-full mb-4 md:w-1/3"
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Add Task
        </button>
      </div>

      {tasks.length === 0 ? (
        <p className="text-gray-600">No tasks available.</p>
      ) : (
        tasks.map((task) => (
          <TaskComponent
            key={task.id}
            title={task.title}
            description={task.description}
            onComplete={() => completeTask(task.id)}
          />
        ))
      )}
    </div>
  );
};

export default ExchangeTaskPage;
