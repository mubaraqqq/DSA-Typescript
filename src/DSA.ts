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
}
// Chapter 3 - Lists
// Exercise 1

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
    for (this.front(); this.currPos() < this.listSize; this.next()) {
      let curr = this.getElement();
      if (temp > curr) temp = temp;
      if (curr > temp) temp = curr;
    }
    if (el > temp) {
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

for (names.front(); names.currPos() < names.length() - 1; names.next()) {
  console.log(names.getElement());
}

names.addIfLarger(500);
