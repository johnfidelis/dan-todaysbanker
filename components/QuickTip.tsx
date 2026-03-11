"use client"
import React from 'react';

function TipContent() {
  return (
    <div className="flex flex-col gap-[20px] items-start leading-[25px] w-full">
      <p className="font-sans font-bold text-[#1e1e1e] text-[24px]">Quick Tip</p>
      <div className="font-sans font-normal text-[#303030] text-[17px] text-justify w-full whitespace-pre-wrap">
        <p className="mb-[12px]">{`The main types of bets are 1, X 2. In this context 1 stands for the Home team X denotes a draw and 2 represents the team. Additionally, 1X indicates a bet on either the Home team or a draw outcome; while X2 is for betting on either the Away team or a draw result. For example if someone mentions "1 @ 2.15 " it means they are wagering on the home team with odds of 2.15. Therefore if you bet $10 your potential payout would be $21.50 with a profit of $11.50. `}</p>
        <p className="mb-[12px]">{`Our aim is to provide reliable information. However it's important to note that with top-notch advice, at your disposal not everyone possesses what it takes to excel as a punter. `}</p>
        <p className="mb-[12px]">&nbsp;</p>
        <p className="font-bold">Best of luck!</p>
      </div>
    </div>
  );
}

export default function QuickTip() {
  return (
    <div className="w-full px-[10px] py-[20px]">
      <TipContent />
    </div>
  );
}
