const fruits = ['Яблоко', 'Банан', 'Мандарин']
const mapFruits = []

for (let fruit of fruits) {
      mapFruits.push({
            word: fruit,
            length: fruit.length
      }
      )
}
console.log(mapFruits)
for (let fruit of mapFruits) {
      console.log(fruit.word + ' - ' + fruit.length)
}

