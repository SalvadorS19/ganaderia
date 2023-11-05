import { UsuarioModel } from "@/app/models/usuario.model";

const columns = [
  {name: "Nombre", uid: "name", sortable: true},
  {name: "Usuario", uid: 'username', sortable: true},
  {name: "Edad", uid: "age", sortable: true},
  {name: "Rol", uid: "role", sortable: true},
  {name: "Equipo", uid: "team"},
  {name: "Email", uid: "email"},
  {name: "Estado", uid: "status", sortable: true},
  {name: "", uid: "actions"},
];

const statusOptions = [
  {name: "Activo", uid: "activo"},
  {name: "inactivo", uid: "inactivo"},
  {name: "Vacaciones", uid: "vacaciones"},
];

export const AppUsers: UsuarioModel[] = [
  {
      id: 1,
      name: "Salvador Sanabria",
      username: "ssanabria",
      role: "Administrador",
      team: "Desarrollo",
      status: "activo",
      age: "20",
      avatar: "https://i.pinimg.com/564x/66/54/03/665403d22f04e5b4f7bf06d1d96e8c36.jpg",
      email: "salvador@gmail.com",
  },
  {
      id: 2,
      name: "Airton Sampayo",
      username: "airtonss",
      role: "Administrador",
      team: "Desarrollo",
      status: "activo",
      age: "20",
      avatar: "https://i.pinimg.com/564x/66/54/03/665403d22f04e5b4f7bf06d1d96e8c36.jpg",
      email: "airton@gmail.com",
  }
];

export {columns, statusOptions};
