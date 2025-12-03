// src/pages/Tracker.tsx
import React, { useState, useEffect } from "react";
import { getTrackerData, saveTrackerData } from "../utils/trackerStorage";
import { Trash2 } from "lucide-react";

interface TrackerTask {
  id: string;
  name: string;
  days: number;
  completed: boolean[];
}

const emojiList = ["🌱", "🧘", "🎯", "🚶", "📖", "💪", "🎨", "☀️", "🛌", "🧑‍🍳"];

const Tracker: React.FC = () => {
  const [tasks, setTasks] = useState<TrackerTask[]>([]);
  const [newTask, setNewTask] = useState("");
  const [days, setDays] = useState(7);

  // Load saved tasks
  useEffect(() => {
    const stored = getTrackerData<TrackerTask[]>("tasks") || [];
    const fixed = stored.map((t) => ({
      ...t,
      days: t.days || 7,
      completed: Array.isArray(t.completed)
        ? t.completed
        : Array(t.days || 7).fill(false),
    }));
    setTasks(fixed);
    saveTrackerData("tasks", fixed);
  }, []);

  const handleAddTask = () => {
    if (!newTask.trim()) return;
    const task: TrackerTask = {
      id: crypto.randomUUID(),
      name: newTask,
      days,
      completed: Array(days).fill(false),
    };
    const updated = [...tasks, task];
    setTasks(updated);
    saveTrackerData("tasks", updated);
    setNewTask("");
    setDays(7);
  };

  const toggleDay = (taskId: string, dayIndex: number) => {
    const updated = tasks.map((t) =>
      t.id === taskId
        ? {
            ...t,
            completed: t.completed.map((c, i) =>
              i === dayIndex ? !c : c
            ),
          }
        : t
    );
    setTasks(updated);
    saveTrackerData("tasks", updated);
  };

  const deleteTask = (taskId: string) => {
    const updated = tasks.filter((t) => t.id !== taskId);
    setTasks(updated);
    saveTrackerData("tasks", updated);
  };

  const calcProgress = (task: TrackerTask) => {
    const completedCount = task.completed.filter(Boolean).length;
    return Math.round((completedCount / task.days) * 100);
  };

  // Pick emoji based on index
  const getEmoji = (index: number) => emojiList[index % emojiList.length];

  // Pick progress bar color based on %
  const getProgressColor = (progress: number) => {
    if (progress < 34) return "bg-red-400";
    if (progress < 67) return "bg-yellow-400";
    if (progress < 100) return "bg-blue-500";
    return "bg-green-500";
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-slate-800 dark:text-white">
        Wellness Tracker
      </h1>

      {/* Add task form */}
      <div className="flex gap-3 mb-6">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add new task..."
          className="flex-grow p-2 border rounded-lg dark:bg-slate-800 dark:text-white"
        />
        <input
          type="number"
          min={1}
          max={30}
          value={days}
          onChange={(e) => setDays(Number(e.target.value))}
          className="w-20 p-2 border rounded-lg dark:bg-slate-800 dark:text-white"
        />
        <button
          onClick={handleAddTask}
          className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition"
        >
          Add
        </button>
      </div>

      {/* Task list */}
      {tasks.length === 0 ? (
        <p className="text-slate-500 dark:text-slate-400">
          No tasks yet. Complete the quiz or add your own!
        </p>
      ) : (
        <div className="space-y-6">
          {tasks.map((task, idx) => {
            const progress = calcProgress(task);
            const completed = progress === 100;
            return (
              <div
                key={task.id}
                className="p-4 bg-white dark:bg-slate-900 rounded-xl shadow space-y-3 border border-slate-200 dark:border-slate-700"
              >
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold text-lg text-slate-800 dark:text-white flex items-center gap-2">
                    <span>{getEmoji(idx)}</span> {task.name}
                    {completed && <span className="ml-2">✅</span>}
                  </h2>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="text-red-500 hover:text-red-700 transition"
                    aria-label="Delete task"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-4 overflow-hidden">
                  <div
                    className={`${getProgressColor(
                      progress
                    )} h-4 transition-all`}
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {progress}% complete
                </p>

                {/* Day buttons */}
                <div className="flex gap-2 flex-wrap">
                  {task.completed.map((done, i) => (
                    <button
                      key={i}
                      onClick={() => toggleDay(task.id, i)}
                      className={`w-8 h-8 rounded-full border text-sm transition ${
                        done
                          ? "bg-green-500 text-white border-green-600"
                          : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border-slate-300 dark:border-slate-600"
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Tracker;
