import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";
import { Input } from '@angular/core';
import { Product } from 'app/class/product';

@Component({
  selector: 'app-produc-edit',
  templateUrl: './produc-edit.component.html',
  styleUrls: ['./produc-edit.component.scss'],
  animations: [
    trigger('edit', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]
})
export class ProducEditComponent implements OnInit {
  @Input() edit: boolean;
  @Input() product: any;
  @Input() categories: any[];
  @Input() status: any[];
  buttonDisabled = true;
  
  constructor() { }

  ngOnInit(): void {
    
  }
  close() {
    this.edit = false;
    this.product = [];

  }

}
