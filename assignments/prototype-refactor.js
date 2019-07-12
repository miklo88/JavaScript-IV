/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

// refractor the factor. 

/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
function GameObject(attrs) {
    this.createdAt = attrs.createdAt;
    this.name = attrs.name;
    this.dimensions = attrs.dimensions;
  }
  
  GameObject.prototype.destroy = () => {
    return `${this.name} was removed from the game`;
  }
  
  /*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
  */
  
  function CharacterStats(attrs) {
    this.healthPoints = attrs.healthPoints;
    GameObject.call(this, attrs); // explicitly binding
  } 
  
  CharacterStats.prototype = Object.create(GameObject.prototype); //inheritance of the GameObject
  CharacterStats.prototype.takeDamage = function(){
  return `${this.name} took damage.`;
  }
  /*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
  */
  // function Humanoid(attrs) {
  //   this.team = attrs.team;
  //   this.weapons = attrs.weapons;
  //   this.language = attrs.language;
  //   CharacterStats.call(this, attrs);
  // }
  //   Humanoid.prototype = Object.create(CharacterStats.prototype); //inheritance of the characterstats
  //   Humanoid.prototype.greet = function(){
  //   return `${this.name} offers a greeting ${this.language}`;
  // }
  function Humanoid(attrs){
    CharacterStats.call(this, attrs) // implicit binding
    this.team = attrs.team;
    this.weapons = attrs.weapons;
    this.language = attrs.language;
  }
  
  Humanoid.prototype = Object.create(CharacterStats.prototype) // inheritence
  Humanoid.prototype.greet = function(){
    return `${this.name} offers a greeting in ${this.language}.`
  }
  /*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
  */
  
  
  /*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
  */
  
  // Test you work by un-commenting these 3 objects and the list of console logs below:
  
  
  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });
  
  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });
  
  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });
  
  // Stretch task: \
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
    function Hero(attrs) {
    Humanoid.call(this, attrs) //implicit binding
  }
    Hero.prototype = Object.create(Humanoid.prototype); //inheritance
  
    //hero creation
    const mario = new Hero({
    createdAt: new Date(),
    dimensions: {
    length: 2,
    width: 4,
    height: 4,
    },
    healthPoints: 25,
    name: 'Mario',
    team: 'Peachs Castle',
    weapons: [
      'Wrench',
      'Fireball',
    ],
    language: 'Brooklyn Italian',
  });
  
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.   
    function Villain(attrs) {
    Humanoid.call(this, attrs) // implicit binding
  }
    Villain.prototype = Object.create(Humanoid.prototype); //inheritence
  
    // villain creation
    const bowser = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 5,
      width: 4,
      height: 8,
    },
    healthPoints: 50,
    name: 'Bowser',
    team: 'Mushroom Kingdom',
    weapons: [
      'Claws',
      'Mushrooms',
    ],
    language: 'Angry Turtle',
  });
  //humanoid invoke
  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  //hero invoke
  console.log(mario.weapons);
  console.log(mario.greet());
  //villain invoke
  console.log(bowser.weapons);
  console.log(bowser.greet());
  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!