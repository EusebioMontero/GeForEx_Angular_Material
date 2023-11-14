import { Component, OnInit } from '@angular/core';
import { environment } from 'environments/environment';



@Component({
  selector: 'app-crud-users',
  templateUrl: './crud-users.component.html',
  styleUrls: ['./crud-users.component.scss']
})
export class CrudUsersComponent implements OnInit{
  ngOnInit(): void {
  }
  idUser: number = 0;

  receiveId($event: any) {
   this.idUser = $event;
   console.log("Recibido: " +this.idUser);
  }
}
