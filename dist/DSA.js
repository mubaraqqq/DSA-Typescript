"use strict";
function log(x) {
    return console.log(x);
}
const gradeObject = {
    grades: [],
    addGrade: function (grade) {
        this.grades.push(grade);
    },
    gradeAverage: function () {
        let totalGrade = this.grades.reduce((acc, grade) => acc + grade);
        let averageGrade = totalGrade / this.grades.length;
        return averageGrade;
    },
};
// Exercise 2
let wordArray = ["Mubaraq", "Mubashir", "Mutmainah"];
wordArray;
let newArr = wordArray.reverse();
newArr;
let weeklyTemp = {
    tempData: [
        [5, 6, 7, 9, 20, 100, 10],
        [1, 2, 3, 4, 5, 6, 7],
        [140, 1, 9, 15, 2, 3, 8],
        [5, 6, 7, 9, 20, 100, 10],
    ],
    monthlyAverage: function () {
        let newtempArr = this.tempData.flat();
        let monthlyTempTotal = newtempArr.reduce((acc, temp) => acc + temp);
        let monthlyTempAverage = monthlyTempTotal / newtempArr.length;
        return monthlyTempAverage;
    },
    weeklyAverage: function () {
        let weeklyAverageArr = [];
        this.tempData.forEach((value) => {
            let weeklyTotal = value.reduce((acc, temp) => acc + temp);
            let weeklyAverage = weeklyTotal / value.length;
            weeklyAverageArr.push(weeklyAverage);
        });
        return weeklyAverageArr;
    },
    weekAverage: function (week) {
        let weekTemp = this.tempData[week];
        let weekTotal = weekTemp.reduce((acc, temp) => acc + temp);
        let weeklyAverage = weekTotal / weekTemp.length;
        return weeklyAverage;
    },
};
// Chapter 3 - Lists
class List {
    constructor() {
        this.datastore = [];
        this.pos = 0;
        this.listSize = 0;
    }
    clear() {
        this.datastore = [];
    }
    find(el) {
        for (let i = 0; i < this.datastore.length; i++) {
            if (this.datastore[i] === el) {
                return i;
            }
        }
        return -1;
    }
    toString() {
        return this.datastore;
    }
    insert(el, after) {
        this.datastore[this.listSize++] = el;
        let elementPosition = this.find(after);
        if (elementPosition > -1) {
            this.datastore.splice(elementPosition + 1, 0, el);
            ++this.listSize;
            return true;
        }
        return false;
    }
    append(el) {
        this.datastore[this.listSize++] = el;
    }
    remove(el) {
        let foundOut = this.find(el);
        if (foundOut > -1) {
            this.datastore.splice(foundOut, 1);
            --this.listSize;
            return true;
        }
        return false;
    }
    front() {
        this.pos = 0;
    }
    end() {
        this.pos = this.listSize - 1;
    }
    prev() {
        if (this.pos > 0) {
            --this.pos;
        }
    }
    next() {
        if (this.pos < this.listSize) {
            ++this.pos;
        }
    }
    length() {
        return this.listSize;
    }
    currPos() {
        return this.pos;
    }
    moveTo() { }
    getElement() {
        let element = this.datastore[this.pos];
        return element;
    }
    getElementInPos(pos) {
        return this.datastore[pos];
    }
    contains(el) {
        let foundOut = this.find(el);
        if (foundOut > -1)
            return true;
        return false;
    }
    addIfLarger(el) {
        let temp = this.getElementInPos(0);
        for (this.front(); this.currPos() <= this.length() - 1; this.next()) {
            let curr = this.getElement();
            if (temp > curr)
                temp = temp;
            if (curr > temp)
                temp = curr;
        }
        if (el > temp) {
            this.append(el);
            ++this.listSize;
        }
    }
    addIfSmaller(el) {
        let temp = this.getElementInPos(0);
        for (this.front(); this.currPos() <= this.length() - 1; this.next()) {
            let curr = this.getElement();
            if (temp > curr)
                temp = curr;
            if (curr > temp)
                temp = temp;
        }
        if (el < temp) {
            this.append(el);
            ++this.listSize;
        }
    }
}
let names = new List();
names.append(100);
names.append(2);
names.append(3);
names.append(9);
names.append(50);
names.append(6);
names.append(7);
names.append(8);
let list = names.datastore;
list;
names.front();
log(names.getElement());
names.next();
log(names.getElement());
names.next();
log(names.getElement());
names.prev();
log(names.getElement());
names.next();
log(names.getElement());
names.next();
log(names.getElement());
// Exercise 1
names.addIfLarger(50);
list;
// Exercise 2
names.addIfSmaller(1);
list;
class Person {
    constructor(name, gender = "unspecified") {
        this.name = "";
        this.gender = "unspecified";
        this.name = name;
        this.gender = gender;
    }
    static sortByGender(list, gender) {
        let newList = [];
        list.forEach((person) => {
            if (person.gender === gender)
                newList.push(person);
        });
        return newList;
    }
}
const Bob = new Person("Bob", "male");
const Clara = new Person("Clara", "female");
const Mil = new Person("Mil");
const Mubaraq = new Person("Mubaraq", "male");
const Ayanfe = new Person("Ayanfe", "female");
const Glory = new Person("Glory", "female");
const Pheelz = new Person("Pheelz");
const Ayo = new Person("Ayo", "male");
const Joy = new Person("Joy", "female");
const Isa = new Person("Isa", "male");
const PersonList = new List();
PersonList.append(Bob);
PersonList.append(Clara);
PersonList.append(Mil);
PersonList.append(Mubaraq);
PersonList.append(Ayanfe);
PersonList.append(Glory);
PersonList.append(Pheelz);
PersonList.append(Ayo);
PersonList.append(Joy);
PersonList.append(Isa);
console.log(Person.sortByGender(PersonList.datastore, "male"));
// Chapter 4 - Stacks
class Stack {
    constructor() {
        this.datastore = [];
        this.top = 0;
    }
    push(el) {
        this.datastore[this.top++] = el;
    }
    pop() {
        return this.datastore[--this.top];
    }
    peek() {
        return this.datastore[this.top - 1];
    }
    length() {
        return this.top;
    }
    clear() {
        this.top = 0;
    }
}
function numBase(num, base) {
    let s = new Stack();
    do {
        s.push(num % base);
        num = Math.floor(num / base);
    } while (num > 0);
    let converted = "";
    while (s.length() > 0) {
        converted += s.pop();
    }
    return converted;
}
console.log(numBase(125, 8));
function isPalindrome(word) {
    let s = new Stack();
    for (let i = 0; i < word.length; i++) {
        s.push(word[i]);
    }
    let reverseWord = "";
    while (s.length() > 0)
        reverseWord += s.pop();
    return reverseWord.toLowerCase() === word.toLowerCase();
}
console.log(isPalindrome("sracecaRs"));
function factorial(num) {
    let s = new Stack();
    // for (let i = 1; i <= num; i++) {
    //   s.push(i);
    // }
    while (num > 1)
        s.push(num--);
    let factorial = 1;
    while (s.length() > 0)
        factorial *= s.pop();
    return factorial;
}
console.log(factorial(0));
// Exercise 1
function balancedParentheses(str) {
    let brackets = "(){}[]";
    let s = new Stack();
    for (let i = 0; i < str.length; i++) {
        if (!brackets.includes(str[i]))
            continue;
        let bracketIndex = brackets.indexOf(str[i]);
        if (bracketIndex % 2 === 0) {
            s.push(bracketIndex + 1);
        }
        else {
            let lastBracketIndex = s.peek();
            if (bracketIndex === lastBracketIndex)
                s.pop();
            else
                return false;
        }
    }
    return s.length() === 0;
}
console.log(balancedParentheses("fre({[]{()}})g"));
// Exercise 2
function infixToPostFix(infixStr) {
    let operators = "+,-,/,%,*,**,(,),^".split(",");
    let operandStack = new Stack();
    let operatorStack = new Stack();
    let postFixStr = "";
    function precedence(str) {
        if (str === "@" || str === "(" || str === ")")
            return 1;
        if (str === "+" || str === "-")
            return 2;
        if (str === "/" || str === "*")
            return 3;
        if (str === "^")
            return 4;
        else
            return 0;
    }
    for (let i = 0; i < infixStr.length; i++) {
        // if (operators.includes(infixStr[i])) {
        //   if (operatorStack.length() > 0) {
        //     let operator = operatorStack.pop();
        //     postFixStr += operator;
        //   }
        //   operatorStack.push(infixStr[i]);
        // } else if (infixStr[i] === "(") {
        //   operatorStack.push(infixStr[i]);
        // } else if (infixStr[i] === ")" && operatorStack.peek() === "(") {
        //   // operatorStack.pop();
        //   operatorStack.pop();
        // } else {
        //   postFixStr += infixStr[i];
        //   operandStack.push(infixStr[i]);
        // }
        let el = infixStr[i];
        if (operators.includes(el)) {
            if (el === ")") {
                while (operatorStack.peek() !== "(") {
                    postFixStr += operatorStack.pop();
                }
                operatorStack.pop();
            }
            else if (el === "(") {
                operatorStack.push(el);
            }
            else if (precedence(el) > precedence(operatorStack.peek())) {
                operatorStack.push(el);
            }
            else {
                while (precedence(el) <= precedence(operatorStack.peek())) {
                    postFixStr += operatorStack.pop();
                }
                operatorStack.push(el);
            }
        }
        else {
            postFixStr += el;
        }
    }
    while (operatorStack.length() > 0) {
        postFixStr += operatorStack.pop();
    }
    console.log(operatorStack);
    return { postFixStr };
}
console.log(infixToPostFix("5+(4-3/3)"));
class Queue {
    constructor() {
        this.datastore = [];
    }
    enqueue(el) {
        this.datastore.push(el);
    }
    dequeue() {
        return this.datastore.shift();
    }
    front() {
        return this.datastore[0];
    }
    back() {
        return this.datastore[this.datastore.length - 1];
    }
    toString() {
        let str = "";
        this.datastore.forEach((item, index) => {
            if (index !== this.datastore.length - 1) {
                str += item + ",";
            }
            else {
                str += item;
            }
        });
        return str;
    }
    empty() {
        let length = this.datastore.length;
        if (length > 0)
            return false;
        return true;
    }
    count() {
        return this.datastore.length;
    }
}
let q = new Queue();
q.enqueue("Meredith");
q.enqueue("Cynthia");
q.enqueue("Jennifer");
console.log(q.toString());
console.log(q.empty());
console.log("Front of queue", q.front());
console.log("Back of queue", q.back());
// radix sort
function distribute(nums, queues, n, digit) {
    var _a;
    for (let i = 0; i < n; i++) {
        if (digit === 1) {
            queues[nums[i] % 10].enqueue(nums[i]);
        }
        else {
            (_a = queues[Math.floor(nums[i] / 10)]) === null || _a === void 0 ? void 0 : _a.enqueue(nums[i]);
        }
    }
}
function collect(queues, nums) {
    let i = 0;
    for (let digits = 0; digits < 10; digits++) {
        while (!queues[digits].empty()) {
            nums[i++] = queues[digits].dequeue();
        }
    }
}
let queues = [];
for (let i = 0; i < 10; i++) {
    queues[i] = new Queue();
}
let nums = [];
for (let i = 0; i < 10; i++) {
    nums[i] = Math.floor(Math.random() * 101);
}
console.log(nums);
distribute(nums, queues, 10, 1);
collect(queues, nums);
distribute(nums, queues, 10, 10);
collect(queues, nums);
console.log(nums);
// Exercise 1
class Dequeue {
    constructor() {
        this.datastore = [];
    }
    enqueueFront(el) {
        this.datastore.unshift(el);
    }
    enqueueBack(el) {
        this.datastore.push(el);
    }
    dequeueFront() {
        return this.datastore.shift();
    }
    dequeueBack() {
        return this.datastore.pop();
    }
    front() {
        return this.datastore[0];
    }
    back() {
        return this.datastore[this.datastore.length - 1];
    }
    toString() {
        let str = "";
        this.datastore.forEach((item, index) => {
            if (index !== this.datastore.length - 1) {
                str += item + ",";
            }
            else {
                str += item;
            }
        });
        return str;
    }
    empty() {
        let length = this.datastore.length;
        if (length > 0)
            return false;
        return true;
    }
    count() {
        return this.datastore.length;
    }
}
// Exercise 2
function palindrome(word) {
    let front = new Dequeue();
    let reverse = new Dequeue();
    let forwardLetter = "";
    let backwardLetter = "";
    let wordArr = word.split("");
    wordArr.forEach((letter, index) => {
        front.enqueueBack(letter);
        reverse.enqueueFront(letter);
    });
    console.log(reverse.toString());
    while (front.count() > 0) {
        forwardLetter += front.dequeueFront();
        backwardLetter += reverse.dequeueFront();
    }
    return forwardLetter.toLowerCase() === backwardLetter.toLowerCase();
}
console.log(palindrome("kayaks"));
// type El = { name: string; code: number };
// class Aqueue implements Omit<IQueue, "enqueue" | "dequeue"> {
//   datastore: El[] = [];
//   enqueueFront(el: El): void {
//     this.datastore.unshift(el);
//   }
//   enqueueBack(el: El): void {
//     this.datastore.push(el);
//   }
//   dequeueFront(): unknown {
//     return this.datastore.shift();
//   }
//   dequeueBack(): unknown {
//     return this.datastore.pop();
//   }
//   front(): unknown {
//     return this.datastore[0];
//   }
//   back(): unknown {
//     return this.datastore[this.datastore.length - 1];
//   }
//   toString(): unknown {
//     let str = "";
//     this.datastore.forEach((item, index) => {
//       // if (index !== this.datastore.length - 1) {
//       //   str += item + ",";
//       // } else {
//       //   str += item;
//       // }
//       str += item.name + " code: " + item.code + " ";
//     });
//     return str;
//   }
//   empty(): boolean {
//     let length = this.datastore.length;
//     if (length > 0) return false;
//     return true;
//   }
//   count(): number {
//     return this.datastore.length;
//   }
//   priorityDequeueLess(): El {
//     let priority = this.datastore[0].code;
//     for (let i = 1; i < this.datastore.length; i++) {
//       if (this.datastore[i].code < priority) {
//         console.log(this.datastore[i].code);
//         priority = i;
//       }
//     }
//     return this.datastore.splice(priority, 1)[0];
//   }
// }
// class Patient {
//   name: string;
//   code: number;
//   constructor(name: string, code: number) {
//     this.name = name;
//     this.code = code;
//   }
// }
// let p = new Patient("Smith", 5);
// let ed = new Aqueue();
// ed.enqueueBack(p);
// p = new Patient("Jones", 4);
// ed.enqueueBack(p);
// p = new Patient("Fehrenbach", 5);
// ed.enqueueBack(p);
// p = new Patient("Brown", 3);
// ed.enqueueBack(p);
// p = new Patient("Ingram", 1);
// ed.enqueueBack(p);
// p = new Patient("Inram", 2);
// ed.enqueueBack(p);
// console.log(ed.toString());
// let seen = ed.priorityDequeueLess();
// console.log(seen.name, seen.code);
// seen = ed.priorityDequeueLess();
// console.log(seen.name, seen.code);
// seen = ed.priorityDequeueLess();
// console.log(seen.name, seen.code);
// seen = ed.priorityDequeueLess();
// console.log(seen.name, seen.code);
// seen = ed.priorityDequeueLess();
// console.log(seen.name, seen.code);
// Chapter 6 - Linked Lists
class ListNode {
    constructor(element) {
        this.next = null;
        this.element = element;
    }
}
class LList {
    constructor() {
        this.head = new ListNode("head");
    }
    find(item) {
        let currNode = this.head;
        while (currNode.element !== item) {
            currNode = currNode.next;
        }
        return currNode;
    }
    insert(newElement, item) {
        let newNode = new ListNode(newElement);
        let current = this.find(item);
        newNode.next = current.next;
        current.next = newNode;
    }
    display() {
        let currNode = this.head;
        while (currNode.next !== null) {
            let next = currNode.next;
            console.log(next.element);
            currNode = next;
        }
    }
    findPrevious(item) {
        let currNode = this.head;
        while (currNode.next !== null && currNode.next.element !== item) {
            currNode = currNode.next;
        }
        return currNode;
    }
    remove(item) {
        let prevNode = this.findPrevious(item);
        if (prevNode.next !== null) {
            prevNode.next = prevNode.next.next;
        }
    }
}
let cities = new LList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Alma", "Russellville");
cities.display();
cities.remove("Russellville");
cities.display();
// Doubly Linked List
class DListNode {
    constructor(element) {
        this.next = null;
        this.previous = null;
        this.element = element;
    }
}
class DList {
    constructor() {
        this.head = new DListNode("head");
    }
    find(item) {
        let currNode = this.head;
        while (currNode.element !== item) {
            currNode = currNode.next;
        }
        return currNode;
    }
    insert(newElement, item) {
        let newNode = new DListNode(newElement);
        let current = this.find(item);
        newNode.next = current.next;
        newNode.previous = current;
        current.next = newNode;
    }
    remove(item) {
        let currNode = this.find(item);
        if (currNode.next !== null && currNode.previous !== null) {
            currNode.previous.next = currNode.next;
            currNode.next.previous = currNode.previous;
            currNode.next = null;
            currNode.previous = null;
        }
    }
    findLast() {
        let currNode = this.head;
        while (currNode.next !== null) {
            currNode = currNode.next;
        }
        return currNode;
    }
    display() {
        let currNode = this.head;
        while (currNode.next !== null) {
            console.log(currNode.next.element);
            currNode = currNode.next;
        }
    }
    displayReverse() {
        let currNode = this.head;
        currNode = this.findLast();
        while (currNode.previous !== null) {
            console.log(currNode.element);
            currNode = currNode.previous;
        }
    }
}
let places = new DList();
places.insert("Conway", "head");
places.insert("Rusellville", "Conway");
places.insert("Carlisle", "Rusellville");
places.insert("Alma", "Carlisle");
places.display();
places.remove("Carlisle");
places.display();
places.displayReverse();
// Cricularly Linked Lists
class CList {
    constructor() {
        this.head = new ListNode("head");
        this.head.next = this.head;
    }
    find(item) {
        let currNode = this.head;
        while (currNode.next !== null && currNode.element !== item) {
            currNode = currNode.next;
        }
        return currNode;
    }
    insert(newElement, item) {
        let newNode = new ListNode(newElement);
        let currNode = this.find(item);
        newNode.next = currNode.next;
        currNode.next = newNode;
    }
    display() {
        let currNode = this.head;
        while (currNode.next !== null && currNode.next.element !== "head") {
            console.log(currNode.next.element);
            currNode = currNode.next;
        }
    }
    findPrevious(item) {
        let currNode = this.head;
        while (currNode.next !== null && currNode.next.element !== item) {
            currNode = currNode.next;
        }
    }
}
// Exercise 1 & 3
// Linked List for Exercise 1
class Exercise1LList {
    constructor() {
        this.head = new ListNode("head");
        this.current = this.head;
        this.totalNodes = 1;
        this.node = 1;
    }
    find(item) {
        let currNode = this.head;
        while (currNode.next !== null && currNode.element !== item) {
            currNode = currNode.next;
        }
        return currNode;
    }
    findPrevious(item) {
        let currNode = this.head;
        while (currNode.next !== null && currNode.next.element !== item) {
            currNode = currNode.next;
        }
        return currNode;
    }
    insert(newElement, item) {
        let newNode = new ListNode(newElement);
        let currNode = this.find(item);
        newNode.next = currNode.next;
        currNode.next = newNode;
        this.totalNodes++;
    }
    display() {
        let currNode = this.head;
        while (currNode.next != null) {
            console.log(currNode.next.element);
            currNode = currNode.next;
        }
    }
    advance(n) {
        let currNode = this.current;
        let advance = this.node + n;
        if (advance > this.totalNodes)
            return "Node length exceeded";
        while (currNode.next !== null && this.node < advance) {
            currNode = currNode.next;
            this.node++;
        }
        this.current = currNode;
    }
    show() {
        return this.current.element;
    }
}
let advance = new Exercise1LList();
advance.insert("Conway", "head");
advance.insert("Rusellville", "Conway");
advance.insert("Carlisle", "Rusellville");
advance.insert("Alma", "Carlisle");
advance.display();
advance.advance(1);
console.log(advance.show());
advance.advance(1);
console.log(advance.show());
advance.advance(1);
console.log(advance.show());
// Exercise 2 & 3
// Doubly Linked List
class Exercise2DLList {
    constructor() {
        this.head = new DListNode("head");
        this.current = this.head;
        this.error = false;
        this.forward = 0;
        this.backwards = 0;
        this.totalNodes = 1;
        this.node = 1;
    }
    find(item) {
        let currNode = this.head;
        while (currNode.next !== null && currNode.element !== item) {
            currNode = currNode.next;
        }
        return currNode;
    }
    findPrevious(item) {
        let currNode = this.head;
        while (currNode.next !== null && currNode.next.element !== item) {
            currNode = currNode.next;
        }
        return currNode;
    }
    display() {
        let currNode = this.head;
        while (currNode.next !== null) {
            console.log(currNode.next.element);
            currNode = currNode.next;
        }
    }
    insert(newElement, item) {
        let newNode = new DListNode(newElement);
        let currNode = this.find(item);
        newNode.next = currNode.next;
        newNode.previous = currNode;
        currNode.next = newNode;
        this.totalNodes++;
    }
    remove(item) {
        let prevNode = this.findPrevious(item);
        let currNode = this.find(item);
        if (currNode.next !== null && currNode.previous !== null) {
            prevNode.next = currNode.next;
            currNode.next.previous = prevNode;
            currNode.next = null;
            currNode.previous = null;
        }
    }
    advance(n) {
        let currNode = this.current;
        this.forward = this.node + n;
        if (this.forward > this.totalNodes)
            this.error = true;
        else {
            while (currNode.next !== null && this.node < this.forward) {
                currNode = currNode.next;
                this.node++;
                this.error = false;
            }
        }
        this.current = currNode;
    }
    back(n) {
        let currNode = this.current;
        this.backwards = this.node - n;
        if (this.backwards < 1)
            this.error = true;
        else {
            while (currNode.previous !== null && this.node > this.backwards) {
                currNode = currNode.previous;
                this.node--;
                this.error = false;
            }
        }
        this.current = currNode;
    }
    show() {
        if (this.error)
            return "Node Limit exceeded";
        return this.current.element;
    }
}
let backtrack = new Exercise2DLList();
backtrack.insert("Conway", "head");
backtrack.insert("Rusellville", "Conway");
backtrack.insert("Carlisle", "Rusellville");
backtrack.insert("Alma", "Carlisle");
backtrack.display();
backtrack.advance(1);
console.log(backtrack.show());
backtrack.advance(2);
console.log(backtrack.show());
backtrack.back(1);
console.log(backtrack.show());
