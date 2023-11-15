import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { ModalInfo } from "@/app/models/modalState.model";

export default function EliminarTrabajador({modalState, onOpenChange}: ModalInfo) {

  return (
    <Modal isOpen={modalState.isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Confirmación requerida</ModalHeader>
            <ModalBody>
              <p> 
                ¿Está seguro de eliminar el usuario?
              </p>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" onPress={onClose}>
                Si
              </Button>
              <Button color="default" onPress={onClose}>
                No
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}