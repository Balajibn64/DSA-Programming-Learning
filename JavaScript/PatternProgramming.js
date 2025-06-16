// ******************************************************
// Star Pattern Printing in JavaScript
// Description: Demonstrates various star and number-based
//              patterns using nested loops.
// ******************************************************

let i, j, k, row, n;

// ----------------------------
// 1. Square Star Pattern
// ----------------------------
console.log("1. Square Star Pattern");
n = 5;
for (i = 1; i <= n; i++) {
    row = "";
    for (j = 1; j <= n; j++) {
        row += "*";
    }
    console.log(row);
}
/*
*****
*****
*****
*****
*****
*/
console.log("");

// ----------------------------
// 2. Right Angled Triangle Star Pattern
// ----------------------------
console.log("2. Right Angled Triangle Star Pattern");
n = 5;
for (i = 1; i <= n; i++) {
    row = "";
    for (j = 1; j <= i; j++) {
        row += "*";
    }
    console.log(row);
}
/*
*
**
***
****
*****
*/
console.log("");

// ----------------------------
// 3. Inverted Right Angled Triangle Star Pattern
// ----------------------------
console.log("3. Inverted Right Angled Triangle Star Pattern");
n = 5;
for (i = n; i > 0; i--) {
    row = "";
    for (j = 1; j <= i; j++) {
        row += "*";
    }
    console.log(row);
}
/*
*****
****
***
**
*
*/
console.log("");

// ----------------------------
// 4. Number Right Angled Triangle Pattern
// ----------------------------
console.log("4. Number Right Angled Triangle Pattern");
n = 5;
for (i = 1; i <= n; i++) {
    row = "";
    for (j = 1; j <= i; j++) {
        row += j;
    }
    console.log(row);
}
/*
1
12
123
1234
12345
*/
console.log("");

// ----------------------------
// 5. Inverted Number Right Angled Triangle Pattern
// ----------------------------
console.log("5. Inverted Number Right Angled Triangle Pattern");
n = 5;
for (i = n; i > 0; i--) {
    row = "";
    for (j = 1; j <= i; j++) {
        row += j;
    }
    console.log(row);
}
/*
12345
1234
123
12
1
*/
console.log("");

// ----------------------------
// 6. Pyramid Star Pattern
// ----------------------------
console.log("6. Pyramid Star Pattern");
n = 10;
for (i = 1; i <= n; i++) {
    let spaces = "";
    for (j = 1; j <= n - i; j++) {
        spaces += " ";
    }
    let stars = "";
    for (k = 1; k <= (2 * i - 1); k++) {
        stars += "*";
    }
    console.log(spaces + stars);
}
/*
         *
        ***
       *****
      *******
     *********
    ***********
   *************
  ***************
 *****************
*******************
*/
console.log("");

// ----------------------------
// 7. Inverted Pyramid Star Pattern
// ----------------------------
console.log("7. Inverted Pyramid Star Pattern");
n = 10;
for (i = 1; i <= n; i++) {
    let spaces = "";
    for (j = 1; j < i; j++) {
        spaces += " ";
    }
    let stars = "";
    for (k = 1; k <= (2 * (n - i) + 1); k++) {
        stars += "*";
    }
    console.log(spaces + stars);
}
/*
*******************
 *****************
  ***************
   *************
    ***********
     *********
      *******
       *****
        ***
         *
*/
console.log("");

// ----------------------------
// 8. Diamond Pattern
// ----------------------------
console.log("8. Diamond Pattern");
n = 5;
for (i = 1; i <= n; i++) {
    let spaces = "";
    for (j = 1; j <= n - i; j++) {
        spaces += " ";
    }
    let stars = "";
    for (k = 1; k <= (2 * i - 1); k++) {
        stars += "*";
    }
    console.log(spaces + stars);
}
for (i = n - 1; i >= 1; i--) {
    let spaces = "";
    for (j = 1; j <= n - i; j++) {
        spaces += " ";
    }
    let stars = "";
    for (k = 1; k <= (2 * i - 1); k++) {
        stars += "*";
    }
    console.log(spaces + stars);
}
/*
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
*/
console.log("");

// ----------------------------
// 9. Hollow Rectangle Pattern
// ----------------------------
console.log("9. Hollow Rectangle Pattern");
n = 8;
for (i = 1; i <= n; i++) {
    row = "";
    for (j = 1; j <= n; j++) {
        if (i === 1 || i === n || j === 1 || j === n) {
            row += "*";
        } else {
            row += " ";
        }
    }
    console.log(row);
}
/*
********
*      *
*      *
*      *
*      *
*      *
*      *
********
*/
console.log("");

// ----------------------------
// 10. Hollow Rectangle with Numbers
// ----------------------------
console.log("10. Hollow Rectangle with Numbers");
n = 8;
for (i = 1; i <= n; i++) {
    row = "";
    for (j = 1; j <= n; j++) {
        if (i === 1 || i === n || j === 1 || j === n) {
            row += i;
        } else {
            row += " ";
        }
    }
    console.log(row);
}
/*
11111111
2      2
3      3
4      4
5      5
6      6
7      7
88888888
*/
console.log("");

// ----------------------------
// 11. Floyd's Triangle
// ----------------------------
console.log("11. Floyd's Triangle");
n = 5;
let num = 1;
for (i = 1; i <= n; i++) {
    let line = "";
    for (j = 1; j <= i; j++) {
        line += num + " ";
        num++;
    }
    console.log(line);
}
/*
1 
2 3 
4 5 6 
7 8 9 10 
11 12 13 14 15 
*/
console.log("");

// ----------------------------
// 12. Pascal's Triangle
// ----------------------------
console.log("12. Pascal's Triangle");
n = 5;
for (i = 0; i < n; i++) {
    let spaces = "";
    for (let s = 0; s < n - i - 1; s++) {
        spaces += " ";
    }
    let val = 1;
    let line = spaces;
    for (j = 1; j <= i + 1; j++) {
        line += val + " ";
        val = val * (i - j + 1) / j;
    }
    console.log(line.trimEnd());
}
/*
    1
   1 1
  1 2 1
 1 3 3 1
1 4 6 4 1
*/
console.log("");

// ----------------------------
// 13. Complex Asterisk Pattern
// ----------------------------
console.log("13. Complex Asterisk Pattern");
n = 16;
for (i = 0; i < n; i++) {
    row = "";
    for (j = 0; j < n; j++) {
        if (
            i === 0 || i === n - 1 || j === 0 || j === n - 1 ||
            i === j || i + j === n - 1 ||
            i + j === Math.floor(n / 2) || i - j === Math.floor(n / 2) ||
            i + j === (n - 1 + Math.floor(n / 2)) ||
            j === Math.floor(n / 2) || i === Math.floor(n / 2) ||
            j - i === Math.floor(n / 2)
        ) {
            row += "*";
        } else {
            row += " ";
        }
    }
    console.log(row);
}
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
*/
console.log("");