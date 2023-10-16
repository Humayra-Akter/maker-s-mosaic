import React, { useState } from "react";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Subscribed with email: ${email}`);
    setEmail("");
  };

  return (
    <div
      data-aos="zoom-in-left"
      data-aos-duration="1000"
      className="bg-primary py-8 mt-16 text-white"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-sm mb-4">
          Stay updated with our latest products and promotions.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="flex items-center justify-center">
            <input
              type="email"
              placeholder="Your Email Address"
              className="rounded-l p-2 text-black outline-none"
              value={email}
              onChange={handleEmailChange}
            />
            <button
              type="submit"
              className="bg-accent text-primary rounded-r px-4 py-2"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewsletterSignup;
