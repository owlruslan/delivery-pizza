import { Component, OnInit } from '@angular/core';

const items = [
  {
    id: 1,
    header: 'First header',
    text: 'First item'
  },
  {
    id: 2,
    header: 'Second header',
    text: 'Second item'
  },
  {
    id: 3,
    header: 'Third header',
    text: 'Third item'
  }
];

@Component({
  selector: 'app-delivery-home',
  templateUrl: './delivery-home.component.html',
  styleUrls: ['./delivery-home.component.css']
})
export class DeliveryHomeComponent {
  items: any = [];
  constructor() {
    this.items = items;
  }
}
