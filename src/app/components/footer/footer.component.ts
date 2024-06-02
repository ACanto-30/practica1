import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {IonFooter, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonIcon, NavController } from "@ionic/angular/standalone";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [
    IonFooter,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonButtons,
    IonIcon
  ],
  standalone: true
})

export class FooterComponent {

  constructor(private navCtrl: NavController) { }

  goToHome(){
    this.navCtrl.navigateForward("/home");
  }

  goToComingSoon(){
    this.navCtrl.navigateForward("/comingsoon");
  }

  goToProfile(){
    this.navCtrl.navigateForward("/profile");
  }

}
