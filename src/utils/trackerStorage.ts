// src/utils/trackerStorage.ts

// Generic storage helper functions
export function getTrackerData<T>(key: string): T | null {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    return JSON.parse(raw) as T;
  } catch (err) {
    console.error("Error reading tracker data:", err);
    return null;
  }
}

export function saveTrackerData<T>(key: string, data: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (err) {
    console.error("Error saving tracker data:", err);
  }
}

export function clearTrackerData(key: string): void {
  try {
    localStorage.removeItem(key);
  } catch (err) {
    console.error("Error clearing tracker data:", err);
  }
}

// ---- Tracker specific helpers ----

export interface TrackerTask {
  id: string;
  name: string;
  days: number;
  completed: boolean[];
}

/**
 * Add a new task (skip if already exists).
 */
export function addTask(task: TrackerTask) {
  const tasks = getTrackerData<TrackerTask[]>("tasks") || [];
  const exists = tasks.some((t) => t.name === task.name);
  if (!exists) {
    tasks.push(task);
    saveTrackerData("tasks", tasks);
  }
}
