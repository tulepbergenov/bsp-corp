"use client";

import { useLenis } from "@/_shared/hooks";
import { ILayout } from "@/_shared/types";

export const SmoothScrollProvider = ({ children }: ILayout) => {
  useLenis();

  return (
    <div className="flex min-h-full flex-col overflow-hidden">{children}</div>
  );
};
