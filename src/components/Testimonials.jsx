import React from 'react';

const testimonials = [
  {
    name: 'John Doe',
    review: 'LuxRealty helped me find my dream home! Professional, friendly, and efficient service.',
  },
  {
    name: 'Jane Smith',
    review: 'The team at LuxRealty made the buying process smooth and stress-free. Highly recommended!',
  },
  {
    name: 'Carlos Martinez',
    review: 'Excellent market knowledge and great communication. I felt supported every step of the way.',
  },
];

const Testimonials = () => (
  <section className="bg-gray-100 py-12 px-4">
    <h2 className="text-2xl font-bold mb-8 text-center text-navy-900">What Our Clients Say</h2>
    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      {testimonials.map((t, idx) => (
        <div key={idx} className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
          <div className="text-lg font-semibold mb-2">{t.name}</div>
          <p className="text-gray-700 italic text-center">"{t.review}"</p>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
