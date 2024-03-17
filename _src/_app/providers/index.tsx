import { ILayout } from "@/_shared/types";
import { SmoothScrollProvider } from "./SmoothScrollProvider";
import { WrapBalancerProvider } from "./WrapBalancerProvider";

export const Providers = ({ children }: ILayout) => {
  return (
    <SmoothScrollProvider>
      <WrapBalancerProvider>{children}</WrapBalancerProvider>
    </SmoothScrollProvider>
  );
};
