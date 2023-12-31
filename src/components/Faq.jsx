import image from "../images/download-1.svg";
import React, { useState } from "react";

const AccordionItem = ({ index, title, content, isOpen, onToggle }) => {
  return (
    <div onClick={() => onToggle(index)} class="div-accordion1">
      <div
        data-w-id="255c8c82-b5c3-ee66-8658-c03b0729e045"
        class="div-accordion-header"
      >
        <p class="heading-60">
          <strong class="bold-text-10">{title}</strong>
        </p>
        <div class="div-block-79">
          <img src={image} loading="lazy" alt="" class="image-41" />
        </div>
      </div>
      {isOpen && (
        <div class="div-accordion-panel">
          <div class="text-accordion-para">
            <span dangerouslySetInnerHTML={{__html: content}}></span>
          </div>
        </div>
      )}
    </div>
  );
};

const AccordionContainer = ({faqList = []}) => {
  const [openAccordions, setOpenAccordions] = useState([]);

  const handleToggle = (index) => {
    if (openAccordions.includes(index)) {
      setOpenAccordions(openAccordions.filter((item) => item !== index));
    } else {
      setOpenAccordions([...openAccordions, index]);
    }
    console.log(openAccordions);
  };


  return (
    <div>
      {faqList.map((faqInfo, index) => {

        const  {question, answer} = faqInfo || {};

        return (
          <AccordionItem
            index={index}
            title={question}
            content={answer}
            isOpen={openAccordions.includes(index)}
            onToggle={handleToggle}
          />
        )
      })}
    </div>
  )

  return (
    <div>
      <AccordionItem
        index={0}
        title="I have made the payment but haven’t received any confirmation."
        content="Please do check your spam tab once. If you are unable to find it,
        please write a mail to support@airtribe.live and we will help you
        out."
        isOpen={openAccordions.includes(0)}
        onToggle={handleToggle}
      />
      <AccordionItem
        index={1}
        title="I have made the payment but haven’t received any confirmation."
        content="Please do check your spam tab once. If you are unable to find it,
        please write a mail to support@airtribe.live and we will help you
        out."
        isOpen={openAccordions.includes(1)}
        onToggle={handleToggle}
      />
    </div>
  );
};

// export default AccordionContainer;

const Faq = ({faqList}) => {
  return (
    <section class="section-25">
      <div class="div-block-85">
        <h1 class="heading-59">
          <strong class="bold-text-24">Frequently asked questions</strong>
          <strong class="bold-text-241">FAQ's</strong>
        </h1>
        <div class="div-accordion--wrapper">
          <AccordionContainer faqList = {faqList}/>
        </div>
      </div>
    </section>
  );
};

export default Faq;
