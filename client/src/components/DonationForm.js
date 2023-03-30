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



// HOW TO REGISTER FOR FREEE
// HOW TO REGISTER FOR FREEE
// HOW TO REGISTER FOR FREEE

// NO.1 Stripe:
// Stripe is a payment processing platform, and it has a pay-as-you-go pricing model. You'll need a Stripe account to obtain your API keys and process payments.
// Sign up for a Stripe account here: https://dashboard.stripe.com/register

// Refer to Stripe's pricing details here: https://stripe.com/pricing

// NO. 2 Google reCAPTCHA:
// Google reCAPTCHA is a free service to protect your website from spam and abuse. It helps ensure that only humans can interact with your website by solving the CAPTCHA challenge.
// Sign up for a Google reCAPTCHA account here: https://www.google.com/recaptcha/admin/create

// Although Google reCAPTCHA is free to use, there are some usage limits. You can find more details here: https://developers.google.com/recaptcha/docs/faq

// Once you've signed up for these services, you can obtain the necessary API keys and site keys to integrate them into your React application as described in the previous response.