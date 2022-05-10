process.stdout.write('hello from spinner2.js... \rheyyy\n');

let accum = 0;
const array = ['\r|   ','\r/   ','\r-   ', '\r\\   ','\r|   ','\r/   ','\r-   ','\r\\   '];
for (let ch of array) {
  setTimeout(() => {
    process.stdout.write(ch);
  }, accum);
  accum += 200;
}
