import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.scss']
})
export class ConfirmDeleteComponent implements OnInit {
  public display = false;

  constructor() { }

  ngOnInit(): void {
  }

  onPress() {
    this.display = !this.display;
  }
}
