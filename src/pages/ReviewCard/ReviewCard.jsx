import { FaQuoteLeft } from "react-icons/fa";
import PropTypes from "prop-types";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Rating from "react-rating";
import { BsStar, BsStarFill } from "react-icons/bs";

ReviewCard.propTypes = {
    testimonial: PropTypes.object.isRequired,
};

function ReviewCard({ testimonial }) {
    const { image, name, body, rating } = testimonial;
    // console.log(image, name, body);
      useEffect(() => {
          AOS.init();
      }, []);
    return (
        <div
            className="border rounded-tl-[30px] md:rounded-tl-[40px] lg:rounded-tl-[45px] rounded-br-[30px] md:rounded-br-[40px] lg:rounded-br-[45px] bg-white relative mt-0 overflow-hidden"
            data-aos="fade-right"
            data-aos-offset="0"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-easing=""
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
        >
            <div className="flex flex-col items-center relative mx-auto">
                <img
                    className="w-1/6 md:w-[80px] lg:w-1/4 rounded-full absolute left-0 border-8 border-white"
                    src={image}
                    alt=""
                />
                <div className="flex flex-col items-center bg-white p-4 md:p-6 lg:p-8 space-y-3 rounded-2xl">
                    <h3 className="font-semibold">{name}</h3>
                    <p>
                        <FaQuoteLeft className="text-red-700 text-xl"></FaQuoteLeft>
                    </p>
                    <p className="text-xs text-justify">{body}</p>
                    <div className="flex justify-center items-center gap-2">
                        <p className="text-xs text-justify">{rating}</p>
                        <Rating
                            initialRating={rating}
                            readonly
                            emptySymbol={
                                <BsStar className="text-[#edc967]"></BsStar>
                            }
                            fullSymbol={
                                <BsStarFill className="text-[#edc967]"></BsStarFill>
                            }
                        ></Rating>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReviewCard;
