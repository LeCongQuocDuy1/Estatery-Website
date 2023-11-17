import React from "react";
import { useAppStore } from "~/store/useAppStore";

const Modal = () => {
    const { contentModal, setModal } = useAppStore();
    return (
        <div
            onClick={() => setModal(false, null)}
            className="fixed flex justify-center inset-0 bg-overlay2 z-30"
        >
            {contentModal}
        </div>
    );
};

export default Modal;
