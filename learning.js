global.x = "Global scope"
var y = "Not changed."

class Foo {
  constructor() {
    this.x = "Attribute of foo"
    // var x = x;

    y = "Changed!"
    this.getX = function () {
      console.log("FROM FOO  ", x)
      return x
    }
  }
}

console.log(x) // "Global scope"
console.log(y) // "Not changed"
foo = new Foo()
console.log(y) // "Changed!"
console.log(foo.x) // "Attribute of foo"
console.log(x) // "Global scope"
console.log(foo.getX()) // "In foo's closure"
