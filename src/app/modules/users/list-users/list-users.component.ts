import { Component, Output, EventEmitter } from '@angular/core';
import { SimpleCardUser } from '../models/simple-card-user';
import { UsersService } from '../services/users.service';


@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent {



  cardsUser: SimpleCardUser[] = [];
  userId: number =0;

  @Output() messageEvent  = new EventEmitter<number>();

  constructor(
    private userService: UsersService,
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe(
      data => {
        data.forEach(e => {
          this.cardsUser.push(new SimpleCardUser(
            e.id,
            e.avatar,
            // "https://cdn.pixabay.com/photo/2023/01/26/08/21/office-7745317_1280.png",
            e.name,
            e.mail,
            e.login,
            e.rol));
        });
      });
  }
  onDetailClick(id: number) {
    this.messageEvent.emit(id);
    console.log("click id: " + id);
  }

}
