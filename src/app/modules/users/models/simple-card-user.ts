export class SimpleCardUser {
  id: number;
  avatar: string;
  title: string;
  subtitle: string;
  content: string;
  rol: string[];

  constructor(id: number,
    avatar: string,
    title: string,
    subtitle: string,
    content: string,
    rol: string[]) {
    this.id = id;
    this.avatar = avatar;
    this.title = title;
    this.subtitle = subtitle;
    this.content = content;
    this.rol = rol;
  }
}
