import { Component, OnInit } from '@angular/core';
import { IonButtons } from "@ionic/angular/standalone";


@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.scss'],
  standalone: true,
  imports: [
    IonButtons,
    BotonesComponent
  ],
})
export class BotonesComponent {

  constructor() { }

  

}
