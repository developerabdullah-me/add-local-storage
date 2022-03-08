// Array 1 const ihis is a not Change ablle
const fatherName ='Abdul Motin'
console.log(fatherName)
// change
const sesion ='rain'
console.log(sesion)

// es6
// array object
const products=[
    {name: 'laptop',barand:'Hp',price:'69000'},
    {name: 'mobile',barand:'iphone',price:'49000'},
    {name: 'mous',barand:'tplink',price:'900'},
    {name: 'kyBOrd',barand:'a4',price:'6900'},
    {name: 'wath',barand:'casio',price:'6000'}
];
 const prices=products.map(products=> products.price)
 console.log(prices)
// const prices=products.map(p=> p.price)
// console.log(prices)

// spacific name
const spaciFic=products.filter(p=> p.name.includes("o"))
console.log(spaciFic)