import Vaca from "@/app/models/vaca.model";
import "./registro-animales.css";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

export default function RegistroAnimales() {
  let vacas: Vaca[] = [
    { id: 1, edad: 12, peso: 12, raza: "Sanabria", sexo: "Hembra" },

    { id: 2, edad: 14, peso: 14, raza: "Sanabria", sexo: "Hembra" },

    { id: 3, edad: 16, peso: 14, raza: "Sanabria", sexo: "Hembra" },

    { id: 4, edad: 18, peso: 14, raza: "Sanabria", sexo: "Hembra" },
  ];

  function tarjetaVaca(vaca: Vaca) {
    return (
      <div className="card">
        <section className="card-top-img">
          <img
            src="https://i.pinimg.com/564x/cf/4d/32/cf4d32d0b8cfc5ff947366c9be7a42d2.jpg"
            alt=""
          />
        </section>
        <section className="card-content">
          <div className="flex mb-3">
            <div className="mr-3">
              <div className="flex">
                <h2 className="mr-2 font-medium mb-2">Raza:</h2>
                <p>{vaca.raza}</p>
              </div>
              <div className="flex">
                <h2 className="mr-2 font-medium">Peso:</h2>
                <p>{vaca.peso}</p>
                <p className="ml-1">Kg</p>
              </div>
            </div>
            <div>
              <div className="flex">
                <h2 className="mr-2 font-medium mb-2">Edad:</h2>
                <p>{vaca.edad}</p>
                <p className="ml-1">Meses</p>
              </div>
              <div className="flex">
                <h2 className="mr-2 font-medium">Sexo:</h2>
                <p>{vaca.sexo}</p>
              </div>
            </div>
          </div>
          <div className="flex gap-3 justify-end">
            <Button color="danger">Eliminar</Button>
            <Button color="primary">Modificar</Button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="flex justify-end">
        <Button color="primary">Registrar Animal</Button>
      </div>

      <div className="grid grid-cols-3 gap-5 my-5 justify-evenly">
          {vacas.map((vaca) => tarjetaVaca(vaca))}
      </div> 
    </div>

    // <div className="tabview-container">
    //     <h1 className="mb-5 text-xl font-bold text-center m-5">Registro Animal</h1>
    //     <form className="tabview-form">
    //         <Input
    //             type="text"
    //             label="Raza"
    //             required
    //         ></Input>
    //         <Input
    //             type="text"
    //             label="Edad"
    //             required
    //         ></Input>
    //         <Input
    //             type="text"
    //             label="Peso"
    //             required
    //         ></Input>
    //         <Button
    //             startContent={<i className="uil uil-upload"></i>}
    //             color="primary"
    //         >Carga historial clinico</Button>
    //         <Input
    //             type="text"
    //             label="Cantidad de partos"
    //             required
    //         ></Input>
    //         <Button color="primary">Registrar Vaca</Button>
    //     </form>
    // </div>
  );
}
