"use client";

import React from "react";
import { RequestDemoPopup } from "./request-demo-popup";
import { WatchTourPopup } from "./watch-tour-popup";
import { ContactSalesPopup } from "./contact-sales-popup";

export const ModalManager = () => {
  return (
    <>
      <RequestDemoPopup />
      <WatchTourPopup />
      <ContactSalesPopup />
    </>
  );
};
