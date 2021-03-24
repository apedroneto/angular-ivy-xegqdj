import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {


  @Input()
  textButton: string = 'Clique aki';

  @Input()
  colorButton: string = 'blue';

  constructor() { }

  ngOnInit(): void {
  }
}
