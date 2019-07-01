import React, { useState, createContext } from 'react';
import Modal from 'react-modal';

import { GameModal } from '../components/Games';

const ModalContext = createContext({
  isModalOpen: false,
  openModal: () => {},
  closeModal: () => {},
  modalContent: '',
  updateModalContent: () => {},
});

const ModalProvider = ({ children }) => {
  const [isModalOpen, setModalState] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const openModal = () => setModalState(true);
  const closeModal = () => setModalState(false);
  const updateModal = game => setModalContent(game);

  const contextProvider = {
    isModalOpen,
    openModal,
    closeModal,
    modalContent,
    updateModal,
  };

  return (
    <ModalContext.Provider value={contextProvider}>
      {children}

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="modal-wrapper"
        overlayClassName="modal-overlay"
        contentLabel="Game Details"
      >
        {modalContent && <GameModal game={modalContent} />}
      </Modal>
    </ModalContext.Provider>
  );
};

Modal.setAppElement('#root');

export { ModalContext, ModalProvider };
