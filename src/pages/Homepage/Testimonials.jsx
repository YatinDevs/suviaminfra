import ReviewCard from "../../components/ReviewCard/ReviewCard";
import { reviews } from "../../constants/index";

const Testimonials = () => {
  return (
    <section className="max-container bg-blue-50 py-24 text-gray-700 transition-opacity duration-700 ease-in-out opacity-100 hover:opacity-90">
      <h3 className="font-palanquin text-center text-2xl md:text-4xl font-bold">
        What Our
        <span className=" m-2 bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
          Customers
        </span>
        Say?
      </h3>
      <p className="info-text text-md md:text-lg text-center m-auto mt-4 max-w-lg">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>

      <div className="flex mt-16 justify-center items-center flex-wrap gap-10">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="transform transition-transform duration-300 hover:scale-105 hover:shadow-lg rounded-lg p-4"
          >
            <ReviewCard {...review} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
