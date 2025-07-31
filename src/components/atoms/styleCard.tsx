import { ReactNode } from "react";

interface StyleCardProps {
  placeTagAtLeft: boolean,
  children: ReactNode,
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>,
};

export default function StyleCard({ placeTagAtLeft, children, Icon }: StyleCardProps) {
  return (
    <div className="shadow-md rounded-3xl bg-slate-50 m-5 h-30">
      <div className={`${placeTagAtLeft ? "float-left" : "float-right"} bg-lime-950 rounded-l-3xl h-full w-3/12 flex flex-col justify-center items-center p-2`}>
        <Icon className="text-slate-50 size-10" />
      </div>

      <div className="flex justify-center items-center h-full">
        {children}
      </div>
    </div>
  )
}