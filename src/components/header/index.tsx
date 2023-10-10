"use client";
import React from "react";
import Link from "next/link";

import { creepster } from "@/lib/fonts";
import * as SC from "./style";

export const Header = () => {
  return (
    <SC.HeaderParent>
      <Link href="/">
        <SC.HeaderContainer className={creepster.className}>
          21 CENTURY MOVIES
        </SC.HeaderContainer>
      </Link>
    </SC.HeaderParent>
  );
};
