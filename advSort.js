var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

students.sort(function(obj1, obj2) {
  if (obj1.name == obj2.name) {
      return obj1.age < obj2.age
  } else {
      return obj1.name > obj2.name
  } 
})
  
console.log(students)