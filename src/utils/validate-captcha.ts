export const validateCaptcha = async (data: string) => {
  const apiEndpoint = '/api/recaptcha';

  return fetch(apiEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token: data }),
  })
    .then((res) => res.json())
    .catch((err) => {
      alert('Error validating CAPTCHA: ' + err.message);
    });
};
