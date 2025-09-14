import React from 'react';

const agents = [
  {
    name: 'Sarah Johnson',
    photo: '/agent-sarah.jpg', // Placeholder image
    contact: 'sarah@luxrealty.com',
  },
  {
    name: 'Michael Lee',
    photo: '/agent-michael.jpg',
    contact: 'michael@luxrealty.com',
  },
  {
    name: 'Emily Chen',
    photo: '/agent-emily.jpg',
    contact: 'emily@luxrealty.com',
  },
];

const About = () => {
  return (
    <section className="py-12 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">About Us</h2>
      <div className="mb-8 text-center">
        <p className="text-lg mb-4">
          <span className="font-semibold">LuxRealty</span> was founded with a vision to redefine luxury real estate. Our mission is to help clients find their dream homes and investment properties with trust, transparency, and expertise.
        </p>
        <p className="mb-2">
          <span className="font-bold">Vision:</span> To be the leading real estate agency for luxury properties worldwide.
        </p>
        <p>
          <span className="font-bold">Mission:</span> Deliver exceptional service, build lasting relationships, and make every property transaction seamless and rewarding.
        </p>
      </div>
      <h3 className="text-2xl font-semibold mb-4 text-center">Meet Our Agents</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {agents.map((agent, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
            <img
              src={agent.photo}
              alt={agent.name}
              className="w-24 h-24 object-cover rounded-full mb-4 border-4 border-blue-600"
            />
            <h4 className="text-lg font-bold mb-2">{agent.name}</h4>
            <a
              href={`mailto:${agent.contact}`}
              className="text-blue-600 hover:underline"
            >
              {agent.contact}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
