import { FaPlus } from "react-icons/fa6";

export default function Faqs() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto mt-16 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-[48px] text-[#333333] font-bold mb-4">
          Questions Looks Here
        </h1>

        <p className="text-[16px] font-normal mb-8 text-[#4F4F4F]">
          This website is designed to [briefly explain the purpose of your
          website, e.g., provide services, sell products, share information,
          etc.]
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12 mb-24">
          <div>
            <div className="bg-[#F7F7F7] p-6 w-full h-auto max-w-full rounded-lg mb-6 text-left">
              <h3 className="text-[18px] pt-4 font-bold flex justify-between">
                What is this website about?
                <FaPlus />
              </h3>
              <p className="mt-4 text-[16px] font-bold text-[#4F4F4F]">
                This website is designed to [briefly explain the purpose of your
                website, e.g., provide services, sell products, share
                information, etc.].
              </p>
            </div>

            <div className="bg-[#F7F7F7] p-6 w-full h-auto max-w-full rounded-lg mb-6 text-left">
              <h3 className="text-[18px] pt-4 font-bold flex justify-between">
                How do I create an account?
                <FaPlus />
              </h3>
              <p className="mt-4 text-[16px] font-bold text-[#4F4F4F]">
                Click on the "Sign Up" button and fill in the required details
                to register.
              </p>
            </div>

            <div className="bg-[#F7F7F7] p-6 w-full h-auto max-w-full rounded-lg mb-6 text-left">
              <h3 className="text-[18px] pt-4 font-bold flex justify-between">
                What payment methods are accepted?
                <FaPlus />
              </h3>
              <p className="mt-4 text-[16px] font-bold text-[#4F4F4F]">
                We accept [list accepted payment methods, e.g., credit cards,
                PayPal, etc.].
              </p>
            </div>
          </div>

          <div>
            <div className="bg-[#F7F7F7] p-6 w-full h-auto max-w-full rounded-lg mb-6 text-left">
              <h3 className="text-[18px] pt-4 font-bold flex justify-between">
                What is your refund policy?
                <FaPlus />
              </h3>
              <p className="mt-4 text-[16px] font-bold text-[#4F4F4F]">
                Refunds are [explain the policy, e.g., available within a
                certain time frame under specific conditions].
              </p>
            </div>

            <div className="bg-[#F7F7F7] p-6 w-full h-auto max-w-full rounded-lg mb-6 text-left">
              <h3 className="text-[18px] pt-4 font-bold flex justify-between">
                What will be delivered? And When?
                <FaPlus />
              </h3>
              <p className="mt-4 text-[16px] font-bold text-[#4F4F4F]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                quis modi ullam amet debitis libero veritatis enim repellat
                optio natus eum delectus deserunt, odit expedita eos molestiae
                ipsa totam quidem?
              </p>
            </div>

            <div className="bg-[#F7F7F7] p-6 w-full h-auto max-w-full rounded-lg text-left">
              <h3 className="text-[18px] pt-4 font-bold flex justify-between">
                How do I clean and maintain my Comforty chair?
                <FaPlus />
              </h3>
              <p className="mt-4 text-[16px] font-bold text-[#4F4F4F]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                quis modi ullam amet debitis libero veritatis enim repellat
                optio natus eum delectus deserunt, odit expedita eos molestiae
                ipsa totam quidem?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
