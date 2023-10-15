import React, { useState } from "react";
import banner1 from "../../images/banner/reviewPg.png";
import reviewerImage from "../../images/banner/avatar.png";

const reviews = [
  {
    reviewerName: "John Doe",
    rating: 5,
    reviewDate: "January 15, 2023",
    reviewText:
      "I recently purchased a beautiful handcrafted wooden bowl from this website. The craftsmanship is outstanding, and the product exceeded my expectations. I'll definitely be back for more!",
  },
  {
    reviewerName: "Jane Smith",
    rating: 4,
    reviewDate: "February 3, 2023",
    reviewText:
      "I love the unique handwoven textiles I bought here. They add character and warmth to my home. The only reason I'm giving it 4 stars is because the shipping took a little longer than I expected.",
  },
  {
    reviewerName: "Alex Johnson",
    rating: 5,
    reviewDate: "March 20, 2023",
    reviewText:
      "The quality of the artisanal jewelry I purchased is superb. I get compliments on it every time I wear it. Fast shipping and excellent customer service, too!",
  },
  {
    reviewerName: "Emily Brown",
    rating: 5,
    reviewDate: "April 10, 2023",
    reviewText:
      "I can't get enough of the unique pottery on this website. Each piece is a work of art. Plus, the packaging was environmentally friendly, which I really appreciate.",
  },
];

const Review = () => {
  const [expandedReviews, setExpandedReviews] = useState([]); // Store the indices of expanded reviews

  const toggleReviewExpansion = (index) => {
    if (expandedReviews.includes(index)) {
      setExpandedReviews(expandedReviews.filter((i) => i !== index));
    } else {
      setExpandedReviews([...expandedReviews, index]);
    }
  };

  return (
    <div>
      <h1
        style={{ fontFamily: "rockwell" }}
        className="text-4xl mt-16 text-center text-primary font-bold text-shadow"
      >
        REVIEWS
      </h1>
      <div className="mt-8 grid lg:grid-cols-2 gap-12">
        <div className="lg:col-span-1">
          <div className="w-full h-80 bg-primary lg:mt-40 lg:mx-12 p-4 rounded-lg shadow-lg">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/Ow5LeG-zzyg?si=XorvdGslEbpvd7nt"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            "
          </div>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-3 m-7 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg shadow-lg p-6"
            >
              <div className="flex items-center mb-4">
                <img
                  src={reviewerImage}
                  alt={review.reviewerName}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <h2 className="text-lg text-primary font-extrabold">
                  {review.reviewerName}
                </h2>
              </div>
              <p className="text-sm text-primary font-bold">
                Rating: {review.rating} stars
              </p>
              <p className="text-sm text-primary font-bold">
                Review Date: {review.reviewDate}
              </p>
              <p className="text-sm text-gray-600 text-justify mt-2">
                {expandedReviews.includes(index)
                  ? review.reviewText
                  : review.reviewText.slice(0, 120) + " ..."}
              </p>
              <div className="flex justify-end mt-4">
                <button
                  className="text-primary font-semibold underline"
                  onClick={() => toggleReviewExpansion(index)}
                >
                  {expandedReviews.includes(index) ? "Read Less" : "Read More"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
