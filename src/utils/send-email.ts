import { FormData } from '../components/ContactUs/ContactUs';

export const sendEmail = (data: FormData, callback: () => void) => {
  const apiEndpoint = '/api/email';

  fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      alert(response.message);
      callback();
    })
    .catch((err) => {
      alert(err);
      callback();
    });
};
