import React from 'react';
import Modal, { modalAnimation, useModalState } from 'react-simple-modal-provider';

import ModalLayoutBody from 'src/components/layouts/modal-layout-body/modal-layout-body';
import { ModalId } from 'src/constants/modal';
import { ModalProps } from 'src/type/modal';

function TestModal({ children }: ModalProps) {
  const [isOpen, setOpen] = useModalState();

  return (
    <Modal
      id={ModalId.TestModal}
      consumer={children}
      animation={modalAnimation.slideDown}
      isOpen={isOpen}
      setOpen={setOpen}
    >
      <ModalLayoutBody modalId={ModalId.TestModal} />
    </Modal>
  );
}

export default TestModal;
