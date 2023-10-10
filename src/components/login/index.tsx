import React from "react";
import Link from "next/link";

import * as SC from "./styles";
import { patrickHandSc } from "@/lib/fonts";
export const Login = () => {
  return (
    <SC.LoginContainer>
      <SC.LoginButton className={patrickHandSc.className}>
        <Link href="/login">LOGIN</Link>
      </SC.LoginButton>
    </SC.LoginContainer>
  );
};
