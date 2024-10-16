import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import Animal from "../../Animal";

@Component({
  selector: 'app-list-render',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent implements OnInit {
  animals : Animal[] = [
    {name: "Anubis", type: "Cat", age: 12},
    {name: "Dino", type: "Jacare", age: 2},
    {name: "Creeper", type: "Mob", age: 19}
  ];

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
