import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-operator',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './pipe-operator.component.html',
  styleUrl: './pipe-operator.component.css'
})
export class PipeOperatorComponent implements OnInit{
  text = "hello world";
  dateNow = new Date(); 

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
