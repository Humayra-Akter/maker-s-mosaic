import React from "react";

const Faq = () => {
  return (
    <div>
      <h1
        style={{ fontFamily: "rockwell" }}
        className="text-2xl font-bold text-center text-primary mb-10 mt-20"
      >
        Frequently Asked Question
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <div className="mx-8">
          <h1 className="text-xl font-bold text-center text-primary py-2">
            Product Information
          </h1>
          <div className="collapse bg-accent">
            <input type="radio" name="my-accordion-1" checked="checked" />
            <div className="collapse-title text-lg font-medium border-2 border-secondary">
              What types of handcrafted products do you sell?
            </div>
            <div className="collapse-content">
              <p>
                At "Maker's Mosaic", we offer a wide range of handcrafted
                products, including jewelry, pottery, textiles, woodwork, and
                much more. Explore our curated selection to discover unique and
                artisanal treasures.
              </p>
            </div>
          </div>
          <div className="collapse bg-accent">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-lg font-medium border-2 border-secondary">
              How do I know if a product is handmade or artisanal?
            </div>
            <div className="collapse-content">
              <p>
                We take pride in featuring products created by talented artisans
                and crafters. You can find information about the artisan and
                their unique craftsmanship on each product page.
              </p>
            </div>
          </div>
          <div className="collapse bg-accent">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-lg font-medium border-2 border-secondary">
              What materials are used in the products?
            </div>
            <div className="collapse-content">
              <p>
                The materials used in our handcrafted products vary and can
                include sustainable, natural, and eco-friendly materials.
                Detailed product information is available on each product page.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-8">
          <h1 className="text-xl font-bold text-center text-primary py-2">
            Ordering and Shipping
          </h1>
          <div className="collapse bg-accent">
            <input type="radio" name="my-accordion-2" checked="checked" />
            <div className="collapse-title text-lg font-medium border-2 border-secondary">
              What payment methods do you accept?
            </div>
            <div className="collapse-content">
              <p>
                We accept a variety of payment methods, including major credit
                cards and secure online payment options. Your transactions are
                protected and secure.
              </p>
            </div>
          </div>
          <div className="collapse bg-accent">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-lg font-medium border-2 border-secondary">
              What is the shipping cost and delivery time?
            </div>
            <div className="collapse-content">
              <p>
                Shipping costs and delivery times may vary based on your
                location and the specific product. Find shipping information on
                each product page and at checkout.
              </p>
            </div>
          </div>
          <div className="collapse bg-accent">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-lg font-medium border-2 border-secondary">
              Do you offer international shipping?
            </div>
            <div className="collapse-content">
              <p>
                Yes, we offer international shipping to bring our handcrafted
                treasures to customers worldwide. Additional fees may apply
                based on your location.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-8">
          <h1 className="text-xl font-bold text-center text-primary py-2">
            Returns and Exchanges
          </h1>
          <div className="collapse bg-accent">
            <input type="radio" name="my-accordion-3" checked="checked" />
            <div className="collapse-title text-lg font-medium border-2 border-secondary">
              What is your return policy?
            </div>
            <div className="collapse-content">
              <p>
                We want you to be delighted with your purchase. If you're not
                completely satisfied, please review our detailed return policy
                for information on returns and exchanges.
              </p>
            </div>
          </div>
          <div className="collapse bg-accent">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-lg font-medium border-2 border-secondary">
              How do I initiate a return or exchange?
            </div>
            <div className="collapse-content">
              <p>
                To start a return or exchange, please contact our customer
                support team. They will guide you through the process and assist
                you with any questions.
              </p>
            </div>
          </div>
          <div className="collapse bg-accent">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-lg font-medium border-2 border-secondary">
              Are there any restocking fees?
            </div>
            <div className="collapse-content">
              <p>
                We do not charge restocking fees for most returns. However, some
                specific products or cases may have different return policies.
                Please check the individual product pages for details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
