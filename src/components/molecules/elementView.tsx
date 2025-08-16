"use client";
import { useState } from "react";
import ElementCard from "./elementCard"
import DeletePopUpView from "./deletePopUpView";

interface ElementViewProps {
  name: string,
  description?: string | null,
  price?: number | undefined
}
export default function ElementView({ name, description, price }: ElementViewProps) {
  const [shouldShowDeletePopUp, setShouldShowDeletePopUp] = useState(false);

  function showDeletePopUp() {
    setShouldShowDeletePopUp(true);
  }

  function hideDeletePopUp() {
    setShouldShowDeletePopUp(false);
  }

  return (
    <>
      <ElementCard name={name} description={description} price={price} onDelete={showDeletePopUp} />

      {shouldShowDeletePopUp &&
      <DeletePopUpView onCancel={hideDeletePopUp} />}
    </>
  );
}