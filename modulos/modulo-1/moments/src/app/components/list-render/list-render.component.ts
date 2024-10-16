import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import Animal from "../../Animal";
import { ListService } from "../../services/list.service";

@Component({
  selector: 'app-list-render',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent implements OnInit {
  constructor(private listService: ListService) {}

  animals : Animal[] = [
    {name: "Anubis", type: "Cat", age: 12},
    {name: "Dino", type: "Jacare", age: 2},
    {name: "Creeper", type: "Mob", age: 19}
  ];

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  removeAnimal(animal: Animal) {
    alert("Animal removido...");
    this.animals = this.listService.remove(this.animals, animal);
  }
}
