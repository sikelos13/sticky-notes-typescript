import { getUpdatedListOnSelect, getUpdatedOnSaveList, getUpdatedListOnDelete, getUpdatedListOnChangeText } from '../utils'

describe("Return updated list", () => {
  test("it should return the selected object inside an array ", () => {
    const input = [
      { id: 1234, text: "check first test", title: "check first test tile", active: false },
      { id: 1235, text: "check second test", title: "check second test tile", active: false },
      { id: 1236, text: "check third test", title: "check third test tile", active: false },
      { id: 1237, text: "check fourth test", title: "check fourth test tile", active: true }
    ];

    const output = [
      { id: 1234, text: "check first test", title: "check first test tile", active: false },
      { id: 1235, text: "check second test", title: "check second test tile", active: false },
      { id: 1236, text: "check third test", title: "check third test tile", active: true },
      { id: 1237, text: "check fourth test", title: "check fourth test tile", active: false }
    ];

    expect(getUpdatedListOnSelect(input, { id: 1236, text: "check third test", title: "check third test tile", active: true })).toEqual(output);

  });

  test("it should return the updated array after save note", () => {
    const input = [
      { id: 1234, text: "check first test", title: "check first test tile", active: false },
      { id: 1235, text: "check second test", title: "check second test tile", active: false },
      { id: 1236, text: "check third test", title: "check third test tile", active: false },
      { id: 1237, text: "check fourth test", title: "check fourth test tile", active: false }
    ];

    const output = [
      { id: 1234, text: "check first test", title: "check first test tile", active: false },
      { id: 1235, text: "check second test", title: "check second test tile", active: false },
      { id: 1236, text: "check third test change", title: "check third test tile", active: true },
      { id: 1237, text: "check fourth test", title: "check fourth test tile", active: false }
    ];

    expect(getUpdatedOnSaveList(input, { id: 1236, text: "check third test change", title: "check third test tile", active: false })).toEqual(output);

  });

  test("it should return the updated array after note delete", () => {
    const input = [
      { id: 1234, text: "check first test", title: "check first test tile", active: false },
      { id: 1235, text: "check second test", title: "check second test tile", active: false },
      { id: 1236, text: "check third test", title: "check third test tile", active: false },
      { id: 1237, text: "check fourth test", title: "check fourth test tile", active: true }
    ];

    const output = [
      { id: 1234, text: "check first test", title: "check first test tile", active: false },
      { id: 1235, text: "check second test", title: "check second test tile", active: false },
      { id: 1237, text: "check fourth test", title: "check fourth test tile", active: true }
    ];

    expect(getUpdatedListOnDelete(input, 1236)).toEqual(output);
  });


  test("it should return the updated array after change text on note", () => {
    const input = [
      { id: 1234, text: "check first test", title: "check first test tile", active: false },
      { id: 1235, text: "check second test", title: "check second test tile", active: false },
      { id: 1236, text: "check third test", title: "check third test tile", active: true },
      { id: 1237, text: "check fourth test", title: "check fourth test tile", active: false }
    ];

    const event = {
      target: {
        name: "title",
        value: "test value"
      }
    }

    const output = [
      { id: 1234, text: "check first test", title: "check first test tile", active: false },
      { id: 1235, text: "check second test", title: "check second test tile", active: false },
      { id: 1236, text: "check third test", title: "test value", active: true },
      { id: 1237, text: "check fourth test", title: "check fourth test tile", active: false }
    ];

    expect(getUpdatedListOnChangeText(input, event, { id: 1236, text: "check third test", title: "check third test tile", active: true })).toEqual(output);
  });
});