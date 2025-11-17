//oop : instance of type guard/ type narrowing

class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  getSleep(numOfHours: number) {
    console.log(`${this.name} doinik ${numOfHours} ghonta ghumai`);
  }
}

class Student extends Person {
  constructor(name: string) {
    super(name);
  }

  doStudy(numOfHours: number) {
    console.log(`${this.name} doinik ${numOfHours} ghonta study koe`);
  }
}

class Teacher extends Person {
  constructor(name: string) {
    super(name);
  }

  takeClass(numOfHours: number) {
    console.log(`${this.name} doinik ${numOfHours} ghonta class nei`);
  }
}

// function guard

const isStudent = (user: Person) => {
  return user instanceof Student; // user is Student
};

const isTeacher = (user: Person) => {
  return user instanceof Teacher; // user is Teacher
};

const getUserInfo = (user: Person) => {
  if (isStudent(user)) {
    user.doStudy(10);
  } else if (isTeacher(user)) {
    user.takeClass(5);
  } else {
    user.getSleep(15);
  }
};

const student1 = new Student("Mr. student");
const teacher1 = new Teacher("Mr. teacher");
const person1 = new Person("Mr. Person");

getUserInfo(person1);