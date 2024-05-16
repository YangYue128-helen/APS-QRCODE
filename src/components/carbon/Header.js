"use client";
import React from "react";
import { Header, HeaderMenuButton, HeaderName } from "@carbon/react";
import { Asset } from "@carbon/icons-react";

function MyHeader() {
  return (
    <Header aria-label="SUPCON APS" className="flex justify-between ">
      <div className="flex items-center">
        <Asset className="ml-3" />
        <HeaderName href="#" prefix="SUPCON">
          APS
        </HeaderName>
      </div>
      <HeaderMenuButton className="mr-3 "></HeaderMenuButton>
    </Header>
  );
}

export default MyHeader;
