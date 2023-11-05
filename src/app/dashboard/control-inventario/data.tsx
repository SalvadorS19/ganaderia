const columns = [
  {name: "Nombre", uid: "name", sortable: true},
  {name: "Tipo", uid: "status", sortable: true},
  {name: "Cantidad", uid: "amount", sortable: true},
  {name: "Vencimiento", uid: "expiration"},
  {name: "Proveedor", uid: "supplier"},
  {name: "Acciones", uid: "actions"}
];

const statusOptions = [
  {name: "Suministro", uid: "suministro"},
  {name: "Medicamento", uid: "medicamento"},
  {name: "Otros", uid: "otros"},
];

const users = [
  {
    id: 1,
    name: "Mono Suministro",
    amount: "5",
    expiration: "28/10/2023",
    status: "suministro",
    avatar: "https://i.pinimg.com/564x/97/41/b6/9741b696a51042a543a4bfc961163daf.jpg",
    supplier: "CocaCola",
  },
  {
    id: 2,
    name: "Mono Suministro",
    amount: "5",
    expiration: "28/10/2023",
    status: "medicamento",
    avatar: "https://i.pinimg.com/564x/97/41/b6/9741b696a51042a543a4bfc961163daf.jpg",
    supplier: "CocaCola",
  },
  {
    id: 3,
    name: "Mono Suministro",
    amount: "5",
    expiration: "28/10/2023",
    status: "suministro",
    avatar: "https://i.pinimg.com/564x/97/41/b6/9741b696a51042a543a4bfc961163daf.jpg",
    supplier: "CocaCola",
  },
  {
    id: 4,
    name: "Mono Suministro",
    amount: "5",
    expiration: "28/10/2023",
    status: "otros",
    avatar: "https://i.pinimg.com/564x/97/41/b6/9741b696a51042a543a4bfc961163daf.jpg",
    supplier: "CocaCola",
  },
  {
    id: 5,
    name: "Mono Suministro",
    amount: "5",
    expiration: "28/10/2023",
    status: "suministro",
    avatar: "https://i.pinimg.com/564x/97/41/b6/9741b696a51042a543a4bfc961163daf.jpg",
    supplier: "CocaCola",
  },
  {
    id: 6,
    name: "Mono Suministro",
    amount: "5",
    expiration: "28/10/2023",
    avatar: "https://i.pinimg.com/564x/97/41/b6/9741b696a51042a543a4bfc961163daf.jpg",
    supplier: "CocaCola",
    status: "suministro",
  },
  {
    id: 7,
    name: "Mono Suministro",
    amount: "5",
    expiration: "28/10/2023",
    status: "medicamento",
    avatar: "https://i.pinimg.com/564x/97/41/b6/9741b696a51042a543a4bfc961163daf.jpg",
    supplier: "CocaCola",
  },
  {
    id: 8,
    name: "Mono Suministro",
    amount: "5",
    expiration: "28/10/2023",
    status: "suministro",
    avatar: "https://i.pinimg.com/564x/97/41/b6/9741b696a51042a543a4bfc961163daf.jpg",
    supplier: "CocaCola",
  },
  {
    id: 9,
    name: "Mono Suministro",
    amount: "5",
    expiration: "28/10/2023",
    status: "otros",
    avatar: "https://i.pinimg.com/564x/97/41/b6/9741b696a51042a543a4bfc961163daf.jpg",
    supplier: "CocaCola",
  },
  {
    id: 10,
    name: "Mono Suministro",
    amount: "5",
    expiration: "28/10/2023",
    status: "suministro",
    avatar: "https://i.pinimg.com/564x/97/41/b6/9741b696a51042a543a4bfc961163daf.jpg",
    supplier: "CocaCola",
  },
];

export {columns, users, statusOptions};
