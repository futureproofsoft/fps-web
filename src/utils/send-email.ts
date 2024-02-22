import { FormData } from '../components/ContactUs/ContactUs';

export const sendEmail = async (data: FormData) => {
  const apiEndpoint = '/api/email';

  return fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  });
};
