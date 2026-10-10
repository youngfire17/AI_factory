import { emptyMeta, simulateRun, endRun, spendMeta, STRATEGIES } from '../src/sim.js';

const median = (a) => [...a].sort((x, y) => x - y)[Math.floor(a.length / 2)];
console.log('strategy      run1 median wave   minutes');
for (const name of Object.keys(STRATEGIES)) {
  const waves = [];
  const mins = [];
  for (let seed = 1; seed <= 15; seed++) {
    const s = simulateRun(emptyMeta(), name, seed);
    waves.push(s.wave);
    mins.push(s.t / 60);
  }
  console.log(name.padEnd(13), String(median(waves)).padStart(5), '  ', median(mins).toFixed(1).padStart(8));
}
console.log('\nmeta progression (balanced bot, 12 consecutive runs)');
let meta = emptyMeta();
for (let run = 1; run <= 12; run++) {
  const s = simulateRun(meta, 'balanced', 100 + run);
  const { meta: after, gained } = endRun(s);
  meta = spendMeta(after);
  console.log(`run ${String(run).padStart(2)}  wave ${String(s.wave).padStart(3)}  minutes ${(s.t / 60).toFixed(1).padStart(5)}  +${gained} pts  meta P${meta.power}/V${meta.vigor}/F${meta.fortune}`);
}
