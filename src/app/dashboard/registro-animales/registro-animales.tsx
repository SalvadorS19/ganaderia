import Vaca from "@/app/models/vaca.model";
import "./registro-animales.css";
import { Button } from "@nextui-org/button";
import Icon from "@/app/components/icon/icon";

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
            alt="Imagen"
          />
        </section>
        <section className="card-content">
          <div className="flex gap-1">
            <h2 className="font-medium">Raza:</h2>
            <p>{ vaca.raza }</p>
          </div>
          <div className="flex gap-1">
            <h2 className="font-medium">Peso:</h2>
            <p>{ vaca.peso } Kg</p>
          </div>
          <div className="flex gap-1">
            <h2 className="font-medium">Edad:</h2>
            <p>{ vaca.edad } Meses</p>
          </div>
          <div className="flex gap-1">
            <h2 className="font-medium">Sexo:</h2>
            <p>{ vaca.sexo }</p>
          </div>
        </section>
        <section className="card-footer">
          <Button isIconOnly color="primary" title="Eliminar animal">
            <Icon name="pen"></Icon>
          </Button>
          <Button isIconOnly color="danger" title="Eliminar animal">
            <Icon name="times"></Icon>
          </Button>
        </section>
      </div>
    );
  }

  return (
    <>
      <div className="flex justify-end w-full mb-6">
        <Button 
        title="Registrar animal" 
        color="primary" 
        endContent={<Icon name="plus"></Icon>}
        >Agregar</Button>
      </div>

      <div className="flex flex-wrap gap-y-5 justify-around">
        {vacas.map((vaca) => tarjetaVaca(vaca))}
      </div> 
    </>
      
    );
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
  
}
