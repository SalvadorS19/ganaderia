import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/modal";
import { Input } from "@nextui-org/input";
import { Button} from "@nextui-org/button";
import { useState } from "react";
import { API_METHODS, POST } from "@/app/util/fetching";

export default function EditarArticulo({isOpen, onOpenChange}: any) {
 
    const [articuloForm, setArticuloForm]: [any, Function] = useState();

    function handleArticuloForm(event: any) {
        const {name, value} = event.target;
        setArticuloForm((prevFormData: any) => ({
            ...prevFormData,
            [name]: value,
        }));   
    }

    async function submitArticuloForm(onClose: Function) {
      const body = JSON.stringify(articuloForm);

      await fetch(API_METHODS.user.default, { ...POST, body })
        .then((response) => response.text())
        .then((data) => {
          console.log(data);
          onClose();
        })
        .catch((error) => console.log(error));
    }
    
    return (
        <Modal 
          isOpen={isOpen} 
          onOpenChange={onOpenChange}
          placement="top-center"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">Crear/editar articulo</ModalHeader>
                <ModalBody>
                  <Input
                    label="Nombre"
                    name="name"
                    placeholder="Ingresar nombre"
                    variant="bordered"
                    onChange={handleArticuloForm}
                  />
                  <Input
                    label="Cantidad"
                    name="amount"
                    placeholder="Ingresar cantidad actual"
                    variant="bordered"
                    onChange={handleArticuloForm}
                  />
                  <Input
                    label="Vencimiento"
                    name="expiration"
                    placeholder="YYYY-MM-DD"
                    variant="bordered"
                    onChange={handleArticuloForm}
                  />
                  <Input
                    label="Categoria"
                    name="category"
                    placeholder="Ingresar categoria"
                    variant="bordered"
                    onChange={handleArticuloForm}
                  />
                  <Input
                    label="Imagen"
                    name="picture"
                    placeholder="URL de la imagen"
                    variant="bordered"
                    onChange={handleArticuloForm}
                  />
                  <Input
                    label="Proveedor"
                    name="supplier"
                    placeholder="Proveedor del articulo"
                    variant="bordered"
                    onChange={handleArticuloForm}
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="flat" onPress={onClose}>
                    Cerrar
                  </Button>
                  <Button color="primary" onPress={()=>{submitArticuloForm(onClose)}}>
                    Guardar
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
    );
  }