"use client";
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { IoCheckmarkCircleOutline, IoCloseCircleOutline, IoMail } from "react-icons/io5";
import { motion } from 'framer-motion';

export default function Email() {
  const form = useRef();
  const [alert, setAlert] = useState({ visible: false, message: '', type: '' });
  const service_id = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const template_id = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const public_key = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(service_id, template_id, form.current, public_key)
      .then((result) => {
        if (result.text === 'OK') {
          setAlert({ visible: true, message: 'E-mail enviado com sucesso', type: 'success' });
        } else {
          setAlert({ visible: true, message: 'Erro ao enviar e-mail', type: 'error' });
        }
      }, (error) => {
        setAlert({ visible: true, message: 'Erro ao enviar e-mail', type: 'error' });
      });
  };

  useEffect(() => {
    if (alert.visible) {
      const timer = setTimeout(() => {
        setAlert({ visible: false, message: '', type: '' });
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [alert]);
  
  return (
    <>
      {alert.visible && (
        <button onClick={() => setAlert({ visible: false, message: '', type: '' })} className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg flex items-center ${alert.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {alert.type === 'success' ? <IoCheckmarkCircleOutline className='mr-2 lg:text-2xl' /> : <IoCloseCircleOutline className='mr-2 lg:text-2xl' />}
          {alert.message}
        </button>
      )}
      <motion.form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-2 text-[#333333]"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.6 }}
      >
        <div className="flex items-center text-custom-blue">
          <IoMail className="text-2xl mr-2" />
          <h4 className="text-lg">E-mail</h4>
        </div>
        <input
          type="text"
          name='user_name'
          placeholder="Nome"
          className="form-input rounded text-sm lg:text-base"
          required
        />
        <input
          type="email"
          name='user_email'
          placeholder="E-mail"
          className="form-input rounded text-sm lg:text-base"
          required
        />
        <input 
          type='tel'
          name='phone'
          placeholder='Telefone'
          className="form-input rounded text-sm lg:text-base"
          pattern='[0-9]{2}[0-9]{9}'
        />
        <textarea
          name="message"
          placeholder="Inserir texto"
          className="form-input rounded h-32 text-sm lg:text-base"
          required
        />
        <button
          className="w-32 bg-custom-blue rounded mt-2 font-bold text-custom-beige p-2 lg:text-lg"
          type='submit'
          value='Send'
        >
          Enviar
        </button>
      </motion.form>
    </>
  );
}
