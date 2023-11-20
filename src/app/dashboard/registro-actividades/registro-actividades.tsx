import "./registro-actividades.css";
import React from "react";
import {Card, CardBody } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";
import Icon from "@/app/components/icon/icon";


export default function RegistroActividades() {
    return (
      <main>
        <div className="flex">
          <div className="minimo">
            <Card className="margen">
              <CardBody>
                <h1 className="my-4 text-xl font-bold ">Tareas Asignados</h1>
                <Card className="mb-4">
                  <CardBody className="flex flex-row fondo">
                    <p>
                      Investiga sobre métodos de reproducción como la
                      inseminación artificial o la selección genética.
                    </p>
                    <Dropdown>
                      <DropdownTrigger>
                        <Button size="sm" className="w-0.5 fondo">
                          <Icon name="uil uil-angle-down"></Icon>
                        </Button>
                      </DropdownTrigger>
                      <DropdownMenu
                        aria-label="Action event example"
                        onAction={(key) => alert(key)}
                      >
                        <DropdownItem key="edit">Editar</DropdownItem>
                        <DropdownItem key="copy">Copiar</DropdownItem>
                        <DropdownItem
                          key="delete"
                          className="text-danger"
                          color="danger"
                        >
                          Eliminar
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </CardBody>
                </Card>
                <Card className="mb-4">
                  <CardBody className="flex flex-row fondo">
                    <p>
                      Calcula las necesidades nutricionales de tu ganado en
                      diferentes etapas y diseña un plan de alimentación
                      balanceada.
                    </p>
                    <Dropdown>
                      <DropdownTrigger>
                        <Button size="sm" className="w-0.5 fondo">
                          <Icon name="uil uil-angle-down"></Icon>
                        </Button>
                      </DropdownTrigger>
                      <DropdownMenu
                        aria-label="Action event example"
                        onAction={(key) => alert(key)}
                      >
                        <DropdownItem key="edit">Editar</DropdownItem>
                        <DropdownItem key="copy">Copiar</DropdownItem>
                        <DropdownItem
                          key="delete"
                          className="text-danger"
                          color="danger"
                        >
                          Eliminar
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </CardBody>
                </Card>
                <Card className="mb-4">
                  <CardBody className="flex flex-row fondo">
                    <p>
                      Crea un calendario detallado de vacunación,
                      desparasitación y revisiones veterinarias periódicas.
                    </p>
                    <Dropdown>
                      <DropdownTrigger>
                        <Button size="sm" className="w-0.5 fondo">
                          <Icon name="uil uil-angle-down"></Icon>
                        </Button>
                      </DropdownTrigger>
                      <DropdownMenu
                        aria-label="Action event example"
                        onAction={(key) => alert(key)}
                      >
                        <DropdownItem key="edit">Editar</DropdownItem>
                        <DropdownItem key="copy">Copiar</DropdownItem>
                        <DropdownItem
                          key="delete"
                          className="text-danger"
                          color="danger"
                        >
                          Eliminar
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </CardBody>
                </Card>
                <div className="flex justify-center">
                  <Button
                    className="w-80"
                    variant="bordered"
                    color="secondary"
                    size="sm"
                    radius="full"
                  >
                    Añada Una Tarjeta
                  </Button>
                </div>
              </CardBody>
            </Card>
          </div>
          <div className="minimo">
            <Card className="margen">
              <CardBody>
                <h1 className="my-4 text-xl font-bold ">Tareas En Desarrollo</h1>
                <Card className="mb-4">
                  <CardBody className="flex flex-row fondo">
                    <p>
                      Realiza un inventario exhaustivo de las instalaciones
                      existentes.
                    </p>
                    <Dropdown>
                      <DropdownTrigger>
                        <Button size="sm" className="w-0.5 fondo">
                          <Icon name="uil uil-angle-down"></Icon>
                        </Button>
                      </DropdownTrigger>
                      <DropdownMenu
                        aria-label="Action event example"
                        onAction={(key) => alert(key)}
                      >
                        <DropdownItem key="edit">Editar</DropdownItem>
                        <DropdownItem key="copy">Copiar</DropdownItem>
                        <DropdownItem
                          key="delete"
                          className="text-danger"
                          color="danger"
                        >
                          Eliminar
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </CardBody>
                </Card>
                <Card className="mb-4">
                  <CardBody className="flex flex-row fondo">
                    <p>
                      Investiga y selecciona métodos adecuados de gestión de
                      desechos animales, como compostaje, y establece un plan de
                      acción.
                    </p>
                    <Dropdown>
                      <DropdownTrigger>
                        <Button size="sm" className="w-0.5 fondo">
                          <Icon name="uil uil-angle-down"></Icon>
                        </Button>
                      </DropdownTrigger>
                      <DropdownMenu
                        aria-label="Action event example"
                        onAction={(key) => alert(key)}
                      >
                        <DropdownItem key="edit">Editar</DropdownItem>
                        <DropdownItem key="copy">Copiar</DropdownItem>
                        <DropdownItem
                          key="delete"
                          className="text-danger"
                          color="danger"
                        >
                          Eliminar
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </CardBody>
                </Card>
                <Card className="mb-4">
                  <CardBody className="flex flex-row fondo">
                    <p>
                      Diseña un plan de rotación de pastos para optimizar el uso
                      de la tierra y garantizar la disponibilidad de alimento
                      fresco y nutritivo para el ganado.
                    </p>
                    <Dropdown>
                      <DropdownTrigger>
                        <Button size="sm" className="w-0.5 fondo">
                          <Icon name="uil uil-angle-down"></Icon>
                        </Button>
                      </DropdownTrigger>
                      <DropdownMenu
                        aria-label="Action event example"
                        onAction={(key) => alert(key)}
                      >
                        <DropdownItem key="edit">Editar</DropdownItem>
                        <DropdownItem key="copy">Copiar</DropdownItem>
                        <DropdownItem
                          key="delete"
                          className="text-danger"
                          color="danger"
                        >
                          Eliminar
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </CardBody>
                </Card>
                <div className="flex justify-center">
                  <Button
                    className="w-80"
                    variant="bordered"
                    color="secondary"
                    size="sm"
                    radius="full"
                  >
                    Añada Una Tarjeta
                  </Button>
                </div>
              </CardBody>
            </Card>
          </div>
          <div className="minimo">
            <Card className="margen">
              <CardBody>
                <h1 className="my-4 text-xl font-bold ">Tareas Finalizadas</h1>
                <Card className="mb-4">
                  <CardBody className="flex flex-row fondo">
                    <p>
                      Investiga métodos de control de plagas y parásitos
                      específicos de tu área.
                    </p>
                    <Dropdown>
                      <DropdownTrigger>
                        <Button size="sm" className="w-0.5 fondo">
                          <Icon name="uil uil-angle-down"></Icon>
                        </Button>
                      </DropdownTrigger>
                      <DropdownMenu
                        aria-label="Action event example"
                        onAction={(key) => alert(key)}
                      >
                        <DropdownItem key="edit">Editar</DropdownItem>
                        <DropdownItem key="copy">Copiar</DropdownItem>
                        <DropdownItem
                          key="delete"
                          className="text-danger"
                          color="danger"
                        >
                          Eliminar
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </CardBody>
                </Card>
                <Card className="mb-4">
                  <CardBody className="flex flex-row fondo">
                    <p>
                      Investiga las razas de ganado más adecuadas para tu región
                      y objetivos de producción.
                    </p>
                    <Dropdown>
                      <DropdownTrigger>
                        <Button size="sm" className="w-0.5 fondo">
                          <Icon name="uil uil-angle-down"></Icon>
                        </Button>
                      </DropdownTrigger>
                      <DropdownMenu
                        aria-label="Action event example"
                        onAction={(key) => alert(key)}
                      >
                        <DropdownItem key="edit">Editar</DropdownItem>
                        <DropdownItem key="copy">Copiar</DropdownItem>
                        <DropdownItem
                          key="delete"
                          className="text-danger"
                          color="danger"
                        >
                          Eliminar
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </CardBody>
                </Card>
                <Card className="mb-4">
                  <CardBody className="flex flex-row fondo">
                    <p>
                      Desarrolla un plan financiero que incluya costos
                      operativos, inversión inicial, proyecciones de ingresos y
                      gastos a corto y largo plazo.
                    </p>
                    <Dropdown>
                      <DropdownTrigger>
                        <Button size="sm" className="w-0.5 fondo">
                          <Icon name="uil uil-angle-down"></Icon>
                        </Button>
                      </DropdownTrigger>
                      <DropdownMenu
                        aria-label="Action event example"
                        onAction={(key) => alert(key)}
                      >
                        <DropdownItem key="edit">Editar</DropdownItem>
                        <DropdownItem key="copy">Copiar</DropdownItem>
                        <DropdownItem
                          key="delete"
                          className="text-danger"
                          color="danger"
                        >
                          Eliminar
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </CardBody>
                </Card>
                <div className="flex justify-center">
                  <Button
                    className="w-80"
                    variant="bordered"
                    color="secondary"
                    size="sm"
                    radius="full"
                  >
                    Añada Una Tarjeta
                  </Button>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </main>
    );
}
