import { Events } from "./Events";
import axios from "axios";
import { AxiosResponse } from "axios";

export class CollectionModel<T, K> {
  models: T[] = [];
  events: Events = new Events();

  constructor(public url: string, public deserialize: (json: K) => T) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(callback?: () => void, queryParams: string = ""): void {
    axios.get(`${this.url}${queryParams}`).then((response: AxiosResponse) => {
      response.data.forEach((value: K) => {
        this.models.push(this.deserialize(value));
      });
      this.trigger("change");
      if (callback) {
        callback();
      }
    });
  }
}
