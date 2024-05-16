"use client ";
import React from "react";
import { Heading } from "@carbon/react";

function AttributeCard({ label, content, bgColor }) {
  return (
    <div
      className={`mb-3 ${bgColor} h-[82px] rounded-[3px] pt-2 pl-3 pb-4 flex flex-col justify-between`}
    >
      <Heading class="text-[#595959] text-sm font-normal leading-4.5 tracking-[0.16px] text-left">
        {label}
      </Heading>
      <Heading className="text-[#0F62FE] text-2xl font-normal leading-[18px] tracking-[0.16px] text-left">
        {content}
      </Heading>
    </div>
  );
}

export default AttributeCard;
