import { NextResponse } from "next/server";
import Params from "./routeParams";

export default interface IController {
  add(formData: FormData): Promise<ResponseDTO>;
  get({ params }: Params): Promise<ResponseDTO>;
  getAll(): Promise<ResponseDTO>;
  update({ params }: Params, request: Request): Promise<ResponseDTO>;
  delete(formData: FormData): Promise<ResponseDTO>;
}