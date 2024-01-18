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
