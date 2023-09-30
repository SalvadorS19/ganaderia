import "./registro-animales.css";
import Vaca from "@/app/models/vaca.model";
import Icon from "@/app/components/icon/icon";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import { useState } from "react";
import { Modal, ModalContent, ModalBody, ModalHeader, ModalFooter } from "@nextui-org/modal";
import { ListSelectItem } from "@/app/models/selectItem.model";


export default function RegistroAnimales() {

  const [isOpenAgregar, setIsOpenAgregar] = useState(false);

  const sexoItems: ListSelectItem[]  = [
    { label: 'Macho', value: 'M' },
    { label: 'Hembra', value: 'F' }
  ]

  let [vacas, setVacas]: [Vaca[], any] = useState([
    { id: 1, edad: 12, peso: 12, raza: "Sanabria" },
    { id: 2, edad: 14, peso: 14, raza: "Sanabria" },
    { id: 3, edad: 16, peso: 14, raza: "Sanabria" },
    { id: 4, edad: 18, peso: 14, raza: "Sanabria" }
  ]);

  function tarjetaVaca(vaca: Vaca) {
    return (
      <div className="card" key={vaca.id}>
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
            <p>{ vaca.sexo?.label }</p>
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

  function AgregarAnimal() {

    const [razaVaca, setRazaVaca] = useState('');
    const [edadVaca, setEdadVaca] = useState('');
    const [pesoVaca, setPesoVaca] = useState('');
    const [sexoVaca, setSexoVaca] = useState('');

    function guardarVaca() {
      const sexo = sexoItems.find(s => s.value === sexoVaca);
      const newVaca: Vaca = {
        edad: Number(edadVaca),
        raza: razaVaca,
        peso: Number(pesoVaca),
        sexo
      }
      setVacas([...vacas, newVaca]);
      setIsOpenAgregar(false);
    }

    function onOpenChange(event: any) {
      setIsOpenAgregar(event);
    }

    return (
        <>
          <Modal isOpen={isOpenAgregar} onOpenChange={onOpenChange}>
            <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">Registrar animal</ModalHeader>
                <ModalBody>
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
                    <Select 
                      items={sexoItems}
                      selectedKeys={sexoVaca}
                      onSelectionChange={(keys: any) => setSexoVaca(keys.currentKey)}
                      label="Seleccione el sexo"
                    >
                      {sexoItems.map((sexo) => (
                        <SelectItem key={sexo.value} value={sexo.value}>
                          {sexo.label}
                        </SelectItem>
                      ))}
                    </Select>
                  </form>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Cerrar
                  </Button>
                  <Button color="primary" onPress={guardarVaca}>
                    Guardar
                  </Button>
                </ModalFooter>
              </>
            )}
            </ModalContent>
          </Modal>
        </>
      );
  }

  return (
    <>
      <div className="flex justify-end w-full mb-6">
        <Button 
          title="Registrar animal" 
          color="primary" 
          endContent={<Icon name="plus"></Icon>}
          onPress={()=> setIsOpenAgregar(true)}
        >Agregar</Button>
      </div>

      <div className="flex flex-wrap gap-y-5 justify-around">
        {vacas.map((vaca) => tarjetaVaca(vaca))}
      </div>
      <AgregarAnimal></AgregarAnimal>
    </>  
  );
}
