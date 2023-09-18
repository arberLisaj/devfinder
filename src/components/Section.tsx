import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const Section = ({ children }: Props) => {
  return <div className="max-w-[1200px] mx-auto py-5 mt-8 p-2">{children}</div>;
};

export default Section;
