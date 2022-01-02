const users = [
    { name: 'Yulya', age: 36 },
    { name: 'Kolya', age: 38 },
    { name: 'Tanya', age: 53 },
    { name: 'Masha', age: 9 },
] 
    for (let user of users) {
        if (user.age > 10) {
            console.log(user.name)
        }
    }
    
