
/*
Create and traverse the path of n*m matrix 
ex: 

Input :
m = 5; n = 5; 
path = 'LURU'
25 10 11 12 13
24  9  2  3 14
23  8  1  4 15
22  7  6  5 16
21 20 19 18 17

Output : 1->8->9->2->11 


Input :
m = 3; n = 3; 
path = 'LURR'
9 2 3
8 1 4
7 6 5

Output : 1->8->9->2->3 

Input :
m = 4; n = 4; 
path = 'LURR'
16  5  6  7
15  4  1  8
14  3  2  9  
13 12 11 10

Output : 1->4->5->6->7 
*/


var n = 5 , m = 5;
var mat = new Array(n);
var a = m*n;
var k = 0,l = 0;

for(let i = 0; i < mat.length; i++){
  mat [i] = [];
}

while(k < n && l < n){
  for(let i = l; i < n; i++){
    mat[i][k] = a;
    a--;
  }
  k++;
  for(let i = k; i < m ; i++){
    mat[n-1][i] = a;
    a--;
  }
  n--;
  
  if (k < m) {
    for (i = n - 1; i >= l; --i) {
      mat[i][m-1] = a;
      a--;
    }
    m--;
  }

  // Print the first column from the remaining
  // columns */
  if (l < n) {
    for (i = m - 1; i >= k; --i) {
       mat[l][i] = a;
       a--;
    }
    l++;
  }
  
}
//print matrix
for(let i = 0 ; i < mat.length; i++){
  console.log(mat[i]);  
}

let f1 = m-1;
let f2 = l;
let path = '1';
let command = 'LRUR';

for(let i = 0; i < command.length;i++){
    if(command[i]=='L'){
      f2 -= 1;
    }else if(command[i]=='R'){
      f2 += 1;
    }else if(command[i]=='U'){
      f1 -= 1;  
    }else{
      f1 += 1;
    }
  
    if(mat[f1][f2]){
        path += "->"+mat[f1][f2];
    }
}
console.log(path);  
