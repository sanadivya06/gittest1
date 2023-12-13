let fs = require("fs");
let data = fs.readFileSync("input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
let n=parseInt(readLine());
for(let i=1; i<=n; i++){
    for(j=n; j>=i; j--){
        console.group(" ");
    }
    for(j=1;j<=i;j++){
        console.log("*");
    }
}