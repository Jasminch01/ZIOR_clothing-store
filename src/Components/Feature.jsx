import { MdOutlineSupportAgent } from "react-icons/md";
import { FaShippingFast, FaRecycle } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
const Feature = () => {
  return (
    <div className=" p-10 my-10">
      <p className="text-2xl font-semibold text-center mb-5">Our Features</p>
      <hr />
      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 w-[80%] mx-auto  gap-5 ">
        <div className="text-center p-5 shadow-xl bg-white">
          <div className="flex justify-center">
            <FaShippingFast className="text-5xl "></FaShippingFast>
          </div>
          <p className="font-semibold">FREE SHIPPING</p>
          <p>on order over $100</p>
        </div>
        <div className="text-center p-5 shadow-xl bg-white">
          <div className="flex justify-center">
            <MdOutlineSupportAgent className="text-5xl "></MdOutlineSupportAgent>
          </div>
          <p className="font-semibold">24/7 SUPPORT</p>
          <p>online consultations</p>
        </div>
        <div className="text-center p-5 shadow-xl bg-white">
          <div className="flex justify-center">
            <SlCalender className="text-4xl "></SlCalender>
          </div>
          <p className="font-semibold">DAILY UPDATES</p>
          <p>Check out store for latest</p>
        </div>
        <div className="text-center p-5 shadow-xl bg-white">
          <div className="flex justify-center">
            <FaRecycle className="text-4xl "></FaRecycle>
          </div>
          <p className="font-semibold">30-DAY RETURNS</p>
          <p>moneyback guarantee</p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
