// @ts-check

/**
 * @typedef {object} Student - The student object.
 * @property {string} name - The name of the student.
 * @property {number} id - The ID of the student.
 * @property {boolean} access - Indicates if the student has access.
 * @property {boolean} isActive - Indicates if the student is active.
 */

/**
 * @type {Student}
 */
const student = {
  name: 'Nelson Malgas',
  id: 12,
  access: true,
  isActive: true
};

/**
 * @typedef {object} Person - The object that contains the information and grades of a person.
 * @property {object} info - The personal information of the person.
 * @property {string} info.name - The name of the person.
 * @property {number} info.id - The ID of the person.
 * @property {boolean} info.access - Indicates if the person has access.
 * @property {boolean} info.isActive - Indicates if the person is active.
 * @property {object} grades - The grades of the person.
 * @property {number} grades.grade10 - The grade for grade 10.
 * @property {number} grades.grade11 - The grade for grade 11.
 * @property {number} grades.grade12 - The grade for grade 12.
 */

/**
 * @type {Person}
 */
const person = {
  info: {
    name: 'Nelson Malgas',
    id: 12,
    access: true,
    isActive: true
  },
  grades: {
    grade10: 20,
    grade11: 55,
    grade12: 70
  }
};

/**
 * This is the function that either submits or declines submission.
 * @param {string} action - The action to be performed ("enter" or "cancel").
 * @returns {void}
 */
const handleSubmit = (action) => {
  // Implementation of the function
};

/**
 * List of numbers.
 * @type {number[]}
 */
const handler = [1, 2, 3, 4, 5, 6, 7];

/**
 * Class representing a MyClass.
 * @class
 */
class MyClass {
  /**
   * Create a MyClass.
   * @constructor
   * @param {string} name - The name of the MyClass instance.
   * @param {number} age - The age of the MyClass instance.
   */
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  /**
   * Get the name of the MyClass instance.
   * @returns {string} The name of the MyClass instance.
   */
  getName() {
    return this.name;
  }

  /**
   * Set the name of the MyClass instance.
   * @param {string} name - The new name for the MyClass instance.
   * @returns {void}
   */
  setName(name) {
    this.name = name;
  }

  /**
   * Get the age of the MyClass instance.
   * @returns {number} The age of the MyClass instance.
   */
  getAge() {
    return this.age;
  }

  /**
   * Set the age of the MyClass instance.
   * @param {number} age - The new age for the MyClass instance.
   * @returns {void}
   */
  setAge(age) {
    this.age = age;
  }
}
