import { ListSelectItem } from "./selectItem.model";

export default interface Vaca {
    id?: number;
    raza: string;
    peso: number;
    edad: number;
    sexo?: ListSelectItem;
}