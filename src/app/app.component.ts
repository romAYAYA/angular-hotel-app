import { Component } from '@angular/core';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  // template: `
  // <h1>Hello, angular from inline template</h1> // inline template
  // <p>Angular is awesome</p>
  // `,
  styleUrls: ['./app.component.scss'],
  // styles: [`h1 {color: red;}`] // its possible to write inline css too, but not recommended
})
export class AppComponent {
  title = 'hotelinventoryapp';

  role = 'User';
}
