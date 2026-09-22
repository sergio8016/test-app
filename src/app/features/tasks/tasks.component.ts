import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { AuthService } from '../../core/auth/auth.service';
import { PurchaseTask, TaskService } from '../../core/tasks/task.service';

@Component({
  selector: 'app-tasks',
  imports: [CommonModule, ButtonModule, TagModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  protected readonly auth = inject(AuthService);
  protected readonly taskService = inject(TaskService);

  protected get tasks(): PurchaseTask[] {
    return this.taskService.tasksFor(this.auth.username ?? 'worker');
  }

  protected completedCount(task: PurchaseTask): number {
    return task.items.filter((item) => item.completed).length;
  }

  protected toggleItem(taskId: string, itemId: string): void {
    this.taskService.toggleItem(taskId, itemId);
  }
}
