import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className="px-5 md:px-10 py-10 md:py-[60px] lg:px-[60px] lg:py-20 text-info space-y-10">
      <div className="w-full h-full space-y-6">
        <h2 className="w-full text-2xl font-montserrat md:text-4xl xl:text-6xl">
          Contact Us
        </h2>
        <p className="text-sm font-lato lg:text-base">
          Please fill out the form below, and we will get back to you as soon as
          possible. * is mandatory form field.
        </p>
      </div>
      <ContactForm />
      <div className="w-full h-full md:p-5 lg:p-[20px]">
        <h4 className="flex items-center justify-center gap-3 p-3 text-lg font-bold text-default font-Montserrat bg-info">
          Visit our Store
        </h4>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.168687293059!2d77.0193824!3d11.025967399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8578574c70215%3A0x82ba9fdcdf0806d7!2sSparsh%20Ladies%20Designer!5e0!3m2!1sen!2sin!4v1719814165764!5m2!1sen!2sin"
          width={"100%"}
          height={"500"}
          style={{ border: 0 }}
          allowfullscreen
          loading={"lazy"}
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
