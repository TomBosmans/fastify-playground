import { createContainer, asClass } from "awilix"

const container = createContainer()

class A {
  print() {
    return "hi"
  }
}

class B {
  a: A
  constructor({ a }: { a: A }) {
    this.a = a
  }

  print() {
    console.log("hello world")
    console.log(this.a.print())
  }
}

container.register({
  b: asClass(B),
  a: asClass(A)
})


const b = container.resolve<B>("b")
b.print()

class C {
  print() {
    return "fuck you"
  }
}
container.register({
  a: asClass(C)
})

const b2 = container.resolve<B>("b")
b.print()
b2.print()


