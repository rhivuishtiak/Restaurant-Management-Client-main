import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl text-center bg-sky-100 mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">About Us</h1>
      <p className="text-gray-700 mb-4">
        Welcome to FoodieFleet, your go-to restaurant for delicious and
        mouthwatering dishes. Our mission is to provide you with a culinary
        experience like no other, with a wide range of delectable options to
        choose from.
      </p>
      <p className="text-gray-700 mb-4">
        We take pride in our commitment to using only the freshest and
        highest-quality ingredients. Our talented chefs craft each dish with
        precision and care to ensure you have an unforgettable dining
        experience.
      </p>
      <p className="text-gray-700">
        Whether you're joining us for a family dinner, a special occasion, or
        simply looking to satisfy your cravings, we're here to serve you. We
        believe in creating moments and memories through food, and we look
        forward to sharing those moments with you.
      </p>
      <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Contact Us</h1>
      <p className="text-gray-700 mb-4">
        We value your feedback and inquiries. Feel free to contact us using the
        information below or by using the contact form.
      </p>
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
        <p className="text-gray-700">
          <strong>Address:</strong> 123 Main Street, City, Country
        </p>
        <p className="text-gray-700">
          <strong>Phone:</strong> (123) 456-7890
        </p>
        <p className="text-gray-700">
          <strong>Email:</strong> info@foodiefleet.com
        </p>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Contact Form</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-semibold">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full border border-gray-300 rounded px-3 py-2"
              rows="5"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-rose-500 text-white px-4 py-2 rounded-md hover:bg-rose-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default About;
