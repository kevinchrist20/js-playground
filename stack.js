/* Stacks */
// LIFO
// Functions: push, pop, peek, length

// the stack
var letters = []

var word = "kevin"
var rword = ""

for (i = 0; i < word.length; i++) {
    letters.push(word[i])
}

for (i = 0; i < word.length; i++) {
    rword += letters.pop()
}

if (rword === word) {
    console.log(`${word} is a palindrome`)
} else {
    console.log(`${word} is not a palindrome`)
}
