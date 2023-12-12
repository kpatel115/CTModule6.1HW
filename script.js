// Codewars Question 1
// Is this a triangle
/*
def is_triangle(a, b, c):
    if (a + b) <= c:
        return False
    elif (b + c) <= a:
        return False
    elif (a + c) <= b:
        return False
    else:
        return True 
*/
console.log("Codewars Question 1")
function isTriangle(a,b,c){
    if ((a + b) <= c){
        console.log('False')
    } else if ((b + c) <= a){
        console.log('False')
    } else if ((a + c) <= b){
        console.log('False')
    } else {
        console.log('True')
    }
}
isTriangle(4,2,3)

// Codewars Question 2
// String Repeat
/* - Python
def repeat_str(repeat, string):
    r = int(repeat)
    s = str(string)
    str1 = s * r
    return str1;
*/
// JS
console.log("Codewars Question 2")
function repeatStr(int_repeat, string_repeat){
    let n = parseInt(int_repeat)
    let str2 = ""
    for (let i = 0; i < n; i++){
      str2 += string_repeat
    }
  console.log(str2)
}
repeatStr(6, "I")


// Codewars Question 3
// Friend or Foe
/* Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
i.e.*/
/* - Python
def friend(x):
    for name in x[:]:
        if len(name) == 4:
            continue
        else:
            x.remove(name)
    return x
    
    #Code
*/
console.log("Codewars Question 3")
people = ["Ryan", "Kieran", "Jason", "Yous"]
function friend(lst){
    let friends = []
    for (let i = 0; i < lst.length; i++){
        if (lst[i].length == 4){
            friends.push(lst[i])
        } else {
            console.log(`${lst[i]} is not my friend`)
        }
    }
    console.log(friends)
}
friend(people)

// Codewars Question 4
// Reverse List Order

/* In this kata you will 
create a function that takes in a list
and returns a list with the reverse order. */
console.log('Codewars Question 4')
ex1 = [1, 2, 3, 4]
ex2 = [9, 2, 0, 7]
function revList(lst){
    reversed = lst.reverse()
    console.log(reversed)
}
revList(ex2)

//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
console.log('Exercise #1')
function findWords(str, lst) {
    let dog_list = str.split(' ');
    var dog_words = dog_list.map(b => b.toLowerCase())
    var words = lst.map(v => v.toLowerCase());

    let names = [];

    for (let i = 0; i < lst.length; i++) {
        if (dog_words.includes(words[i])) {
            names.push(words[i]);
            console.log('Matched dog_name: ' + words[i]);
        }
    }

    if (names.length === 0) {
        console.log("No Matches");
    }

    return names;
}

// Example usage:
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

findWords(dog_string, dog_names);


//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */
console.log('Exercise #2')

let arr1 = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    //code goes here
    for (let i = 0; i < arr.length; i++){
        if (i % 2 == 0){
            arr.splice(i, 1, 'even index');
        } else {
            continue
        }
    }
    console.log(arr)
}
replaceEvens(arr1)
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]