import { Component, OnInit } from '@angular/core';
import { ChangeNumberComponent } from '../change-number/change-number.component';

@Component({
  selector: 'app-emtitter',
  standalone: true,
  imports: [ChangeNumberComponent],
  templateUrl: './emtitter.component.html',
  styleUrl: './emtitter.component.css'
})
export class EmtitterComponent implements OnInit {
  myNumber: number = 0;
  ngOnInit(): void {
  }

  onChangeNumber(): void {
    this.myNumber = Math.floor(Math.random() * 99 * 12);
  }
}
