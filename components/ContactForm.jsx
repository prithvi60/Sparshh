import React from "react";

const ContactForm = () => {
  return (
    <form
      //  action="https://public.herotofu.com/v1/5317bdd0-ae22-11ee-870a-ff8e0d81300a"
      method="post"
      acceptCharset="UTF-8"
      className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-0 md:gap-x-8 md:gap-y-10"
    >
      <div className="block w-full space-y-3">
        <label
          htmlFor="company"
          className="text-xl md:text-2xl font-montserrat"
        >
          Name<span className="text-red-600">*</span>
        </label>
        <input
          required
          name="Company"
          autoComplete="on"
          type="text"
          id="company"
          placeholder="Enter your Name"
          className="w-full px-4 py-3 mt-1 border rounded-md font-lato border-info focus:border-none focus:ring-0 focus:outline focus:outline-success placeholder:text-sm md:placeholder:text-base placeholder:font-lato"
        />
      </div>
      <div className="block w-full space-y-3">
        <label
          htmlFor="position"
          className="text-xl md:text-2xl font-montserrat"
        >
          Address
        </label>
        <input
          autoComplete="on"
          type="text"
          name="Position"
          id="position"
          placeholder="Enter your Position at the Company"
          className="w-full px-4 py-3 mt-1 border rounded-md font-lato border-info focus:border-none focus:ring-0 focus:outline focus:outline-success placeholder:text-sm md:placeholder:text-base placeholder:font-lato"
        />
      </div>
      <div className="block w-full space-y-3">
        <label htmlFor="email" className="text-xl md:text-2xl font-montserrat">
          Email<span className="text-red-600">*</span>
        </label>
        <input
          required
          name="Email"
          autoComplete="on"
          type="email"
          id="email"
          placeholder="Enter your email"
          className="w-full px-4 py-3 mt-1 border rounded-md font-lato border-info focus:border-none focus:ring-0 focus:outline focus:outline-success placeholder:text-sm md:placeholder:text-base placeholder:font-lato"
        />
      </div>
      <div className="block w-full space-y-3">
        <label htmlFor="phone" className="text-xl md:text-2xl font-montserrat">
          Phone Number<span className="text-red-600">*</span>
        </label>
        <input
          required
          name="Phone"
          type="text"
          id="phone"
          placeholder="Enter your Phone Number"
          className="w-full px-4 py-3 mt-1 border rounded-md font-lato border-info focus:border-none focus:ring-0 focus:outline focus:outline-success placeholder:text-sm md:placeholder:text-base placeholder:font-lato"
        />
      </div>
      <div className="block w-full col-auto space-y-3 md:col-span-2">
        <label
          htmlFor="message"
          className="text-xl md:text-2xl font-montserrat"
        >
          Message
        </label>
        <textarea
          name="Message"
          autoComplete="on"
          type="text"
          id="message"
          rows={"10"}
          placeholder="Type in your Message"
          className="w-full px-4 py-3 mt-1 border rounded-md font-lato border-info focus:border-none focus:ring-0 focus:outline focus:outline-success placeholder:text-sm md:placeholder:text-base placeholder:font-lato"
        />
      </div>
      <button
        type="submit"
        className={`block rounded-full px-4 py-2 bg-info hover:bg-success text-center text-base duration-700 delay-75 font-lato capitalize w-full md:w-[350px] group`}
      >
        <div className={`h-6 w-full overflow-hidden`}>
          <h4
            className={`transition translate-y-0 group-hover:-translate-y-20 duration-700 text-white`}
          >
            Contact
          </h4>
          <h4
            className={`translate-y-20 transition group-hover:-translate-y-[25px] duration-700 text-white`}
          >
            Contact
          </h4>
        </div>
      </button>
    </form>
  );
};

export default ContactForm;
