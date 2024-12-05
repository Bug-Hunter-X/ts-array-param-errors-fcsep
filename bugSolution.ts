function greeter(person: string[]): string {
  return "Hello, " + person.join(', ');
}

let user = ["Jane Doe", "John Smith"];

console.log(greeter(user)); // Output: Hello, Jane Doe, John Smith