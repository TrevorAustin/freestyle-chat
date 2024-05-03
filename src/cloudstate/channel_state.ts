import { cloudstate } from "freestyle-sh";
import { Message } from "./messages";

// @cloudstate decorator makes this class's data persistent.
// data can only be augmented and retrieved through the class's methods.
@cloudstate
export class ChannelState {
  // static id=crypto.randomUUID();
  messages:Message[]
  constructor() {
    this.messages = [];
  }
  get() {
    return this.messages.map(m=>m.get());
  }
  post(message:Message) {
    this.messages.push(message);
  }
}
