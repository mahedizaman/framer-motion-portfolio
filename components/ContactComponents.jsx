import React from "react";
import ContactComponentsLeft from "./ContactComponentsLeft";
import ContactComponentsRight from "./ContactComponentsRight";
import Container from "./Container";

const ContactComponents = () => {
  return (
    <Container className="flex flex-col md:flex-row justify-between items-center px-20 gap-20">
      <ContactComponentsLeft />
      <span
        className="
        border-t border-lime-300 w-full            
        md:border-t-0 md:border-l md:h-64 md:w-0
      "
      ></span>
      <ContactComponentsRight />
    </Container>
  );
};

export default ContactComponents;
