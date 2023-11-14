import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detail-users',
  templateUrl: './detail-users.component.html',
  styleUrls: ['./detail-users.component.scss']
})
export class DetailUsersComponent {

  @Input() idUser: number =0;
//  idUser: number = 0;

//  receiveMessage($event: any) {
//   this.idUser = $event;
// }
 constructor() {}

}
