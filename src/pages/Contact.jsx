import React from 'react';

const Contact = () => {
  return (
    <section className="py-12 px-4 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
            required
          />
          <input
            type="tel"
            placeholder="Your Phone"
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          />
          <textarea
            placeholder="Your Message"
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
            rows={4}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="rounded-lg overflow-hidden shadow-lg">
        <iframe
          title="Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537363153169!3d-37.81720997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f1f1f1%3A0x5045675218ce6e0!2sYour%20Office%20Location!5e0!3m2!1sen!2sus!4v1631234567890!5m2!1sen!2sus"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
