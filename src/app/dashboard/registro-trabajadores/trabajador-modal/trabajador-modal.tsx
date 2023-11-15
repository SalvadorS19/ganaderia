import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/modal";
import { Input } from "@nextui-org/input";
import { Button} from "@nextui-org/button";
import { EmptyUsuarioModel, UsuarioModel } from "@/app/models/usuario.model";
import { useLayoutEffect, useState } from "react";
import { API_METHODS, POST } from "@/app/util/fetching";
import { ModalInfo } from "@/app/models/modalState.model";

export default function TrabajadorModal({modalState, onOpenChange, onSave}: ModalInfo) {

  const [usuarioForm, setUsuarioForm]: [UsuarioModel, Function] = useState(EmptyUsuarioModel());

  useLayoutEffect(() => {
    if (modalState.data) {
      setUsuarioForm(modalState.data)
    } else {
      setUsuarioForm(EmptyUsuarioModel)
    }
  }, [modalState.data])

  function handleUsuarioForm(event: any) {
    const {name, value} = event.target;
    setUsuarioForm((prevFormData: UsuarioModel) => ({
      ...prevFormData,
      [name]: value,
    }));   
  }

  async function submitUsuarioForm(onClose: Function) {
    const body = JSON.stringify(usuarioForm);
    console.log(body);
    await fetch(API_METHODS.user.default, { ...POST, body })
      .then((response) => response.text())
      .then((data) => {
        onClose();
        if (onSave) {
          onSave();
        }
      })
      .catch((error) => console.log(error));
  }
    
    return (
        <Modal 
          isOpen={modalState.isOpen} 
          onOpenChange={onOpenChange}
          placement="top-center"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">Crear/editar trabajador</ModalHeader>
                <ModalBody>
                  <Input
                    label="Nombre"
                    name="name"
                    value={usuarioForm.name}
                    placeholder="Nombre apellido"
                    variant="bordered"
                    onChange={handleUsuarioForm}
                  />
                  <Input
                    label="Usuario"
                    placeholder="Ingrese el usuario"
                    name="username"
                    type="text"
                    value={usuarioForm.username}
                    variant="bordered"
                    onChange={handleUsuarioForm}
                  />
                  <Input
                    label="Contraseña"
                    placeholder="Ingrese la contraseña"
                    name="password"
                    type="text"
                    value={usuarioForm.password}
                    variant="bordered"
                    onChange={handleUsuarioForm}
                  />
                  <Input
                    label="Rol"
                    placeholder="Ingrese el rol"
                    name="role"
                    type="text"
                    value={usuarioForm.role}
                    variant="bordered"
                    onChange={handleUsuarioForm}
                  />
                  <Input
                    label="Equipo"
                    placeholder="Ingresar equipo"
                    name="team"
                    type="text"
                    value={usuarioForm.team}
                    variant="bordered"
                    onChange={handleUsuarioForm}
                  />
                  <Input
                    label="Edad"
                    placeholder="Ingresar edad"
                    name="age"
                    type="text"
                    value={usuarioForm.age?.toString()}
                    variant="bordered"
                    onChange={handleUsuarioForm}
                  />
                  <Input
                    label="Foto"
                    placeholder="Url de la imagen"
                    name="avatar"
                    type="text"
                    value={usuarioForm.avatar}
                    variant="bordered"
                    onChange={handleUsuarioForm}
                  />
                  <Input
                    label="Email"
                    placeholder="Ingrese el email"
                    name="email"
                    type="text"
                    value={usuarioForm.email}
                    variant="bordered"
                    onChange={handleUsuarioForm}
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="flat" onPress={onClose}>
                    Cerrar
                  </Button>
                  <Button color="primary" onPress={()=>submitUsuarioForm(onClose)}>
                    Guardar
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
    );
  }