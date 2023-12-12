//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
/*
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]
let names = []

function findWords(str,lst){
    //Your code goes here
    let dog_list = str.split(' ')
    for (let i = 0; i < lst.length; i++){
        if (lst[i] == dog_list){
            names.append(lst[i])
            console.log('Matched dog_name: ' + lst[i])
        } else {
            console.log("no matches")
        }
    }
    return names
}

//Call method here with parameters
console.log()
findWords(dog_string, dog_names)
*/
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

let given_arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    //code goes here
    for (let i = 0; i < arr.length; i++){
        if (i % 2 == 0) {
            arr.splice(i, 1, 'even index');

        } else {
            console.log('not even')
        }
    }
    console.log(arr)

}

replaceEvens(given_arr)

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]