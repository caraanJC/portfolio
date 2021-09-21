import axios from 'axios';
import { useState } from 'react';

export const ContactLogic = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [sender, setSender] = useState({
    name: '',
    email: '',
    message: '',
  });

  const openSubmitForm = () => {
    setIsFormOpen(true);
  };
  const closeSubmitForm = () => {
    setIsFormOpen(false);
  };
  const pressEscape = (e) => {
    if (e.keyCode === 27) {
      setIsFormOpen(false);
    }
  };
  const inputChange = (e) => {
    setSender({
      ...sender,
      [e.target.name]: e.target.value,
    });
  };
  const submitForm = (e) => {
    e.preventDefault();

    axios.post(
      'https://johncarlo-portfolio-backend.herokuapp.com/api/messages/sendMessage',
      {
        ...sender,
        isRead: false,
      }
    );

    setSender({
      name: '',
      email: '',
      message: '',
    });
    setIsFormOpen(false);
  };

  return {
    isFormOpen,
    sender,
    openSubmitForm,
    closeSubmitForm,
    pressEscape,
    inputChange,
    submitForm,
  };
};
