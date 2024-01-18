/** функция возвращает спец атаки
 *
 * @param {{}} obj - персонаж
 *
 * @throws {error} у персонажа нет поля special
 *
 * @return {[]} массив объектов, в каждом спец атака
 */
export default function destructureIt(obj) {
  if (!obj?.special) {
    throw new Error("спец атак нет");
  }

  return obj.special.map((attack) =>
    attack.description
      ? attack
      : { ...attack, description: "Описание недоступно" }
  );
}
