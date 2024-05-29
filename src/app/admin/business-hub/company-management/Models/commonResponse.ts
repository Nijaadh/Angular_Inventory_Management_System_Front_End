import { Company } from "./company.model";

export interface CommonResponse {
    status: boolean;
    errorMessages: string[];
    payload: Company[];
    commonMessage: string;
  }