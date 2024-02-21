import { FormData } from '../components/ContactUs/ContactUs';

export const sendEmail = async (data: FormData) => {
  const apiEndpoint = '/api/email';

  try {
    const res = await fetch(apiEndpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });
    const response = await res.json();
    alert(response.message);
  } catch (err) {
    alert(err);
  }
};
