let sec = -100;
let secIncrement = 200;
const sniperArr = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];

for (let j = 0; j < 2; j++) {
  for (let i = 0;  i < sniperArr.length; i++) {
    // console.log(item);
    sec += 200;
    setTimeout(()=>{
      process.stdout.write(sniperArr[i]);
      if ((j === 1) && (i === sniperArr.length - 1)) {
        setTimeout(()=>{
          process.stdout.write(sniperArr[0]);
          console.log();
        }, secIncrement);
      }
    }, sec);
  }
}