//a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio,
// and a String representing the rating as its arguments, and sets the respective class properties to these values.
class Movie {
    constructor(title, studio, rating) {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }}
    var movie1 = new Movie("KUY","DC","PG18");
    console.log(movie1);

    //output
    // Movie {title: 'KUY', studio: 'DC', rating: 'PG18'}

// b) The constructor for the 
// class Movie will set the class property rating to "PG" as default when no rating is provided.
    class Movie {
      constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
       if(rating==undefined){
        this.rating="PG"
       }
       else{
        this.rating=rating;
       }
      }}
      var movie1 = new Movie("ABV","MARVEL");
      console.log(movie1);

      //output
      // Movie {title: 'ABV', studio: 'MARVEL', rating: 'PG'}

    
      // c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG".
      //  You may assume the input array is full of Movie instances. The returned array need not be full.

      class Movie {
        constructor(title, studio, rating) {
          this.title = title;
          this.studio = studio;
          if(rating==undefined){
            this.rating="PG"
           }else{
            this.rating=rating;
           }
          }
        getPG(array){
          var result = [];
          for(var i = 0;i<array.length;i++){
            if(array[i].rating =="PG"){
              result.push(array[i]);
            }
          }
          return result;
        }
      }
        var movie1 = new Movie("ABC","MARVEL");
        var movie2 = new Movie("xyz","DC","PG15");
        var movie3 = new Movie("CDE","FV");
        var arr = [movie1,movie2,movie3];
        console.log(movie3.getPG([movie1,movie2,movie3]));
        
        //output
//         (2) [Movie, Movie]
// 0
// : 
// Movie {title: 'ABC', studio: 'MARVEL', rating: 'PG'}
// 1
// : 
// Movie {title: 'CDE', studio: 'FV', rating: 'PG'}
// length
// : 
// 2
// [[Prototype]]
// : 
// Array(0)


      //  d) Write a piece of code that creates an instance of the class Movie with the 
      //  title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
      class Movie {
        constructor(title, studio, rating) {
          this.title = title;
          this.studio = studio;
          this.rating = rating;
        }}
        var obj = new Movie("Casino Royale","Eon Productions","PG13");
        console.log(obj);
        
        //output
//         Movie {title: 'Casino Royale', studio: 'Eon Productions', rating: 'PG13'}
// rating
// : 
// "PG13"
// studio
// : 
// "Eon Productions"
// title
// : 
// "Casino Royale"
// [[Prototype]]
// : 
Object
      

// 3.Write a “person” class to hold all the details.
 class Person{
  constructor(name,age,salary,gender){
    this.name = name;
    this.age = age;
    this.salary = salary;
    this.gender = gender;
  }
 }
var test = new Person("Jaya,25,25000,Female");
console.log(test.name);
console.log(test.age);
console.log(test.salary);
console.log(test.gender);

//output
// Jaya,25,25000,Female

//2.https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md

class Circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }
  get radiusCircle() {
    return this.radius;
  }
  get colorCircle() {
    return this.color;
  }
  set radiusCircle(radius) {
    this.radius = radius;
  }
  set colorCircle(color) {
    this.color = color;
  }
  get toString() {
    return `"Circle[radius=${this.radius}, color=${this.color}]"`;
  }
  get areaCircle() {
    return Math.PI * this.radius * this.radius;
  }
  get circumferenceCircle() {
    return 2 * Math.PI * this.radius;
  }
}
var obj1 = new Circle(1.0, "red");
console.log(obj1.radiusCircle); //get radiusCircle

obj1.radiusCircle = 2.2;
console.log(obj1.radiusCircle); //set radiusCircle

//output
// 1
// 2.2



