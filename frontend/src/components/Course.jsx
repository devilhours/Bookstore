// import Swiper core and required modules
import { useEffect, useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
//import list from "../list.json";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Course = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/api/books");
        setBooks(response.data);
      } catch (error) {
        console.log("error", error)
      }
    };
    fetchBooks();
  },[]);

  return (
    <div className="container my-10 md:px-20 px-4 max-w-screen-2xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-8 ">
        Explore Our Courses
      </h2>
      <p className="text-2xl text-center mb-14">
        Ready to level up? Our courses are designed to spark creativity, build
        expertise, and keep you ahead of the curve. Let us dive in!
      </p>

      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 1, // Show 1 card for mobile screens
          },
          768: {
            slidesPerView: 2, // Show 2 cards for tablets
          },
          1024: {
            slidesPerView: 3, // Show 3 cards for larger screens
          },
        }}
      >
        {books.map((course) => (
          <SwiperSlide key={course.id}>
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 mb-14 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-2">
              <img
                src={course.image}
                alt="book"
                className="w-full h-80 object-contain"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-blue-900">
                  {course.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{course.title}</p>
                <div className="flex items-center justify-between">
                  <p
                    className={`text-lg font-bold ${
                      course.price > 0 ? "text-green-700" : "text-red-500"
                    }`}
                  >
                    {course.price > 0 ? `₹${course.price}` : "Free"}
                  </p>
                  <span className="inline-block bg-blue-200 text-blue-800 text-xs px-3 py-1 rounded-full">
                    {course.category}
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Course;
