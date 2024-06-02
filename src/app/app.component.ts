import { Component } from '@angular/core';
import {IonApp, IonContent, IonFooter, IonHeader, IonRouterOutlet, IonToolbar} from '@ionic/angular/standalone';
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, FooterComponent, HeaderComponent, IonHeader, IonContent, IonFooter, IonToolbar],
})
export class AppComponent {
  constructor() {}
}
