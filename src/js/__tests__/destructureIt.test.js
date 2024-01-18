import character from "../data";
import destructureIt from "../destructureIt";

describe("test function destructureIt", () => {
  test("correct character", () => {
    const reference = [
      {
        id: 8,
        name: "Двойной выстрел",
        icon: "http://...",
        description: "Двойной выстрел наносит двойной урон",
      },
      {
        id: 9,
        name: "Нокаутирующий удар",
        icon: "http://...",
        description: "Описание недоступно",
      },
    ];
    expect(destructureIt(character)).toEqual(reference);
  });

  describe("incorrect character", () => {
    const badCharacters = [{ ...character, special: undefined }, {}];

    test.each(badCharacters)("%p", (character) => {
      expect(() => destructureIt(character)).toThrow("спец атак нет");
    });
  });
});
