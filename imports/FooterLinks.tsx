function MasterLink() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Master Link">
      <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#f3f3f3] text-[16px] text-center">Home</p>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <MasterLink />
    </div>
  );
}

function MasterLink1() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Master Link">
      <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#f3f3f3] text-[16px] text-center">Terms of Use</p>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <MasterLink1 />
    </div>
  );
}

function MasterLink2() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Master Link">
      <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#f3f3f3] text-[16px] text-center">Privacy</p>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <MasterLink2 />
    </div>
  );
}

function MasterLink3() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Master Link">
      <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#f3f3f3] text-[16px] text-center">FAQ</p>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <MasterLink3 />
    </div>
  );
}

function MasterLink4() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Master Link">
      <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#f3f3f3] text-[16px] text-center">Contact Us</p>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <MasterLink4 />
    </div>
  );
}

function MasterLink5() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Master Link">
      <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#f3f3f3] text-[16px] text-center">Blog</p>
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <MasterLink5 />
    </div>
  );
}

export default function FooterLinks() {
  return (
    <div className="content-stretch flex gap-[9px] items-center justify-center relative size-full" data-name="Footer Links">
      <Link />
      <div className="h-full relative shrink-0 w-0">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 20">
            <path d="M0.5 0V20" id="Vector 17" stroke="var(--stroke-0, #D9D9D9)" />
          </svg>
        </div>
      </div>
      <Link1 />
      <div className="h-full relative shrink-0 w-0">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 20">
            <path d="M0.5 0V20" id="Vector 17" stroke="var(--stroke-0, #D9D9D9)" />
          </svg>
        </div>
      </div>
      <Link2 />
      <div className="h-full relative shrink-0 w-0">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 20">
            <path d="M0.5 0V20" id="Vector 17" stroke="var(--stroke-0, #D9D9D9)" />
          </svg>
        </div>
      </div>
      <Link3 />
      <div className="h-full relative shrink-0 w-0">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 20">
            <path d="M0.5 0V20" id="Vector 17" stroke="var(--stroke-0, #D9D9D9)" />
          </svg>
        </div>
      </div>
      <Link4 />
      <div className="h-full relative shrink-0 w-0">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 20">
            <path d="M0.5 0V20" id="Vector 17" stroke="var(--stroke-0, #D9D9D9)" />
          </svg>
        </div>
      </div>
      <Link5 />
    </div>
  );
}