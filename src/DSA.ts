function log(x: unknown): unknown {
  return console.log(x);
}

// Chapter 2 - Arrays
// Exercise 1

type gradeObjectType = {
  grades: number[];
  addGrade: (grade: number) => void;
  gradeAverage: () => number;
};

const gradeObject: gradeObjectType = {
  grades: [],
  addGrade: function (grade: number): void {
    this.grades.push(grade);
  },
  gradeAverage: function (): number {
    let totalGrade = this.grades.reduce((acc, grade) => acc + grade);
    let averageGrade = totalGrade / this.grades.length;
    return averageGrade;
  },
};

// Exercise 2
let wordArray: string[] = ["Mubaraq", "Mubashir", "Mutmainah"];
wordArray;
let newArr = wordArray.reverse();
newArr;

// Exercise 3
type weeklyTempsType = {
  tempData: number[][];
  monthlyAverage: () => number;
  weeklyAverage: () => number[];
  weekAverage: (week: number) => number;
};

let weeklyTemp: weeklyTempsType = {
  tempData: [
    [5, 6, 7, 9, 20, 100, 10],
    [1, 2, 3, 4, 5, 6, 7],
    [140, 1, 9, 15, 2, 3, 8],
    [5, 6, 7, 9, 20, 100, 10],
  ],
  monthlyAverage: function (): number {
    let newtempArr = this.tempData.flat();
    let monthlyTempTotal = newtempArr.reduce((acc, temp) => acc + temp);
    let monthlyTempAverage = monthlyTempTotal / newtempArr.length;
    return monthlyTempAverage;
  },
  weeklyAverage: function (): number[] {
    let weeklyAverageArr: number[] = [];
    this.tempData.forEach((value: number[]) => {
      let weeklyTotal = value.reduce((acc, temp) => acc + temp);
      let weeklyAverage = weeklyTotal / value.length;
      weeklyAverageArr.push(weeklyAverage);
    });
    return weeklyAverageArr;
  },
  weekAverage: function (week: number): number {
    let weekTemp = this.tempData[week];
    let weekTotal = weekTemp.reduce((acc, temp) => acc + temp);
    let weeklyAverage = weekTotal / weekTemp.length;
    return weeklyAverage;
  },
};

// Chapter 3 - Lists
interface IList {
  datastore: any[];
  pos: number;
  listSize: number;
  clear: () => void;
  find: (el: unknown) => number;
  toString: () => [];
  insert: (el: unknown, after: unknown) => boolean;
  append: (el: unknown) => void;
  remove: (el: unknown) => boolean;
  front: () => void;
  end: () => void;
  prev: () => void;
  next: () => void;
  length: () => number;
  currPos: () => number;
  moveTo: () => void;
  getElement: () => unknown;
  contains: (el: unknown) => boolean;
  addIfLarger: (el: unknown) => void;
  addIfSmaller: (el: unknown) => void;
}
// Chapter 3 - Lists

