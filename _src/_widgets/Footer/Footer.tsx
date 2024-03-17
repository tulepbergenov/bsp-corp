import { cn } from "@/_shared/lib";
import { IDivElement } from "@/_shared/types";

export const Footer = ({ className, ...props }: IDivElement) => {
  return (
    <footer className={cn("bg-[#006DB1] text-white", className)} {...props}>
      <div>
        <div className="container">
          <div>
            <div className="border-b border-b-white/10">
              <ul></ul>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="bg-white/10 text-[#9AC2DB]">
        <div className="container">
          <div className="flex items-center justify-between py-[40px]">
            <ul className="flex flex-col">
              <li>ИНН: 7805747616</li>
              <li>КПП: 780501001</li>
            </ul>
            <ul className="flex flex-col">
              <li>ОГРН: 1197847072620</li>
              <li>БИК: 044525999</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
