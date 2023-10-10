"use client";
import React from "react";
import Link from "next/link";

import { patrickHand, patrickHandSc } from "@/lib/fonts";
import * as SC from "./style";

export const Footer = () => {
  return (
    <SC.FooterSection>
      <SC.FooterContainer>
        <SC.FooterLinks className={patrickHandSc.className}>
          <Link href="/login">LOGIN</Link> ·{" "}
          <Link href="/terms-condition">TERMS OF SERVICE</Link> ·{" "}
          <Link href="/">Home</Link>
        </SC.FooterLinks>
        <SC.FooterCite className={patrickHand.className}>
          built by castynet studios
        </SC.FooterCite>
      </SC.FooterContainer>
    </SC.FooterSection>
  );
};
