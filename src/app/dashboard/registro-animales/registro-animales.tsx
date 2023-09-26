import "./registro-animales.css";
import Vaca from "@/app/models/vaca.model";
import Icon from "@/app/components/icon/icon";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import { useState } from "react";

export default function RegistroAnimales() {

  let [razaVaca, setRazaVaca] = useState('');
  let [edadVaca, setEdadVaca] = useState('');
  let [pesoVaca, setPesoVaca] = useState('');

  let [vacas, setVacas] = useState([
    { edad: 12, peso: 12, raza: "Sanabria", sexo: "Hembra" },
    { edad: 14, peso: 14, raza: "Sanabria", sexo: "Hembra" },
    { edad: 16, peso: 14, raza: "Sanabria", sexo: "Hembra" },
    { edad: 18, peso: 14, raza: "Sanabria", sexo: "Hembra" }
  ]);

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

  function guardarVaca() {
    const vaca: any = {
      raza: razaVaca,
      peso: Number(pesoVaca),
      edad: Number(edadVaca)
    }
    setVacas(vacas => [...vacas, vaca]);
    setRazaVaca('');
    setPesoVaca('');
    setEdadVaca('');
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

      <div className="flex gap-5">
        <div className="grow">
          <div className="flex flex-wrap gap-y-5 justify-around">
            {vacas.map((vaca) => tarjetaVaca(vaca))}
          </div>
        </div>
        <div className="card p-3 max-h-[500px] min-w-[250px]">
          <h1 className="mb-5 text-xl font-bold text-center m-5">Registro Animal</h1>
            <form className="tabview-form">
              <Input
                type="text"
                label="Raza"
                value={razaVaca}
                onValueChange={setRazaVaca}
                required
              ></Input>
              <Input
                type="number"
                label="Edad (meses)"
                value={edadVaca}
                onValueChange={setEdadVaca}
                required
              ></Input>
              <Input
                type="number"
                label="Peso (kg)"
                value={pesoVaca}
                onValueChange={setPesoVaca}
                required
              ></Input>
              {/* <Button
                  startContent={<i className="uil uil-upload"></i>}
                  color="primary"
              >Carga historial clinico</Button> */}
              <Select label="Seleccione el sexo" className="max-w-xs">
                <SelectItem key="male" value="male">Macho</SelectItem>
                <SelectItem key="female" value="female">Hembra</SelectItem>
              </Select>
              <Button color="primary" onPress={guardarVaca}>Registrar Vaca</Button>
          </form>
        </div>
      </div> 
    </>  
  );
}
