import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  addProduct() {
    alert("You pressed the button");
    throw new Error('Method not implemented.');
  }
  title = 'essentialOils';
}
