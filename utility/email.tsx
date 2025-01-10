import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

const sendEmail = (e, serviceId, templateId, publicKey) => {
  emailjs.sendForm(serviceId, templateId, e.target, publicKey).then(
    (result) => {
      toast.success('Successfully Emailed', {
        position: 'bottom-left'
      });
      e.target?.reset();
    },
    (error) => {
      console.log(error.text);
      toast.error(' Failed to email', {
        position: 'bottom-left'
      });
    }
  );
};

const send = (params, serviceId, templateId, publicKey, e) => {
  emailjs.send(serviceId, templateId, params, publicKey).then(
    (result) => {
      toast.success('Successfully Emailed', {
        position: 'bottom-left'
      });
      if (e != null) {
        e.target?.reset();
      }
    },
    (error) => {
      console.log(error.text);
      toast.error(' Failed to email', {
        position: 'bottom-left'
      });
    }
  );
};
export { send, sendEmail };
