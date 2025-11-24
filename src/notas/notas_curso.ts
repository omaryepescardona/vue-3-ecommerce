//Usar unions literal
interface User {
  name: string
  id: number
  state: 'ACTIVE' | 'INACTIVE'
}

const user3: User = {
  name: 'Omar',
  id: 15385756,
  state: 'ACTIVE',
}

function saludar(user3: User) {
  console.log('Hello ' + user3.name)
}

saludar(user3)

//ARRAY Y GENERIC
interface User {
  name: string
  id: number
  state: 'ACTIVE' | 'INACTIVE'
}

const user1: User = {
  name: 'Omar',
  id: 15385756,
  state: 'ACTIVE',
}

const user2: User = {
  name: 'Luisa',
  id: 1017122123,
  state: 'ACTIVE',
}

function saludar1(users: Array<User>) {
  users.forEach((u) => {
    console.log('Hello ' + u.name)
  })
}

saludar1([user1, user2])
