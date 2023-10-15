import React, { useState } from "react";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your logic for handling the form submission (e.g., sending the email to your server).
    console.log(`Subscribed with email: ${email}`);
    // Optionally, you can clear the input field after submission
    setEmail("");
  };

  return (
    <div className="bg-primary py-8 mt-16 text-white">
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
              className="rounded-l p-2 text-black outline-none" // Changed text color to black
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
