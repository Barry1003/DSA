// TIme and space complexiy in an Array why i sit need?
// Time and space complexity in an array is important because it helps us understand how the performance of algorithms will scale with larger inputs.

// the big O notation is one of the way in determinng how fast a code can run by subjecting to the worst case scenario. It provides a high-level understanding of the algorithm's efficiency without getting bogged down in implementation details.

// The big o can be judge based  on  time and space complexity. Time complexity refers to the amount of time an algorithm takes to complete as a function of the input size, while space complexity refers to the amount of memory an algorithm uses as a function of the input size.
// The big O notation is used to describe the upper bound of an algorithm's time or space complexity, providing a worst-case scenario for performance. It allows developers to compare algorithms and choose the most efficient one for their needs.


//Family of the big O notation

//O(1): it used constant time and space, meaning that the time it takes to complete the operation does not depend on the size of the input. An example of O(1) is accessing an element in an array by its index. (it means not matter the size of the input you would still get the same constant time and space complexity)

//O(log n): it used logarithmic time and space, meaning that the time it takes to complete the operation grows logarithmically with the size of the input. An example of O(log n) is binary search in a sorted array, where the search space is halved with each iteration.\    

 

// ### 💡 What is Big O?

// Big O is a way of saying **how long** something takes to finish — like finding your favorite toy — **as things get bigger**.

// ---

// ### 🧸 Example: Toy Box Search

// Let’s say you have a toy box:

// * If it has 1 toy, it’s easy to find your favorite.
// * If it has 100 toys, it takes longer.
// * If it has 1,000 toys, it takes even longer!

// Big O tells us **how the time grows** as the number of toys grows.

// ---

// Now let’s learn the **main types of Big O** using toy box examples:

// ---

// ### ✅ O(1) – **“One and Done!”**

// You open the toy box and *BOOM*, your toy is always the first one. It doesn’t matter if there’s 1 toy or 1 million, you get it right away.

// 🧠 Like: "Open the fridge, grab milk. Done!"
// 💬 Time doesn’t change.

// ---

// ### 🔍 O(n) – **“Look at Each One”**

// You don’t know where your toy is, so you check **one by one**.

// If there are:

// * 10 toys → 10 checks max
// * 100 toys → 100 checks max

// 🧠 Like: "Check each crayon until you find red."
// 💬 Time grows *linearly* with the number of things.

// ---

// ### 🔢 O(log n) – **“Smart Guessing!”**

// Now you’re a genius! You cut the toys in half each time.

// * Is my toy in the first half or second?
// * Then half of that half?
// * And again?

// 🧠 Like: "Guess a number between 1 and 100 — higher or lower?"
// 💬 Time grows *slowly*, even with big numbers.

// ---

// ### 🎲 O(n²) – **“Check Every Pair”**

// Now you want to **see how every toy plays with every other toy**. Like: “Does this toy car crash well with that one?”

// If you have 3 toys:

// * You test toy 1 with 2, 3
// * Then toy 2 with 3
// * Then toy 3 is done!

// 🧠 Like: “Match every sock with every other sock.”
// 💬 Time grows *really fast* as the toys increase.

// ---

// ### 💥 O(2ⁿ) – **“So Many Choices!”**

// You try **every possible combination** of toys. Like dressing up a doll with **every** outfit you can make.

// 🧠 Like: "Try all combinations of ice cream toppings!"
// 💬 Time goes **crazy fast** as the number grows. Super slow!

// ---

// ### Summary with Kid Examples:

// | Big O    | Name        | Kid Example                                | Time as Toys Grow |
// | -------- | ----------- | ------------------------------------------ | ----------------- |
// | O(1)     | Constant    | Toy is always on top                       | 😎 Fast, always   |
// | O(n)     | Linear      | Look through every toy                     | 🐢 Slower as more |
// | O(log n) | Logarithmic | Keep cutting toy pile in half              | ⚡ Still fast      |
// | O(n²)    | Quadratic   | Test every toy with every other toy        | 🐘 Very slow      |
// | O(2ⁿ)    | Exponential | Try every outfit combination for your doll | 🐢🐢 Super slow   |

// ---

// 👉 **"As I get more stuff, how much longer does it take to do something?"**
// So Big O is just a way of saying:


//the time complexity for insert deletion and abstraction in an array is O(n) because in the worst case, you may have to shift all elements to maintain the order of the array.
// the time complexity for searching in an array is O(n) because you may have to check each element until you find the target value.
// for insertion the time complexity is O(n) because you may have to shift elements to make space for the new element.
// for deletion the time complexity is O(n) because you may have to shift elements to fill the gap left by the deleted element. but if it is  at the last element the time complexity is O(1) because you can simply remove it without shifting any elements.
// for accessing an element in an array, the time complexity is O(1) because you can directly access it using its index. This means that no matter how large the array is, you can retrieve an element in constant time.
// for searching an element in an array, the time complexity is O(n) because you may have to check each element until you find the target value. This means that in the worst case, you may have to look at every element in the array.
// for sorting an array, the time complexity is O(n log n) for efficient algorithms like quicksort or mergesort. This means that as the size of the array increases, the time taken to sort it grows at a rate proportional to n log n.