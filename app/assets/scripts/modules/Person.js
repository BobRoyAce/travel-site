class Person {
  constructor(name, favoriteColor) {
    /* Set some PROPERTIES, using passed in values */
    this.name = name;
    this.favoriteColor = favoriteColor;
  }

  /* Create a function that will output a greeting to the console. */
  greet() {
    console.log("Hello, my name is " + this.name + " and my favorite color is " + this.favColor + ".");
  }
}

export default Person