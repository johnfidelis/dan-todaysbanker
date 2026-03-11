"use client"
import React from 'react';
import svgPathsMobile from "@/imports/svg-p9e6o63udr";
import svgPathsDesktop from "@/imports/svg-swyql8qg8n";

function MobileIconGroup() {
  return (
    <div className="absolute inset-[8.33%_12.5%]" data-name="Group">
      <div className="absolute inset-[-2.86%_-3.17%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.5 37">
          <g id="Group">
            <path d={svgPathsMobile.p39c49a00} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPathsMobile.p10f83300} id="Vector_2" stroke="white" strokeLinecap="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function DesktopIconGroup() {
  return (
    <div className="absolute inset-[8.33%_12.5%]" data-name="Group">
      <div className="absolute inset-[-3.43%_-3.81%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56.5 62.3333">
          <g id="Group">
            <path d={svgPathsDesktop.p3f650560} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
            <path d={svgPathsDesktop.p1795af00} id="Vector_2" stroke="white" strokeLinecap="round" strokeWidth="4" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function SolarShieldUpBroken() {
  return (
    <div className="overflow-clip relative shrink-0 size-[42px] md:size-[70px]" data-name="solar:shield-up-broken">
      <div className="md:hidden size-full relative"><MobileIconGroup /></div>
      <div className="hidden md:block size-full relative"><DesktopIconGroup /></div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 text-white w-full">
      <p className="font-sans font-bold leading-[30.004px] md:leading-[53.02px] relative shrink-0 text-[18.753px] md:text-[33.137px]">Terms and Conditions</p>
      <p className="font-sans font-medium leading-[normal] relative shrink-0 text-[11.318px] md:text-[15px]">{`Last Updated: May 23, 2024 `}</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[181.657px] md:w-full md:flex-1 md:min-w-px">
      <Frame1 />
    </div>
  );
}

function ListFTmatches() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="listFTmatches">
      <div className="content-stretch flex gap-[9.704px] md:gap-[15px] items-center py-[6.469px] md:py-[10px] relative shrink-0 w-full">
        <SolarShieldUpBroken />
        <Frame2 />
      </div>
    </div>
  );
}

function ListItem() {
  return (
    <div className="bg-gradient-to-b from-[#fc5f12] relative rounded-[20px] shrink-0 to-[#96390b] w-full" data-name="listItem">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start p-[10px] relative w-full">
          <div className="-translate-y-1/2 absolute h-[136.915px] right-[-10.07px] md:right-[-20.07px] top-[calc(50%-1.01px)] md:top-[calc(50%-3.04px)] w-[137.065px]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 137.065 136.915">
              <path d={svgPathsDesktop.p24c70280} fill="white" id="Vector" opacity="0.17" />
            </svg>
          </div>
          <ListFTmatches />
        </div>
      </div>
    </div>
  );
}

