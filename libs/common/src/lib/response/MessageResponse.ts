export type ResultType = "ERROR" | "WARNING" | "INFO";

export class MessageResponse {
  constructor(public readonly message: string, public readonly resultType: ResultType) {}
}
