import React, { useState } from "react";
import bannerFaq from "../../images/banner/banner-8.jpg";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Collapse if the clicked item is already open
    } else {
      setActiveIndex(index); // Expand the clicked item
    }
  };

  const faqData = [
    {
      question: "What types of handcrafted products do you sell?",
      answer:
        "At 'Maker's Mosaic', we offer a wide range of handcrafted products, including jewelry, pottery, textiles, woodwork, and much more. Explore our curated selection to discover unique and artisanal treasures.",
    },
    {
      question: "How do I know if a product is handmade or artisanal?",
      answer:
        "We take pride in featuring products created by talented artisans and crafters. You can find information about the artisan and their unique craftsmanship on each product page.",
    },
    {
      question: "What materials are used in the products?",
      answer:
        "The materials used in our handcrafted products vary and can include sustainable, natural, and eco-friendly materials. Detailed product information is available on each product page.",
    },
    // Add more FAQ questions and answers as needed
  ];

  return (
    <div>
      <h1
        style={{ fontFamily: "rockwell" }}
        className="text-2xl font-bold text-center text-primary mb-10 mt-20"
      >
        Frequently Asked Questions
      </h1>
      <div className="mx-8">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="bg-accent mb-5 rounded-lg shadow-lg p-6"
            style={{
              background: `url(${bannerFaq})`,
              backgroundSize: "cover",
            }}
          >
            <div
              className="text-lg text-primary font-extrabold border-2 border-secondary"
              onClick={() => handleAccordionClick(index)}
              style={{ cursor: "pointer" }}
            >
              {faq.question}
            </div>
            {activeIndex === index && (
              <div>
                <p className="text-black font-bold">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