function TermsContent() {
    return (
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
        <div className="font-sans leading-[25px] not-italic relative shrink-0 text-[#303030] text-[17px] text-justify w-full whitespace-pre-wrap">
            <p className="font-sans font-normal mb-[12px]">{`Welcome to Todaysbanker! These Terms and Conditions ("Terms") govern your use of our website, https://Todaysbanker.com/ (the "Site"). By accessing or using our Site, you agree to comply with and be bound by these Terms. If you do not agree to these Terms, please do not use our Site. `}</p>
            <p className="font-sans font-bold mb-[12px]">{`1. Acceptance of Terms `}</p>
            <p className="font-sans font-normal mb-[12px]">{`By accessing and using Todaysbanker, you accept and agree to be bound by these Terms and all applicable laws and regulations. If you do not agree with any part of these Terms, you must not use the Site. `}</p>
            <p className="font-sans font-bold mb-[12px]">{`2. Changes to Terms `}</p>
            <p className="font-sans font-normal mb-[12px]">{`We reserve the right to modify or replace these Terms at any time without prior notice. Your continued use of the Site after any changes constitutes your acceptance of the new Terms. It is your responsibility to review these Terms periodically for updates. `}</p>
            <p className="font-sans font-bold mb-[12px]">{`3. Use of the Site `}</p>
            <p className="font-sans font-bold mb-[12px]">{`3.1 Eligibility `}</p>
            <p className="font-sans font-normal mb-[12px]">{`You must be at least 18 years old to use this Site. By using this Site, you represent and warrant that you are at least 18 years of age. `}</p>
            <p className="font-sans font-bold mb-[12px]">{`3.2 License to Use `}</p>
            <p className="font-sans font-normal mb-[12px]">{`We grant you a limited, non-exclusive, non-transferable, and revocable license to use our Site for personal, non-commercial purposes, subject to these Terms. `}</p>
            <p className="font-sans font-bold mb-[12px]">{`4. Predictions and Disclaimer `}</p>
            <p className="font-sans font-bold mb-[12px]">{`4.1 Predictions `}</p>
            <p className="font-sans font-normal mb-[12px]">{`Todaysbanker provides soccer predictions and related content. These predictions are provided for informational and entertainment purposes only and do not guarantee any specific outcomes or results. `}</p>
            <p className="font-sans font-bold mb-[12px]">{`4.2 Disclaimer of Warranties `}</p>
            <p className="font-sans font-normal mb-[12px]">{`The content on Todaysbanker is provided "as is" and "as available" without any warranties of any kind, either express or implied. We do not warrant that the predictions will be accurate, reliable, or meet your expectations. `}</p>
            <p className="font-sans font-bold mb-[12px]">{`5. Limitation of Liability `}</p>
            <p className="font-sans font-normal mb-[12px]">{`To the fullest extent permitted by law, Todaysbanker and its affiliates, officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from: `}</p>
            <p className="font-sans font-normal mb-[12px]">{`Your use of or inability to use the Site. `}</p>
            <p className="font-sans font-normal mb-[12px]">{`Any unauthorized access to or use of our servers and/or any personal information stored therein. `}</p>
            <p className="font-sans font-normal mb-[12px]">{`Any errors or omissions in any content or for any loss or damage incurred as a result of the use of any content posted, emailed, transmitted, or otherwise made available through the Site. `}</p>
            <p className="font-sans font-bold mb-[12px]">{`6. Intellectual Property `}</p>
            <p className="font-sans font-normal mb-[12px]">{`All content, trademarks, service marks, logos, and other intellectual property on the Site are the property of Todaysbanker or its licensors. You may not use, reproduce, or distribute any content from the Site without our express written permission. `}</p>
            <p className="font-sans font-bold mb-[12px]">{`7. User Conduct `}</p>
            <p className="font-sans font-normal mb-[12px]">{`You agree not to use the Site for any unlawful purpose or in any way that could damage, disable, overburden, or impair the Site. You agree not to engage in any activity that interferes with or disrupts the Site or the servers and networks connected to the Site. `}</p>
            <p className="font-sans font-bold mb-[12px]">{`8. Privacy Policy `}</p>
            <p className="font-sans font-normal mb-[12px]">{`Your use of the Site is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand our practices. `}</p>
            <p className="font-sans font-bold mb-[12px]">{`9. Termination `}</p>
            <p className="font-sans font-normal mb-[12px]">{`We reserve the right to terminate or suspend your access to the Site, without prior notice or liability, for any reason, including if you breach these Terms. `}</p>
            <p className="font-sans font-bold mb-[12px]">{`10. Governing Law `}</p>
            <p className="font-sans font-normal mb-[12px]">{`These Terms shall be governed and construed in accordance with the laws, without regard to its conflict of law principles. `}</p>
            <p className="font-sans font-bold mb-[12px]">{`11. Contact Us `}</p>
            <p className="font-sans font-normal mb-[12px]">{`If you have any questions about these Terms, please contact us at: `}</p>
            <p className="font-sans font-normal mb-[12px]">{`Email: support@Todaysbanker.com `}</p>
            <p className="font-sans font-normal mb-[12px]">{`By using our Site, you acknowledge that you have read, understood, and agreed to these Terms and Conditions. `}</p>
            <p className="mb-[12px]">&nbsp;</p>
            <p className="font-sans font-bold">Thank you for visiting Todaysbanker!</p>
        </div>
      </div>
    )
}

export default function TermsAndConditionsPage() {
  return (
    <div className="bg-white relative rounded-[20px] shadow-[0px_0px_26px_0px_rgba(0,0,0,0.1)] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[40px] items-start pb-[50px] pt-[66px] px-[15px] md:px-[100px] relative w-full">
        <ListItem />
        <TermsContent />
      </div>
    </div>
  );
}
