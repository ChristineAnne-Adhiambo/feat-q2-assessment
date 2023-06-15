/* **Ancestral Stories:** In many African cultures, the art of storytelling is passed
down from generation to generation. Imagine you're creating an application that
records these oral stories and translates them into different languages. The
stories vary by length, moral lessons, and the age group they are intended for.
Think about how you would model `Story`, `StoryTeller`, and `Translator`
objects, and how inheritance might come into play if there are different types of
stories or storytellers.*/


/*Pseudo Code
Input:length,moral lessons age group
*/


class Story {
    constructor(title, length, ageGroup) {
        this.title = title;
        this.length = length;
        this.ageGroup = ageGroup;
    } 
}

class StoryTeller {
    constructor(name, language) {
        this.name = name;
        this.language = language;
    } 
}

class Translator {
    constructor(fromLanguage, toLanguage) {
        this.fromLanguage = fromLanguage;
        this.toLanguage = toLanguage;
    }

}

const story = new Story("The Lion and the Mouse", 10, "Children");
const storyTeller = new StoryTeller("Mitch Dede", "English");
const translator = new Translator("English", "French");

console.log("Story Details:");
console.log("Title:", story.title);
console.log("Length:", story.length);
console.log("Age Group:", story.ageGroup);

console.log("StoryTeller Details:");
console.log("Name:", storyTeller.name);
console.log("Language:", storyTeller.language);

console.log("Translator Details:");
console.log("From Language:", translator.fromLanguage);
console.log("To Language:", translator.toLanguage);



//Question3
class Species {
    constructor(diet, lifespan, migrationPatterns) {
        this.diet = diet;
        this.lifespan = lifespan;
        this.migrationPatterns = migrationPatterns;
    }
}

class Predator extends Species {
    constructor(diet, lifespan, migrationPatterns, huntingMethod) {
        super(diet, lifespan, migrationPatterns);
        this.huntingMethod = huntingMethod;
    }
}

class Prey extends Species {
    constructor(diet, lifespan, migrationPatterns, hidingBehavior) {
        super(diet, lifespan, migrationPatterns);
        this.hidingBehavior = hidingBehavior;
    }
}

const lion = new Predator("Carnivore", 12, "Seasonal", "Ambush hunting");
const gazelle = new Prey("Herbivore", 8, "Seasonal", "Group hiding");
console.log(lion.diet);  
console.log(gazelle.lifespan);  
console.log(lion.huntingMethod);  
console.log(gazelle.hidingBehavior); 


//Question4
class Artist {
    constructor(name, country, musicalStyle, instruments) {
        this.name = name;
        this.country = country;
        this.musicalStyle = musicalStyle;
        this.instruments = instruments;
    }
}

class Performance {
    constructor(artist, startTime, endTime) {
        this.artist = artist;
    }

    
}
    
const artist1 = new Artist("John", "Nigeria", "Afrobeats", ["Drums", "Guitar"]);
const performance1 = new Performance(artist1, "19:00", "21:00");
//  const stage1 = new Stage("Main Stage", 1000);
//  stage1.performances.push(performance1);


console.log(artist1.country);  
console.log(performance1.startTime);  
 
// console.log(stage1.capacity);  



//q5
class Product {
    constructor(name, price, quantity) {
      this.name = name;
      this.price = price;
      this.quantity = quantity;
    }
  
    calculateTotalValue() {
      return this.price * this.quantity;
    }
  }
  
  
  const product1 = new Product("Shirt", 25.99, 5);
  const product2 = new Product("Shoes", 59.99, 2);
  const product3 = new Product("Hat", 12.99, 10);
  
  
  const totalValue1 = product1.calculateTotalValue();
  const totalValue2 = product2.calculateTotalValue();
  const totalValue3 = product3.calculateTotalValue();
  
  console.log(`Total value of ${product1.name}: $${totalValue1}`);
  console.log(`Total value of ${product2.name}: $${totalValue2}`);
  console.log(`Total value of ${product3.name}: $${totalValue3}`);
  


//Question6
class Student {
    constructor(name, age, grades) {
      this.name = name;
      this.age = age;
      this.grades = grades;
    }
  
    calculateAverageGrade() {
      let sum = this.grades.reduce((acc, grade) => acc + grade, 0);
      return sum / this.grades.length;
    }
  
    displayStudentInfo() {
      console.log(`Name: ${this.name}`);
      console.log(`Age: ${this.age}`);
      console.log(`Grades: ${this.grades}`);
    }
  
    determinePassingStatus() {
      const averageGrade = this.calculateAverageGrade();
      return averageGrade >= 60;
    }
  }
  
  const student1 = new Student("Nova Blessings", 18, [80, 75, 90]);
  const student2 = new Student("Noel Favor", 20, [70, 65, 55]);
  
  console.log("Student 1 Information:");
  student1.displayStudentInfo();
  console.log("Average Grade:", student1.calculateAverageGrade());
  console.log("Passing Status:", student1.determinePassingStatus());
  
  console.log("Student 2 Information:");
  student2.displayStudentInfo();
  console.log("Average Grade:", student2.calculateAverageGrade());
  console.log("Passing Status:", student2.determinePassingStatus());
  
       
