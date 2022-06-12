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

console.log(gradeObject.grades);
gradeObject.addGrade(50);
console.log(gradeObject.grades);
gradeObject.addGrade(100);
gradeObject.addGrade(100);
gradeObject.addGrade(100);
gradeObject.addGrade(100);
gradeObject.addGrade(100000000000000000000000000000000000);
let average = gradeObject.gradeAverage();
average;

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

console.log(weeklyTemp.weekAverage(3));

// Exercise 4
