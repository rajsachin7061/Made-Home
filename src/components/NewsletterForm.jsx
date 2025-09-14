import React, { useState } from 'react';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-navy-900 py-8 px-4 text-white text-center">
      <h2 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h2>
      <form className="flex flex-col md:flex-row gap-4 justify-center items-center" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 text-black"
          required
        />
        <button
          type="submit"
          className="bg-gold-500 hover:bg-gold-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
        >
          Subscribe
        </button>
      </form>
      {submitted && <p className="mt-4 text-green-400">Thank you for subscribing!</p>}
    </section>
  );
};

export default NewsletterForm;
