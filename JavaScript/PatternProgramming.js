let i;
let j;
let row;
let n ;


//Basic Pattern Questions

// 1. Square Star Pattern
n = 5;
for(i = 1; i<=n; i++){
    row = "";
    for(j = 1; j<=n ; j++){
        row += "*";
    }
    console.log(row);
}

// Output:
/*
*****
*****
*****
*****
*****
This code generates a square pattern using asterisks (*) in JavaScript.
*/

console.log("");

// 2.Right Angled Triangle Star Pattern
n = 5;
for(i = 1; i<=n ; i++ ){
    row = "";
    for(j = 1; j<=i; j++){
        row += "*";
    }
    console.log(row);
}

// Output:
/*
*
**
***
****
*****
This code generates a right-angled triangle pattern using asterisks (*) in JavaScript.
*/

console.log("");

// 3.Inverted Right Angled Triangle Star Pattern
n = 5;
for(i = n; i>0 ; i-- ){
    row = "";
    for(j = 1; j<=i; j++){
        row += "*";
    }
    console.log(row);
}

// Output:
/*
*****
****
***
**
*
This code generates an inverted right-angled triangle pattern using asterisks (*) in JavaScript.
*/
console.log("");


// 4. Number Right Angled Triangle Pattern
n = 5;
for(i = 1; i<=n ; i++ ){
    row = "";
    for(j = 1; j<=i; j++){
        row += j;
    }
    console.log(row);
}

// Output:
/*
1
12
123
1234
12345
This code generates a right-angled triangle pattern using numbers in JavaScript.
*/

console.log("");

// 5. Inverted Number Right Angled Triangle Pattern
n = 5;
for(i = n; i>0 ; i-- ){
    row = "";
    for(j = 1; j<=i; j++){
        row += j;
    }
    console.log(row);
}

// Output:
/*
12345
1234
123
12
1
This code generates an inverted right-angled triangle pattern using numbers in JavaScript.
*/

console.log("");

// Intermediate Pattern Questions

// 6. Pyramid Star Pattern
n = 5;




n = 8;
for(i = 1; i<=n ; i++ ){
    row = "";
    for(j = 1; j<=n; j++){
        if(i == 1 || i== n || j == 1 || j == n){
            row += "*";
        }
        else{
            row += " ";
        }
    }
    console.log(row);
}

// Output:
/*
********
*      *
*      *
*      *
*      *
*      *
*      *
********
This code generates a hollow square pattern using asterisks (*) in JavaScript.
The outermost rows and columns are filled with asterisks, 
while the inner area is left blank, creating a hollow effect.
*/

for(i = 1; i<=n ; i++ ){
    row = "";
    for(j = 1; j<=n; j++){
        if(i == 1 || i== n || j == 1 || j == n){
            row += i;
        }
        else{
            row += " ";
        }
    }
    console.log(row);
}

// Output:
/*
11111111
2      2
3      3
4      4
5      5
6      6
7      7
88888888

This code generates a hollow square pattern using numbers in JavaScript. 
The outermost rows and columns are filled with the row number, 
while the inner area is left blank, creating a hollow effect.
*/

n = 16;

for(i = 0; i<n ; i++ ){
    row = "";
    for(j = 0; j<n; j++){
        if(i == 0 || i== n-1 || j == 0 || j == n-1 || i == j || i+j == n-1 || i+j == Math.floor(n/2) 
            || i-j == Math.floor(n/2) || i + j == (n-1 + Math.floor(n/2)) ||
            j == Math.floor(n/2) || i == Math.floor(n/2) || j-i == Math.floor(n/2) ){
            row += "*";
        }
        else{
            row += " ";
        }
    }
    console.log(row);
}

// Output:
/*
****************
**     ***    **
* *   * * *  * *
*  * *  *  **  *
*   *   *  **  *
*  * *  * *  * *
* *   * **    **
**     **      *
****************
**    * **    **
* *  *  * *  * *
*  **   *  **  *
*  **   *  **  *
* *  *  * *  * *
**    * **    **
****************
This code generates a complex pattern using asterisks (*) in JavaScript.
The pattern includes a hollow square, diagonal lines, and a cross in the center.
*/


