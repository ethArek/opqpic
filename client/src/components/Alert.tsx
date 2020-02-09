import React, { useState } from 'react';
// @ts-ignore
import SweetAlert from 'sweetalert2-react';

interface IProps {
  show: boolean;
  title: string;
  text: string;
  onConfirm: Function;
}

function Alert({ show, title, text, onConfirm }: IProps) {
  const [shouldShow, setShouldShow] = useState(show);

  function handleConfirm() {
    setShouldShow(false);
    onConfirm();
  }

  return (
    <SweetAlert
      show={shouldShow}
      title={title}
      text={text}
      onConfirm={handleConfirm}
    />
  );
}

export default Alert;
