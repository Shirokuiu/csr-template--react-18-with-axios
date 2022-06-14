import React from 'react';
import { useModal } from 'react-simple-modal-provider';

import TestModalBody from 'src/components/containers/test-modal/test-modal-body/test-modal-body';
import { ModalId } from 'src/constants/modal';

function ExampleTriggerModal() {
  const { open } = useModal(ModalId.TestModal);

  const handleOpenModal = () => {
    open({
      component: <TestModalBody title="Hello from test modal content" />,
    });
  };

  return (
    <button type="button" onClick={handleOpenModal}>
      Open modal
    </button>
  );
}

export default ExampleTriggerModal;
