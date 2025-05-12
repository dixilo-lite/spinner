let arr ="|/-\\|/-\\";
let n= 100;
while(n!== 1700)  {
  for(const char of arr)  {   
    setTimeout(()=>{
      process.stdout.write(`\r${char}'`);
    },n);
    n += 200;
  }
}
