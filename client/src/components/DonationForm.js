import React, { useState } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import ReCAPTCHA from "react-google-recaptcha";

const DonationForm = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [captcha, setCaptcha] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (captcha) {
      const { token } = await props.stripe.createToken();
      // Use the token to create a charge on your server
    } else {
      alert('Please complete the CAPTCHA');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <CardElement />
      <ReCAPTCHA
        sitekey="your-recaptcha-site-key"
        onChange={() => setCaptcha(true)}
      />
      <button type="submit">Donate</button>
    </form>
  );
};

export default injectStripe(DonationForm);
