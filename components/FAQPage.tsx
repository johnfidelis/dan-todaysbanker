import React, { useState } from 'react';
import svgPaths from "@/imports/svg-janpj0hwp3";
import { motion, AnimatePresence } from "motion/react";

function QlementineIconsFaq() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="qlementine-icons:faq-16">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
        <g clipPath="url(#clip0_28_14441)" id="qlementine-icons:faq-16">
          <path d={svgPaths.p2b917a00} fill="white" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p1762a500} fill="white" fillRule="evenodd" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_28_14441">
            <rect fill="white" height="60" width="60" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function FAQHeader() {
  return (
    <div className="bg-gradient-to-b from-[#fc5f12] to-[#96390b] relative rounded-[20px] shrink-0 w-full overflow-hidden">
      <div className="content-stretch flex flex-col gap-[20px] items-start p-[10px] relative w-full">
        {/* Background Pattern */}
        <div className="-translate-y-1/2 absolute h-[136.915px] right-[-10.07px] md:right-[-20.07px] top-[calc(50%-0.51px)] md:top-[calc(50%-3.54px)] w-[137.065px] pointer-events-none">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 137.065 136.915">
            <path d={svgPaths.p24c70280} fill="white" opacity="0.17" />
          </svg>
        </div>
        
        {/* Content */}
        <div className="relative shrink-0 w-full z-10">
          <div className="content-stretch flex flex-col items-start px-0 md:px-[20px] relative w-full">
            <div className="content-stretch flex gap-[9.704px] md:gap-[15px] items-center py-[6.469px] md:py-[10px] relative shrink-0 w-full">
              <div className="relative shrink-0 size-[35px] md:size-[60px]" data-name="qlementine-icons:faq-16">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
                  <g clipPath="url(#clip0_28_14527)">
                    <path d="M16.4062 4.375C17.8567 4.375 19.2477 4.95117 20.2732 5.97676C21.2988 7.00235 21.875 8.39335 21.875 9.84375C21.875 10.9878 21.5097 11.8628 20.9497 12.5562C20.5544 13.0272 20.0949 13.4403 19.5847 13.7834L19.2194 14.0394C18.6463 14.4375 18.2328 14.7328 17.9375 15.0959C17.6351 15.463 17.4792 15.9289 17.5 16.4041V18.5916C17.5 18.8816 17.3848 19.1598 17.1796 19.365C16.9745 19.5701 16.6963 19.6853 16.4062 19.6853C16.1162 19.6853 15.838 19.5701 15.6329 19.365C15.4277 19.1598 15.3125 18.8816 15.3125 18.5916V16.4041C15.3125 15.2688 15.68 14.4003 16.2422 13.7134C16.6469 13.2191 17.1456 12.8297 17.5897 12.5103L17.9681 12.2456C18.5369 11.8497 18.9503 11.5522 19.2456 11.1847C19.5536 10.8077 19.7111 10.33 19.6875 9.84375C19.6875 8.97351 19.3418 8.13891 18.7264 7.52356C18.1111 6.9082 17.2765 6.5625 16.4062 6.5625C15.536 6.5625 14.7014 6.9082 14.0861 7.52356C13.4707 8.13891 13.125 8.97351 13.125 9.84375C13.125 10.1338 13.0098 10.412 12.8046 10.6171C12.5995 10.8223 12.3213 10.9375 12.0312 10.9375C11.7412 10.9375 11.463 10.8223 11.2579 10.6171C11.0527 10.412 10.9375 10.1338 10.9375 9.84375C10.9375 8.39335 11.5137 7.00235 12.5393 5.97676C13.5648 4.95117 14.9558 4.375 16.4062 4.375ZM16.4062 22.0938C16.9139 22.0938 17.4007 22.2954 17.7597 22.6544C18.1187 23.0133 18.3203 23.5002 18.3203 24.0078C18.3203 24.5155 18.1187 25.0023 17.7597 25.3613C17.4007 25.7202 16.9139 25.9219 16.4062 25.9219C15.8986 25.9219 15.4118 25.7202 15.0528 25.3613C14.6938 25.0023 14.4922 24.5155 14.4922 24.0078C14.4922 23.5002 14.6938 23.0133 15.0528 22.6544C15.4118 22.2954 15.8986 22.0938 16.4062 22.0938Z" fill="white" />
                    <path clipRule="evenodd" d="M16.4066 30.625C18.9879 30.625 21.1973 30.3253 23.0785 29.7741C25.266 31.3031 28.1754 32.8803 31.9379 34.7397C33.9416 35.7372 35.8535 33.4753 34.5848 31.6334C32.9945 29.2928 31.6098 27.0178 30.516 24.4366C32.126 21.8772 32.791 18.7272 32.791 15.3147C32.791 6.84907 28.6785 0.00219727 16.3848 0.00219727C4.09102 0.00219727 -0.0214844 6.87095 -0.0214844 15.3147C-0.0214844 23.7803 4.09102 30.6272 16.3848 30.6272L16.4066 30.625ZM28.6785 23.275C28.4908 23.5722 28.3775 23.9103 28.3482 24.2607C28.3188 24.611 28.3744 24.9632 28.5101 25.2875C29.6388 27.9781 31.0695 30.3406 32.6445 32.6594C29.0351 30.8591 26.3445 29.3781 24.332 27.9781C24.0639 27.7911 23.7574 27.6665 23.4348 27.6135C23.1123 27.5605 22.782 27.5804 22.4682 27.6719C20.8101 28.1553 18.8151 28.4353 16.4088 28.4353C10.6557 28.4353 7.22133 26.8428 5.18695 24.6509C3.12852 22.4197 2.18789 19.2259 2.18789 15.3103C2.18789 11.3947 3.13727 8.17907 5.18477 5.9697C7.21258 3.7822 10.6535 2.18532 16.4066 2.18532C22.1598 2.18532 25.5941 3.77782 27.6285 5.9697C29.6848 8.20095 30.6254 11.3947 30.6254 15.3103C30.6254 18.4603 30.0041 21.1728 28.6829 23.2728L28.6785 23.275Z" fill="white" fillRule="evenodd" />
                  </g>
                  <defs>
                    <clipPath id="clip0_28_14527">
                      <rect fill="white" height="35" width="35" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
                <p className="font-sans font-bold leading-[30.004px] md:leading-[53.02px] relative shrink-0 text-[18.753px] md:text-[33.137px] text-white">
                  Frequently Asked Questions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SolarArrowDownBroken({ isOpen }: { isOpen: boolean }) {
  return (
    <div className={`relative size-[34px] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} data-name="solar:arrow-down-broken">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <path d={svgPaths.p3f63080} stroke="#1E225D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
      </svg>
    </div>
  );
}

interface FAQItemProps {
  question: string;
  answer?: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div 
      className="relative rounded-[17px] shrink-0 w-full cursor-pointer group"
      onClick={onToggle}
    >
      <div className={`absolute border border-solid inset-0 pointer-events-none rounded-[17px] transition-colors duration-300 ${isOpen ? 'border-[#fc5f12]' : 'border-[#dddee7] group-hover:border-[#fc5f12]'}`} />
      <div className="content-stretch flex flex-col p-[25px] relative w-full">
        <div className="flex gap-[24px] items-start justify-between w-full">
          <div className="flex flex-col gap-[10px] items-start flex-1">
            <p className="font-sans font-bold leading-[28px] text-[#1e225d] text-[18px]">
              {question}
            </p>
          </div>
          <div className="flex items-center justify-center relative shrink-0 size-[34px]">
             <SolarArrowDownBroken isOpen={isOpen} />
          </div>
        </div>
        
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0, marginTop: 0 }}
              animate={{ height: "auto", opacity: 1, marginTop: 10 }}
              exit={{ height: 0, opacity: 0, marginTop: 0 }}
              className="overflow-hidden"
            >
              <p className="font-sans font-normal leading-[22px] text-[#1e1e1e] text-[16px]">
                {answer || "Answer coming soon..."}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Q: What is the best Football Prediction website in the world?",
      answer: "Todaysbanker is the best football prediction service in the world, BetinKing carefully analyze all aspects of football matches to ensure the football predictions are as accurate as possible, and also provide value for our users"
    },
    {
      question: "Q: Where can I get free Football Predictions?",
      answer: "You can get free football predictions right here on Todaysbanker. We provide daily tips and analysis for various leagues and competitions without any cost."
    },
    {
      question: "Q. What are 1.5 Goals Football Predictions?",
      answer: "1.5 Goals predictions mean wagering that there will be at least 2 goals scored in a match (Over 1.5) or 1 goal or less (Under 1.5)."
    },
    {
      question: "Q. What are Double chance Football Predictions?",
      answer: "Double Chance allows you to cover two of the three possible outcomes in a football match with one bet. For example, Home Win or Draw."
    },
    {
      question: "Q. What are Double chance Football Predictions?", // Duplicate in design, keeping for fidelity but normally would be distinct
      answer: "Double Chance allows you to cover two of the three possible outcomes in a football match with one bet. For example, Home Win or Draw."
    },
    {
      question: "Q. What are Double chance Football Predictions?", // Duplicate in design
      answer: "Double Chance allows you to cover two of the three possible outcomes in a football match with one bet. For example, Home Win or Draw."
    },
    {
      question: "Q. What are Double chance Football Predictions?", // Duplicate in design
      answer: "Double Chance allows you to cover two of the three possible outcomes in a football match with one bet. For example, Home Win or Draw."
    }
  ];

  return (
    <div className="bg-white relative rounded-[20px] shadow-[0px_0px_26px_0px_rgba(0,0,0,0.1)] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[40px] items-start px-[15px] md:px-[100px] py-[30px] md:py-[60px] relative w-full">
        <FAQHeader />
        <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="relative rounded-[17px] shrink-0 w-full cursor-pointer group"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <div className={`absolute border border-solid inset-0 pointer-events-none rounded-[17px] transition-colors duration-300 ${isOpen ? 'border-[#fc5f12]' : 'border-[#dddee7] group-hover:border-[#fc5f12]'}`} />
                <div className="content-stretch flex flex-col p-[10px] md:p-[25px] relative w-full">
                  <div className="flex gap-[24px] items-start justify-between w-full">
                    <div className="flex flex-col gap-[10px] items-start flex-1">
                      <p className="font-sans font-bold leading-[normal] md:leading-[28px] text-[#1e225d] text-[14px] md:text-[18px]">
                        {faq.question}
                      </p>
                    </div>
                    <div className={`flex items-center justify-center relative shrink-0 size-[34px] transition-transform duration-300 ${isOpen ? '-rotate-90' : 'rotate-0'}`}>
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
                        <path d={svgPaths.p3f63080} stroke="#1E225D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
                      </svg>
                    </div>
                  </div>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: "auto", opacity: 1, marginTop: 10 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="font-sans font-normal leading-[normal] md:leading-[22px] text-[#1e1e1e] text-[12px] md:text-[16px]">
                          {faq.answer || "Answer coming soon..."}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
