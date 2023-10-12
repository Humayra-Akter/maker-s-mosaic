import React, { useState } from "react";
import banner1 from "../../images/banner/review.png";

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
    <div className="mt-20">
      <h1 className="text-2xl font-bold text-primary text-center my-12">
        Customer Reviews
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1">
        {reviews.map((review, index) => (
          <div
            style={{
              background: `url(${banner1})`,
              backgroundSize: "cover",
            }}
            key={index}
            className="mx-7 p-12 bg-gray-100 rounded-lg w-80"
          >
            <h2 className="text-lg text-primary font-extrabold">
              {review.reviewerName}
            </h2>
            <p className="text-sm text-primary font-bold">
              Rating: {review.rating} stars
            </p>
            <p className="text-sm text-primary font-bold">
              Review Date: {review.reviewDate}
            </p>
            <p className="text-sm text-gray-600 font-bold text-justify mt-2">
              {
                expandedReviews.includes(index)
                  ? review.reviewText // Show the full review if expanded
                  : review.reviewText.slice(0, 70) + "..." // Show a truncated review
              }
            </p>
            <div className="flex justify-end">
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
  );
};

export default Review;
