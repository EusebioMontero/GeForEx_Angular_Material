export class JwtDTO {
    token!: string;
    type!: string;
    login!: string;
    userId!: number;
    authorities!: string[];
}
