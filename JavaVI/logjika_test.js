import { llogarit } from "./logjika.js";

let kaluar = 0;
let deshtuar = 0;

function pohoBarazi(pershkrim, aktual, pritur) {
  const a = JSON.stringify(aktual);
  const p = JSON.stringify(pritur);
  if (a === p) {
    kaluar++;
    console.log(`✓ ${pershkrim}`);
  } else {
    deshtuar++;
    console.log(`✗ ${pershkrim}`);
    console.log(`  pritur: ${p}`);
    console.log(`  u mor:  ${a}`);
  }
}

function pohoFalse(pershkrim, rezultat) {
  if (rezultat.ok === false && typeof rezultat.error === "string") {
    kaluar++;
    console.log(`✓ ${pershkrim}`);
  } else {
    deshtuar++;
    console.log(`✗ ${pershkrim}`);
    console.log(`  u mor: ${JSON.stringify(rezultat)}`);
  }
}

pohoBarazi(
  "normal: llogarit(4,5,20) brenda buxhetit saktësisht",
  llogarit(4, 5, 20),
  { ok: true, total: 20, mbetja: 0, brenda: true }
);

pohoBarazi(
  "kufi: llogarit(0.1,3,0.3) shmang gabimet e pikës lëvizëse",
  llogarit(0.1, 3, 0.3),
  { ok: true, total: 0.3, mbetja: 0, brenda: true }
);

pohoBarazi(
  "tejkalim: llogarit(4.5,5,20) kalon buxhetin",
  llogarit(4.5, 5, 20),
  { ok: true, total: 22.5, mbetja: -2.5, brenda: false }
);

pohoFalse("negativ: çmimi negativ kthen ok:false", llogarit(-4, 2, 20));
pohoFalse("negativ: buxheti negativ kthen ok:false", llogarit(4, 2, -20));

pohoFalse("NaN: persona=NaN kthen ok:false", llogarit(4, NaN, 20));
pohoFalse("NaN: cmimi=NaN kthen ok:false", llogarit(NaN, 2, 20));
pohoFalse("zero persona: persona=0 kthen ok:false", llogarit(4, 0, 20));

pohoFalse("persona>5: persona=6 kthen ok:false", llogarit(4, 6, 20));
pohoFalse("persona jo i plotë: persona=2.5 kthen ok:false", llogarit(4, 2.5, 20));
pohoBarazi(
  "persona kufi i epërm: persona=5 është valid",
  llogarit(1, 5, 5),
  { ok: true, total: 5, mbetja: 0, brenda: true }
);

pohoFalse("Infinity: buxheti=Infinity kthen ok:false", llogarit(4, 2, Infinity));

pohoFalse("string: cmimi si string kthen ok:false", llogarit("4", 2, 20));

console.log(`\n${kaluar} kaluan, ${deshtuar} dështuan.`);
if (deshtuar > 0) {
  process.exitCode = 1;
}