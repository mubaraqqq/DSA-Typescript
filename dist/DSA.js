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
