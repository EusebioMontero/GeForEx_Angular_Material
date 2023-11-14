export class UserFromBack {
  id: number;
  login: string;
  name: string;
  mail: string;
  rol: string[];
  avatar: string;


  constructor(
    id: number,
    login:string,
    name: string,
    mail: string,
    rol: string[],
    avatar: string,
    ) {
        this.id = id;
        this.login = login;
        this.name = name;
        this.mail = mail;
        this.rol = rol;
        this.avatar = avatar;
      }
}

