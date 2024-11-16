import React, { useState, useEffect } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";


function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [newTask, setNewTask] = useState("");
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([
        ...tasks,
        { id: Date.now(), title: newTask, completed: false, priority: "Low", show: true },
      ]);
      setNewTask("");
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, show: false } : task)));
    setTimeout(() => {
      setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id));
    }, 300); // Delay matches transition duration
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const changePriority = (id, newPriority) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, priority: newPriority } : task
      )
    );
  };

  // Filter tasks based on the search query
  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-400 to-blue-500 flex flex-col items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
        <h1 className="text-3xl font-extrabold mb-6 text-center text-gray-800">Task Manager</h1>

        {/* Search Bar */}
        <div className="mb-4">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search tasks"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 transition-all duration-300 ease-in-out"
          />
        </div>

        <TaskInput newTask={newTask} setNewTask={setNewTask} addTask={addTask} />

        <div className="mt-4">
          {filteredTasks.length === 0 ? (
            <p className="text-center text-gray-500 animate-pulse">No tasks found</p>
          ) : (
            <TaskList
              tasks={filteredTasks}
              toggleTaskCompletion={toggleTaskCompletion}
              deleteTask={deleteTask}
              changePriority={changePriority}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
