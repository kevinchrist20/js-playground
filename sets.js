/* Sets */

function Sets() {
    // Holds the items of the set
    var collection = []

    // Has - Checks the existence of an item in the set
    this.has = function(value) {
        return (collection.indexOf(value) !== -1)
    }

    // Values - Returns all the elements in the set
    this.values = function() {
        return collection
    }

    // Add - Adds an element to the set
    this.add = function(element) {
        if(!this.has(element)) {
            collection.push(element)
            return true
        }

        return false
    }

    // Remove - Removes element from the set
    this.remove = function(element) {
        if (this.has(element)) {
            idx = collection.indexOf(element)
            collection.splice(idx, 1)
            return true
        }

        return false
    }

    // Size - Returns the size of the collection
    this.size = function() {
        return collection.length
    }

    // Union - Returns the union of two sets as a set
    this.union = function(set) {
        var unionSet = new Sets()
        var firstSet = this.values()
        var secondSet = set.values()

        firstSet.forEach(function(e) {
            unionSet.add(e)
        });

        secondSet.forEach(function(e) {
            unionSet.add(e)
        });

        return unionSet
    }

    // Intersection - Returns the intersection of two sets as a set
    this.intersection = function(set) {
        var interSet = new Sets()
        var firstSet = this.values()

        firstSet.forEach(function(e) {
            if (set.has(e)) {
                interSet.add(e)
            }
        })

        return interSet
    }

    // Difference - Returns the difference between two sets as set
    this.difference = function(set) {
        var differSet = new Sets()
        var mySet = this.values()

        mySet.forEach(function(e) {
            if (!set.has(e)) {
                differSet.add(e)
            }
        })

        return differSet
    }

    // Subset - Checks if a set is a subset of another set
    this.subset = function(set) {
        var mySet = this.values()
        return mySet.every(function(e) {
            return set.has(e)
        })
    }
}




// var setA = new Sets()
// var setB = new Sets()

// setA.add("a")
// setA.add("c")
// setA.add("e")
// setB.add("a")
// setB.add("b")
// setB.add("c")
// setB.add("d")

// console.log(setA.subset(setB))
// console.log(setA.intersection(setB).values())
// console.log(setA.difference(setB).values())
// console.log(setA.union(setB).values())


var setA = new Set()
var setB = new Set()

setA.add("a")
setA.add("c")
setA.add("e")
setB.add("a")
setB.add("b")
setB.add("c")
setB.add("d")

console.log(setA.values())