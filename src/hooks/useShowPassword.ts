"use client";

import { useState } from "react";

export default function useShowPassword() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () =>
    setIsPasswordVisible((isShown) => !isShown);
  return { isPasswordVisible, togglePasswordVisibility };
}
