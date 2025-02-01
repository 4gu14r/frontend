// Objetivo: Componente de listagem de tarefas
import { AfterViewInit, Component, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from '../../components/dialog/dialog.component';

// Componentes do Angular Material
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
import { MatFabButton } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import {  MatMenuModule  } from '@angular/material/menu';

// Componentes do PrimeNG

// Interface de dados da tabela
@Component({
  selector: 'app-tasks',
  imports: [
    CommonModule,
    MatTable,
    MatTableModule,
    MatPaginator,
    MatIcon,
    MatFabButton,
    MatMenuModule,
    DialogComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'title', 'description', 'completed', 'action'];
  dataSource = new MatTableDataSource<TaskTable>(TASKS);
  private dialog = inject(MatDialog);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private router: Router) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  onCreateNew() {
    this.router.navigate(['/tasks/form']);
  }

  onEditRow(row: TaskTable) {
    this.router.navigate(['/tasks/form', row.id]);
  }

  deleteTask(element: any): void {
    // Lógica de deleção
    console.log('Deletando:', element);
  }

  openDeleteDialog(element: any): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { taskTitle: element.title }
    });

    dialogRef.afterClosed().subscribe(confirmed => {
      if (confirmed) {
        this.deleteTask(element);
      }
    });
  }

}


export interface TaskTable {
  id: number;
  title: String;
  description: Number;
  completed: String;
}
const TASKS: TaskTable[] = [
  {id: 1, title: 'Hydrogen', description: 1.0079, completed: 'H'},
  {id: 2, title: 'Helium', description: 4.0026, completed: 'He'},
  {id: 3, title: 'Lithium', description: 6.941, completed: 'Li'},
  {id: 4, title: 'Beryllium', description: 9.0122, completed: 'Be'},
  {id: 5, title: 'Boron', description: 10.811, completed: 'B'},
  {id: 6, title: 'Carbon', description: 12.0107, completed: 'C'},
  {id: 7, title: 'Nitrogen', description: 14.0067, completed: 'N'},
  {id: 8, title: 'Oxygen', description: 15.9994, completed: 'O'},
  {id: 9, title: 'Fluorine', description: 18.9984, completed: 'F'},
  {id: 10, title: 'Neon', description: 20.1797, completed: 'Ne'},
  {id: 11, title: 'Sodium', description: 22.9897, completed: 'Na'},
  {id: 12, title: 'Magnesium', description: 24.305, completed: 'Mg'},
  {id: 13, title: 'Aluminum', description: 26.9815, completed: 'Al'},
  {id: 14, title: 'Silicon', description: 28.0855, completed: 'Si'},
  {id: 15, title: 'Phosphorus', description: 30.9738, completed: 'P'},
  {id: 16, title: 'Sulfur', description: 32.065, completed: 'S'},
  {id: 17, title: 'Chlorine', description: 35.453, completed: 'Cl'},
  {id: 18, title: 'Argon', description: 39.948, completed: 'Ar'},
  {id: 19, title: 'Potassium', description: 39.0983, completed: 'K'},
  {id: 20, title: 'Calcium', description: 40.078, completed: 'Ca'},
];
