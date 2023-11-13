export interface ModalInfo {
    modalState: ModalState;
    onOpenChange: any;
}

export interface ModalState {
    isOpen: boolean;
    data: any;
}