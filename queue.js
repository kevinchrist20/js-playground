/* Queue */
// FIFO
// Functions: enqueue, dequeue, front, size


function Queue() {
    var collection = []

    // Print - Prints the items in the collection to the console
    this.print = function() {
        console.log(collection)
    }

    // Enqueue - Add element to the end of the queue
    this.enqueue = function(element) {
        collection.push(element)
    }

    // Dequeue - Remove element from the front of the queue
    this.dequeue = function() {
        return collection.shift()
    }

    // isEmpty - Checks if queue is empty
    this.isEmpty = function() {
        return (collection.length === 0)
    }

    // Front - Returns the front of the queue
    this.front = function() {
        if (!this.isEmpty()) {
            return collection[0]
        }

        return null
    }

    // Size - Returns the size of the queue
    this.size = function() {
        return collection.length
    }
}