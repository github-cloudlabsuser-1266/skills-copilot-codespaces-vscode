const data = [
    [
        { id: 1, name: "John", age: 28 },
        { id: 2, name: "Jane", age: 32 }
    ],
    [
        { id: 3, name: "Bob", age: 25 }
    ]
];

// Extract names from the nested array of objects
const names = data.flatMap(array => array.map(item => item.name));

console.log(names); // Output: ['John', 'Jane', 'Bob']