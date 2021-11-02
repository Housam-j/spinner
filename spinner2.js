const arr = ['|','/', '-','\\','|','/', '-','\\','|','/', '-','\\','|','/', '-','\\','|'];
let t = 100;
for (let char of arr) {
  setTimeout(() => {
    process.stdout.write(`\r${char}`);
  }, t += 200);
}