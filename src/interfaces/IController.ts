import { NextResponse } from "next/server";
import Params from "./routeParams";

export default interface IController {
  add(request: Request): Promise<NextResponse>;
  get({ params }: Params): Promise<NextResponse>;
  getAll(): Promise<NextResponse>;
  update({ params }: Params, request: Request): Promise<NextResponse>;
  delete({ params }: Params): Promise<NextResponse>;
}