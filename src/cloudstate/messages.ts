import { cloudstate } from "freestyle-sh";

// @cloudstate decorator makes this class's data persistent.
// data can only be augmented and retrieved through the class's methods.
@cloudstate
export class Message {
  text:string = "";
  constructor(text:string) {
    this.text = text;
  }
  get() {
    return this.text;
  }
}
