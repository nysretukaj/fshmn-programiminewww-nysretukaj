export function llogarit(cmimi, persona, buxheti) {

  if (typeof cmimi !== "number" || !Number.isFinite(cmimi)) {
    return { ok: false, error: "Çmimi duhet të jetë një numër i fundëm." };
  }
  if (typeof buxheti !== "number" || !Number.isFinite(buxheti)) {
    return { ok: false, error: "Buxheti duhet të jetë një numër i fundëm." };
  }
  if (typeof persona !== "number" || !Number.isFinite(persona)) {
    return { ok: false, error: "Numri i personave duhet të jetë një numër i fundëm." };
  }

  if (cmimi < 0) {
    return { ok: false, error: "Çmimi nuk mund të jetë negativ." };
  }
  if (buxheti < 0) {
    return { ok: false, error: "Buxheti nuk mund të jetë negativ." };
  }
  if (!Number.isInteger(persona) || persona < 1 || persona > 5) {
    return { ok: false, error: "Numri i personave duhet të jetë numër i plotë nga 1 në 5." };
  }

  const cmimiCent = Math.round(cmimi * 100);
  const buxhetiCent = Math.round(buxheti * 100);
  const totalCent = cmimiCent * persona;
  const mbetjaCent = buxhetiCent - totalCent;

  const total = totalCent / 100;
  const mbetja = mbetjaCent / 100;
  const brenda = totalCent <= buxhetiCent; // true edhe kur total === buxheti

  return { ok: true, total, mbetja, brenda };
}