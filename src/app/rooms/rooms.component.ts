import {
  Component,
  DoCheck,
  OnInit,
  ViewChild,
  AfterViewInit,
  AfterViewChecked,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { HeaderComponent } from '../header/header.component';

import { Room, RoomList } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent
  implements OnInit, DoCheck, AfterViewInit, AfterViewChecked
{
  hotelName = 'Hilton Hotel';

  numberOfRooms = 10;

  hideRooms = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  title = 'Room List';

  roomList: RoomList[] = [];

  @ViewChild(HeaderComponent)
  headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent)
  headerChildrenComponent!: QueryList<HeaderComponent>;

  constructor() {}

  ngOnInit(): void {
    // console.log(this.headerComponent);

    this.roomList = [
      {
        roomNumber: 1,
        roomType: 'Deluxe Room',
        amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
        price: 500,
        photos:
          'https://images.unsplash.com/photo-1690702691836-c5409092ad01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        checkInTime: new Date('11-Nov-2023'),
        checkOutTime: new Date('12-Nov-2023'),
        rating: 4.5123,
      },
      {
        roomNumber: 2,
        roomType: 'Deluxe Room',
        amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
        price: 1000,
        photos:
          'https://images.unsplash.com/photo-1690702691836-c5409092ad01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        checkInTime: new Date('11-Nov-2023'),
        checkOutTime: new Date('12-Nov-2023'),
        rating: 2.82345,
      },
      {
        roomNumber: 3,
        roomType: 'Private Suite',
        amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
        price: 15000,
        photos:
          'https://images.unsplash.com/photo-1690702691836-c5409092ad01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        checkInTime: new Date('11-Nov-2023'),
        checkOutTime: new Date('12-Nov-2023'),
        rating: 3.59876,
      },
    ];
  }

  ngDoCheck(): void {
    console.log('On changes is called');
  }

  ngAfterViewInit(): void {
    this.headerComponent.title = 'Rooms View';

    this.headerChildrenComponent.last.title = 'Last Title';
  }

  ngAfterViewChecked(): void {}

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'Rooms List';
  }

  selectedRoom!: RoomList;

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: 4,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathrooom, Kitchen',
      price: 9843,
      photos:
        'https://images.unsplash.com/photo-1690702691836-c5409092ad01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      checkInTime: new Date('11-Nov-2023'),
      checkOutTime: new Date('12-Nov-2023'),
      rating: 4.432,
    };

    this.roomList = [...this.roomList, room];
  }
}
