const fruits =[{name:"apples",color:"red",calories:97},
            {name:"berries",color:"red",calories:47},
            {name:"orange",color:"orange",calories:22},
            {name:"pineapple",color:"yellow",calories:127},
            {name:"coconut",color:"white",calories:678},
            {name:"bananas",color:"yellow",calories:100}
]
// //accesing key and the value
// console.log(fruits[1].calories)

// //adding another object
// fruits.push({name:"sukuma",color:"green",calories:27})
// fruits.pop()// removing an object from array
// console.log(fruits)


// fruits.splice(1,4)
// console.log(fruits)//triki method it leaves the range of indexs 

//looping throw arrays
// fruits.forEach(item => console.log(item.calories))
// const mappedFruits= fruits.map(item=>item.calories)
// console.log(mappedFruits)

// const redFruits=fruits.filter(item=>item.color ==='red')
// console.log(redFruits)
// const lowCalories=fruits.filter(item =>item.calories<50)
// lowCalories.forEach(item =>console.log(`${item.name}:${item.calories} calories`))

const highestCalories=fruits.reduce((prev,next) => next.calories >prev.calories
?next :prev
)
console.log(highestCalories)

const lowestCalories = fruits.reduce((prev,next)=>prev.calories<next.calories ?
prev:next
)
console.log(lowestCalories)