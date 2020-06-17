import { Component, VERSION, OnInit } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;

  myCounter = counters();
}

function counters() {
  const myCounter = {
    counters: [1, 2, 3].map(x => makeCounter(x)),
    addCounter() {
      this.counters.push(makeCounter(0));
    }
  };

  return myCounter;

  function makeCounter(initialValue: number) {
    return {
      count: initialValue,
      increment() {
        this.count = this.count + 1;
      },
      deleteMe() {
        const newCounters = myCounter.counters.filter(c => c !== this);
        myCounter.counters = newCounters;
      }
    };
  }
}
