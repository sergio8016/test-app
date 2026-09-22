import { Injectable, signal } from '@angular/core';

export interface TaskItem {
  id: string;
  name: string;
  quantity: number;
  completed: boolean;
}

export interface PurchaseTask {
  id: string;
  title: string;
  type: 'buy';
  assignedTo: string;
  assignedBy: string;
  createdAt: string;
  completedAt?: string;
  items: TaskItem[];
}

@Injectable({ providedIn: 'root' })
export class TaskService {
  private readonly storageKey = 'build-flow-tasks';
  private readonly tasksState = signal<PurchaseTask[]>(this.readTasks());

  get tasks(): PurchaseTask[] {
    return this.tasksState();
  }

  tasksFor(username: string): PurchaseTask[] {
    return this.tasksState().filter((task) => task.assignedTo === username);
  }

  assignBuyTask(assignedTo: string, assignedBy: string, itemNames: string[]): void {
    const items = itemNames
      .map((name, index) => name.trim())
      .filter(Boolean)
      .map((name, index) => ({ id: `${Date.now()}-${index}`, name, quantity: 1, completed: false }));

    if (!items.length) {
      return;
    }

    const task: PurchaseTask = {
      id: `task-${Date.now()}`,
      title: `Buy ${items.length} item${items.length === 1 ? '' : 's'}`,
      type: 'buy',
      assignedTo,
      assignedBy,
      createdAt: new Date().toISOString(),
      items,
    };
    this.saveTasks([task, ...this.tasksState()]);
  }

  toggleItem(taskId: string, itemId: string): void {
    const updatedTasks = this.tasksState().map((task) => {
      if (task.id !== taskId) {
        return task;
      }

      const items = task.items.map((item) => item.id === itemId ? { ...item, completed: !item.completed } : item);
      const isComplete = items.every((item) => item.completed);
      return { ...task, items, completedAt: isComplete ? task.completedAt ?? new Date().toISOString() : undefined };
    });
    this.saveTasks(updatedTasks);
  }

  private saveTasks(tasks: PurchaseTask[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(tasks));
    this.tasksState.set(tasks);
  }

  private readTasks(): PurchaseTask[] {
    const storedTasks = localStorage.getItem(this.storageKey);
    if (storedTasks) {
      try {
        const tasks = JSON.parse(storedTasks) as PurchaseTask[];
        return tasks.some((task) => task.id === 'backend-task-buy-001') ? tasks : [this.createBackendMockTask(), ...tasks];
      } catch {
        localStorage.removeItem(this.storageKey);
      }
    }
    return [this.createBackendMockTask()];
  }

  private createBackendMockTask(): PurchaseTask {
    const itemNames = ['Cement - Option 1', 'Concrete - Option 2', 'Mortar - Option 1', 'Bricks - Option 3', 'Hammer - Option 1', 'Drill - Option 2', 'PVC Pipe - Option 1', 'Circuit Breaker - Option 2', 'Hard Hat - Option 1', 'Respirator - Option 3'];
    return {
      id: 'backend-task-buy-001',
      title: 'Buy materials for site preparation',
      type: 'buy',
      assignedTo: 'worker',
      assignedBy: 'admin',
      createdAt: new Date().toISOString(),
      items: itemNames.map((name, index) => ({ id: `backend-item-${index + 1}`, name, quantity: index % 3 + 1, completed: false })),
    };
  }
}
