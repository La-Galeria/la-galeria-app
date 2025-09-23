"use client";
import { deleteService } from "@/actions/serviceActions";
import ElementView from "@/components/molecules/elementView";
import { useParams } from "next/navigation";

export default function Page() {
  const { id } = useParams();
  return <ElementView name="Corte" price={10000} deleteHandler={deleteService} />
}