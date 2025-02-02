import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-tasks.form',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  templateUrl: './tasks.form.component.html',
  styleUrl: './tasks.form.component.css'
})

export class TasksFormComponent {
  @Input() initialData?: any;
  @Output() formSubmit = new EventEmitter<any>();

  statusOptions = [
    { value: true, label: 'Concluído' },
    { value: false, label: 'Andamento' }
  ];

  taskForm!: FormGroup; // Declaração sem inicialização

  constructor(private fb: FormBuilder) {
    // Inicialização dentro do construtor
    this.taskForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(100)]],
      description: ['', [Validators.maxLength(500)]],
      status: [true, Validators.required]
    });
  }

  ngOnInit() {
    if (this.initialData) {
      this.taskForm.patchValue(this.initialData);
    }
  }

  onSubmit() {
    if (this.taskForm.valid) {
      this.formSubmit.emit(this.taskForm.value);
    }
  }

  get isEditMode(): boolean {
    return !!this.initialData;
  }
}
