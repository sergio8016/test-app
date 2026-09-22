import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AuthService } from '../../core/auth/auth.service';
import { TaskService } from '../../core/tasks/task.service';

@Component({
  selector: 'app-assign-task',
  imports: [FormsModule, ButtonModule, InputTextModule],
  templateUrl: './assign-task.component.html',
  styleUrl: './assign-task.component.css',
})
export class AssignTaskComponent {
  protected readonly auth = inject(AuthService);
  private readonly taskService = inject(TaskService);
  protected readonly worker = 'worker';
  protected readonly suggestedItems = ['Cement', 'Bricks', 'Hammer', 'Drill', 'Respirator', 'PVC Pipe', 'Safety boots', 'Circuit breaker'];
  protected selectedItems: string[] = [];
  protected customItem = '';
  protected assigned = false;

  protected toggleItem(item: string): void {
    this.selectedItems = this.selectedItems.includes(item)
      ? this.selectedItems.filter((selected) => selected !== item)
      : [...this.selectedItems, item];
    this.assigned = false;
  }

  protected addCustomItem(): void {
    const item = this.customItem.trim();
    if (item && !this.selectedItems.includes(item)) {
      this.selectedItems = [...this.selectedItems, item];
    }
    this.customItem = '';
    this.assigned = false;
  }

  protected removeItem(item: string): void {
    this.selectedItems = this.selectedItems.filter((selected) => selected !== item);
    this.assigned = false;
  }

  protected assignTask(): void {
    this.taskService.assignBuyTask(this.worker, this.auth.username ?? 'admin', this.selectedItems);
    this.assigned = this.selectedItems.length > 0;
    if (this.assigned) {
      this.selectedItems = [];
    }
  }
}
