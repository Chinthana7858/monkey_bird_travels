"use client";
import React from "react";
import { QuickContact } from "./quickcontact";
import { useBooleanContext } from "@/context/boolcontext";

export default function Enquirenow() {

  return (
    <>
      
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <QuickContact /> 
        </div>
     
    </>
  );
}
