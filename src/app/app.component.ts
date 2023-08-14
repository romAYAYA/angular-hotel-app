import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

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
export class AppComponent implements OnInit {
  title = 'hotelinventoryapp';

  @ViewChild('name', { static: true }) name!: ElementRef;

  ngOnInit() {
    this.name.nativeElement.innerText = 'Hilton Hotel';
  }

  // @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  // ngAfterViewInit() {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.numberOfRooms = 50
  // }
}