class List implements IList {
  datastore: unknown[] = [];
  pos = 0;
  listSize = 0;
  clear(): void {
    this.datastore = [];
  }
  find(el: unknown): number {
    for (let i = 0; i < this.datastore.length; i++) {
      if (this.datastore[i] === el) {
        return i;
      }
    }
    return -1;
  }
  toString(): any {
    return this.datastore;
  }
  insert(el: unknown, after: unknown): boolean {
    this.datastore[this.listSize++] = el;
    let elementPosition = this.find(after);
    if (elementPosition > -1) {
      this.datastore.splice(elementPosition + 1, 0, el);
      ++this.listSize;
      return true;
    }
    return false;
  }
  append(el: unknown): void {
    this.datastore[this.listSize++] = el;
  }
  remove(el: unknown): boolean {
    let foundOut = this.find(el);
    if (foundOut > -1) {
      this.datastore.splice(foundOut, 1);
      --this.listSize;
      return true;
    }
    return false;
  }
  front(): void {
    this.pos = 0;
  }
  end(): void {
    this.pos = this.listSize - 1;
  }
  prev(): void {
    if (this.pos > 0) {
      --this.pos;
    }
  }
  next(): void {
    if (this.pos < this.listSize) {
      ++this.pos;
    }
  }
  length(): number {
    return this.listSize;
  }
  currPos(): number {
    return this.pos;
  }
  moveTo(): void {}
  getElement(): any {
    let element = this.datastore[this.pos];
    return element;
  }
  getElementInPos(pos: number): any {
    return this.datastore[pos];
  }
  contains(el: unknown): boolean {
    let foundOut = this.find(el);
    if (foundOut > -1) return true;
    return false;
  }
  addIfLarger(el: any): void {
    let temp = this.getElementInPos(0);
    for (this.front(); this.currPos() <= this.length() - 1; this.next()) {
      let curr = this.getElement();
      if (temp > curr) temp = temp;
      if (curr > temp) temp = curr;
    }
    if (el > temp) {
      this.append(el);
      ++this.listSize;
    }
  }
  addIfSmaller(el: any): void {
    let temp = this.getElementInPos(0);
    for (this.front(); this.currPos() <= this.length() - 1; this.next()) {
      let curr = this.getElement();
      if (temp > curr) temp = curr;
      if (curr > temp) temp = temp;
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

// Exercise 3
type Igender = "" | "male" | "female" | "unspecified";
interface IPerson {
  name: string;
  gender: Igender;
}

class Person implements IPerson {
  name = "";
  gender: Igender = "unspecified";
  constructor(name: string, gender: Igender = "unspecified") {
    this.name = name;
    this.gender = gender;
  }
  static sortByGender(list: Person[], gender: Igender): Person[] {
    let newList: Person[] = [];
    list.forEach((person) => {
      if (person.gender === gender) newList.push(person);
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

console.log(Person.sortByGender(PersonList.datastore as Person[], "male"));

// Chapter 4 - Stacks
interface IStack {
  datastore: unknown[];
  top: number;
  push: (el: unknown) => void;
  pop: () => unknown;
  peek: () => unknown;
  length: () => number;
  clear: () => void;
}

// Chapter 4 - Stacks
class Stack implements IStack {
  datastore: unknown[] = [];
  top = 0;
  push(el: unknown): void {
    this.datastore[this.top++] = el;
  }
  pop(): unknown {
    return this.datastore[--this.top];
  }
  peek(): unknown {
    return this.datastore[this.top - 1];
  }
  length(): number {
    return this.top;
  }
  clear(): void {
    this.top = 0;
  }
}

function numBase(num: number, base: number): unknown {
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

function isPalindrome(word: string): boolean {
  let s = new Stack();
  for (let i = 0; i < word.length; i++) {
    s.push(word[i]);
  }
  let reverseWord = "";
  while (s.length() > 0) reverseWord += s.pop();
  return reverseWord.toLowerCase() === word.toLowerCase();
}

console.log(isPalindrome("sracecaRs"));

function factorial(num: number): number {
  let s = new Stack();
  // for (let i = 1; i <= num; i++) {
  //   s.push(i);
  // }
  while (num > 1) s.push(num--);
  let factorial = 1;
  while (s.length() > 0) factorial *= s.pop() as number;
  return factorial;
}

console.log(factorial(0));
// Exercise 1
function balancedParentheses(str: string): boolean {
  let brackets = "(){}[]";
  let s = new Stack();
  for (let i = 0; i < str.length; i++) {
    if (!brackets.includes(str[i])) continue;
    let bracketIndex = brackets.indexOf(str[i]);
    if (bracketIndex % 2 === 0) {
      s.push(bracketIndex + 1);
    } else {
      let lastBracketIndex = s.peek();
      if (bracketIndex === lastBracketIndex) s.pop();
      else return false;
    }
  }
  return s.length() === 0;
}

console.log(balancedParentheses("fre({[]{()})g"));
