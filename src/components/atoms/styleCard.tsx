import { ReactNode } from "react";

export interface StyleCardProps {
  placeTagAtLeft: boolean,
  children: ReactNode,
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>,
};

export default function StyleCard({ placeTagAtLeft, children, Icon }: StyleCardProps) {
  return (
    <div className="shadow-xl rounded-3xl bg-slate-50/80 mx-4 my-7 h-30">
      <div className={`${placeTagAtLeft ? "float-left rounded-l-3xl" : "float-right rounded-r-3xl"} bg-lime-950 h-full w-3/12 flex flex-col justify-center items-center p-2`}>
        <Icon className="text-slate-50 size-10" />
      </div>

      <div className="h-full">
        {children}
      </div>
    </div>
  )
}