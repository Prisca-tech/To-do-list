export default class TodoObject {
  constructor(description, completed = true, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}
