"use client"
import React from 'react';
import { useForm } from 'react-hook-form@7.55.0';
import svgPaths from "@/imports/svg-pcuqoepzjm";

function TdesignCall() {
  return (
    <div className="overflow-clip relative shrink-0 size-[42px] md:size-[70px]" data-name="tdesign:call-1">
      <div className="absolute inset-[12.5%_12.5%_8.33%_8.33%]" data-name="Group">
        <div className="absolute inset-[-3.61%_-3.59%_-3.01%_-3.01%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.4446 35.4519">
            <g id="Group">
              <path d={svgPaths.paf95400} id="Vector_2" stroke="white" strokeLinecap="square" strokeWidth="2" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function ContactHeader() {
  return (
    <div className="bg-gradient-to-b from-[#fc5f12] to-[#96390b] relative rounded-[20px] shrink-0 w-full overflow-hidden">
      <div className="content-stretch flex flex-col gap-[20px] items-start p-[10px] relative w-full">
        <div className="-translate-y-1/2 absolute h-[136.915px] right-[-10.07px] md:right-[-20.07px] top-[calc(50%-1.01px)] md:top-[calc(50%-3.04px)] w-[137.065px]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 137.065 136.915">
            <path d={svgPaths.p24c70280} fill="white" opacity="0.17" />
          </svg>
        </div>
        <div className="relative shrink-0 w-full z-10">
          <div className="content-stretch flex flex-col items-start px-0 md:px-[20px] relative w-full">
            <div className="content-stretch flex gap-[9.704px] md:gap-[15px] items-center py-[6.469px] md:py-[10px] relative shrink-0 w-full">
              <TdesignCall />
              <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 text-white w-full">
                <p className="font-sans font-bold leading-[30.004px] md:leading-[53.02px] relative shrink-0 text-[18.753px] md:text-[33.137px]">Contact Us</p>
                <p className="font-sans font-medium leading-[normal] relative shrink-0 text-[11.318px] md:text-[15px]">Get in touch with Todaysbanker</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputField({ label, placeholder, name, register, required = false }: { label: string, placeholder: string, name: string, register: any, required?: boolean }) {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full">
        <label className="flex-[1_0_0] font-sans font-normal h-[24px] leading-[24px] min-h-px min-w-px relative text-[#303030] text-[15px] md:text-[17px] tracking-[0.2px]">{label}</label>
      </div>
      <div className="bg-white relative rounded-[30px] shrink-0 w-full border border-[#d9d9d9]">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <input 
            {...register(name, { required })}
            placeholder={placeholder}
            className="content-stretch flex gap-[10px] items-center p-[20px] relative w-full bg-transparent outline-none font-sans font-normal leading-[24px] text-[15px] md:text-[17px] tracking-[0.2px] placeholder-[#b3b3b3]"
          />
        </div>
      </div>
    </div>
  );
}

function TextAreaField({ label, placeholder, name, register, required = false }: { label: string, placeholder: string, name: string, register: any, required?: boolean }) {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full h-[217px]">
      <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full">
        <label className="flex-[1_0_0] font-sans font-normal h-[24px] leading-[24px] min-h-px min-w-px relative text-[#303030] text-[15px] md:text-[17px] tracking-[0.2px]">{label}</label>
      </div>
      <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[30px] w-full border border-[#d9d9d9]">
        <div className="overflow-clip rounded-[inherit] size-full">
          <textarea
            {...register(name, { required })}
            placeholder={placeholder}
            className="content-stretch flex gap-[10px] items-start p-[20px] relative size-full bg-transparent outline-none font-sans font-normal leading-[24px] text-[15px] md:text-[17px] tracking-[0.2px] placeholder-[#b3b3b3] resize-none"
          />
        </div>
      </div>
    </div>
  );
}

function ContactForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    alert("Message sent!");
  };

  // This matches "LoginModal" from Figma Frame1000011596
  return (
    <div className="relative rounded-[30px] shrink-0 w-full md:w-auto flex-[1_0_0] min-h-px min-w-px border border-[#d9d9d9]">
      <div className="content-stretch flex flex-col items-start p-[20px] relative w-full">
        {/* Frame25 */}
        <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
          {/* Form Header / Frame7 */}
          <div className="content-stretch flex items-center relative shrink-0 w-full">
            <div className="flex flex-[1_0_0] flex-col font-sans font-bold justify-center leading-[0] min-h-px min-w-px relative text-[#1e1e1e] text-[22px] md:text-[24px]">
              <p className="leading-[normal]">Contact Us</p>
            </div>
          </div>
          {/* Form Inputs and Button */}
          <form onSubmit={handleSubmit(onSubmit)} className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
              <InputField label="Name" placeholder="Enter name" name="name" register={register} required />
              <InputField label="Email" placeholder="e.g myemail@gmail.com" name="email" register={register} required />
              <TextAreaField label="Write your message" placeholder="Tell us about your needs" name="message" register={register} required />
            </div>
            {/* Buttons */}
            <button type="submit" className="bg-[#1e225d] h-[51px] relative rounded-[53px] shrink-0 w-full hover:bg-[#2a2f6e] transition-colors cursor-pointer">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex gap-[8px] items-center justify-center px-[32px] py-[18px] relative size-full">
                  <p className="font-sans font-bold leading-[22px] relative shrink-0 text-[15px] md:text-[19px] text-white tracking-[0.2px]">Send</p>
                </div>
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function InfoText() {
  // This matches Frame31
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full md:w-auto md:flex-[1_0_0] min-h-px min-w-px">
      <div className="font-sans font-normal leading-[normal] relative shrink-0 text-[#303030] text-[15px] md:text-[17px] text-justify w-full whitespace-pre-wrap">
        <p className="font-bold mb-[12px] text-[22px] md:text-[24px]">Get in Touch</p>
        <p className="font-bold mb-[12px]">General Inquiries</p>
        <p className="mb-[12px]">Have a question about how Todaysbanker works or need help with your account?</p>
        <p className="font-bold mb-[12px] text-[#1e225d]">Email: support@todaysbanker.com</p>
        <p className="mb-[12px]">&nbsp;</p>
        <p className="font-bold mb-[12px]">Business & Partnerships</p>
        <p className="mb-[12px]">Want to collaborate or discuss advertising and sponsorship opportunities?</p>
        <p className="font-bold text-[#1e225d]">Email: partnerships@todaysbanker.com</p>
      </div>
    </div>
  );
}

export default function ContactUsPage() {
  return (
    // Frame24 equivalent
    <div className="bg-white relative rounded-[15px] md:rounded-[20px] shadow-[0px_0px_26px_0px_rgba(0,0,0,0.1)] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[20px] md:gap-[40px] items-start px-[20px] py-[30px] md:pb-[50px] md:pt-[66px] md:px-[100px] relative w-full">
        {/* ListItem / Header */}
        <ContactHeader />
        
        {/* Frame23 equivalent - Wrapper for Info and Form */}
        <div className="content-stretch flex flex-col gap-[36px] md:flex-row items-start relative shrink-0 w-full">
          <InfoText />
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
