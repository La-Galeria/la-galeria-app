"use server";

import IController from "@/interfaces/IController";
import { redirect } from "next/navigation";

export async function create(formData: FormData, controller: IController, redirectRoute: string) {
  await controller.add(formData);
  return redirect(redirectRoute);
}

export async function destroy(formData: FormData, controller: IController, redirectRoute: string) {
  await controller.delete(formData);
  return redirect(redirectRoute);
}