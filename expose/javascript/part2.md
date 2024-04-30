hello world
1. It prints out 3. This is because the for loop stops when i = 3. Because var allows a variable to have a scope outside of the for loop.
2. It prints out 150 because that was the discounted price from 300 * 0.5 = 150. Since there is scope outside the for loop with var, discountedPrice still has 150 as its value.
3. It prints out 150 because that is the discount applied to the last number in prices list.
4. discountPrices returns [ 50, 100, 150 ]. The function returns discounted which has all the discounted pricess from the price list.
5. There is an error, because the let keyword does not have scope outside the for loop. 
6. There is an error, because dicountedPrice is made in the for loop and it does not have scope outside of it.
7. It prints 150, because finalPrice has scope and the for loop can see the variable too.
8. The function returns [ 50, 100, 150 ]. Discounted and finalPrice variables can bee seen in the for loop, so the code inside the for loop works as intended.
9. The program errors out because let i does not have scope outside the for loop.
10. It prints 3 because that is the value that was initialized at the start of the function. The reason why the const in the for loop is fine is because each const is called in a separate scope instead of the same one.
11. It outputs [ 50, 100, 150 ]. Each discountedPrice in the for loop goes into discounted which is returned.
12. 
    a. student.name
    b. student['Grad Year']
    c.student.greeting()
    d.student["Favorite Teacher"]["name"]
    e.student.courseLoad[0]
13. 
    a. 32, because 2 maps to the character '2' which makes '3' + '2' = 32
    b. 1, because '3' maps to the number 3 so 3 - 2 = 1
    c. 3, because null maps to 0 so 3 + 0 = 3
    d. 3null, because null maps to the word "null" which is appended to '3'
    e. 4, because true maps to 1 so 1 + 3 = 4
    f. 0, because false and null are numerically 0
    g. 3undefined, because undefined becomes text and is appended to '3'
    h. NaN, because there you cannot subtract letters
14. 
    a. true, because '2' becomes numerical 2 
    b. false, because '12' is alphanumerically before '2' 
    c. true, because '2' becomes numerical 2
    d. false, because 2 and '2' are different types
    e. false, because true converts to 1 and 1 != 2
    f. true, because Boolean(2) is true and the types are matching
15. == offers type correction to the variables when comparing while === requires both sides to be the same type to compare
16. 
    21
    45
    5
    2
17. [ 2, 4, 6 ] is the result. doSomething is a function saved into callback. [1,2,3] is saved into array. The for loop applies callback to each element of array.
18. OK
19.
    1
    4
    3
    2
