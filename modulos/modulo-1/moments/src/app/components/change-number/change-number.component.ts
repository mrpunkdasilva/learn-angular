import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-change-number',
  standalone: true,
  imports: [],
  templateUrl: './change-number.component.html',
  styleUrl: './change-number.component.css'
})
export class ChangeNumberComponent implements OnInit{
  ngOnInit(): void {
  }

  @Output() changeNumber: EventEmitter<any> = new EventEmitter();

  handleClick(): void {
    this.changeNumber.emit();
  }
}
