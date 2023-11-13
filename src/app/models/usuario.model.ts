export interface UsuarioModel {
    id?: number;
    name: string;
    username: string;
    password?: string;
    role: string;
    team: string;
    status: string;
    age: number | string;
    avatar: string;
    email: string;
}