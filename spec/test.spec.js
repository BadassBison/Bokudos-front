import { State } from '../src/states/rootState';

xdescribe("A suite", function () {
  it("contains spec with an expectation", function () {
    expect(true).toBe(true);
  });
});

describe("State", () => {
  it("is initialized", () => {
    expect(State).toBeTruthy();
  });
});


