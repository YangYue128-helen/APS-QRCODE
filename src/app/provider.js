"use client";

import React, { useState, useContext } from "react";
import MyHeader from "@/components/carbon/Header";
import { Content, Theme } from "@carbon/react";

export default function Providers({ children }) {
  return (
    <>
      <Theme theme="g100">
        <MyHeader />
      </Theme>
      <Theme theme="g10">
        <Content
          className="mt-[48px] h-full min-h-screen"
          // className={`pt-20 h-screen transition-[margin-left] duration-110 ease-in-out ${
          //   isSideNavExpanded ? 'ml-52' : 'ml-0'
          // }`}
        >
          {children}
        </Content>
      </Theme>
    </>
  );
}
