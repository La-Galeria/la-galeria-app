import Link from "next/link";
import { FaPlus } from "react-icons/fa6";

interface EmptyViewProps {
  keyword: string;
  createLink: string;
}

export default function EmptyView({ keyword, createLink }: EmptyViewProps) {
  return (
    <div className="rounded-3xl bg-slate-50/70 border-dashed border-4 border-orange-950 h-5/12 my-10 mx-2 p-5">
      <div className="flex flex-col justify-around items-center h-full">
        <h2 className="text-center">Todavía no tienes {keyword}</h2>
        <Link href={createLink}>
          <div className="rounded-full border-dashed border-4 border-orange-950 p-5">
            <FaPlus className="size-14 text-orange-950" />
          </div>
        </Link>
      </div>
    </div>
  );
}
