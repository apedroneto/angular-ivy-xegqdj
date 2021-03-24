import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  myTasks = [
    {
      name: 'Arrumar o quarto'
    },
    {
      name: 'Jogar o lixo'
    },
    {
      name: 'Fazer almoço'
    }
  ];

  taskName = '';

  constructor() { }

  ngOnInit(): void {
  }

  addTask(): void {
    this.myTasks.push({
      name: this.taskName
    });

    this.taskName = '';
  }

  removeTask(): void {
    this.myTasks = this.myTasks.filter(task => task.name !== this.taskName);
  }

}
