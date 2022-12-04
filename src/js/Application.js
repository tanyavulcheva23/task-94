import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.emojis = [];
    this.banana = "🍌";
    this.emit(Application.events.READY);
  }

setEmojis(emojis) {
  this.emojis = emojis;
}

addBananas() {
    let p = document.createElement("p");
    document.getElementById("emojis").innerText = "";
    document.getElementById("emojis").appendChild(p);
    let monkeys = this.emojis.map(monkey => monkey + this.banana);
    p.textContent = monkeys;
}
}
