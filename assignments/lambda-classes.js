// CODE here for your Lambda Classes

class LambdaClass {  //CREATING CLASS OBJECT-------------
    constructor(attrs){ //constructor function
      this.callsign = attrs.callsign; //attributes
      this.name = attrs.name;
      this.dimensions = attrs.role;
    }
      destroy() {  //obj method 
        return `${this.name} was removed from the game`; //invoketh
      }
  }

  class CharacterStats extends LambdaClass {  //calling LambdaClass to extend properties to CharacterStats also to call anymore if needed.
    constructor(attrs){
      super(attrs);
      this.healthPoints = attrs.healthPoints;
    }
    takeDamage() { //method attrs invoking
      return `${this.name} took damage.`;
    }
  }

  class FullStackDevs extends CharacterStats {
    constructor(attrs){
      super(attrs);
      this.team = attrs.team;
      this.weapons = attrs.weapons;
      this.language = attrs.language;
    }
    greet() {
      return `${this.name} offers a greeting ${this.team}`;
    }
  }
  

  // webpt8 class (carl,juanita,nick,jay,braedon,robert,) - set up as my old squad assignments
  const firesupport = new FullStackDevs({
    role: 'Fire Support Specialist',
    healthPoints: 5,
    name: 'Carl',
    team: 'Bad News Bears Crew',
    weapons: [
      'Radio', 
      'M4',
    ],
    language: 'Broken Comms',
    callsign: 'rubberducky'
  });
  const teamlead = new FullStackDevs({
    role: 'PLTSGT',
    healthPoints: 5,
    name: 'Nick',
    team: 'Bad News Bears Crew',
    weapons: [
      'M4203', 
      'RadioComms',
    ],
    language: 'Broken Comms',
    callsign: 'sarge'
  });
  const grenadier = new FullStackDevs({
    role: 'Grenadier',
    healthPoints: 5,
    name: 'Jay',
    team: 'Bad News Bears Crew',
    weapons: [
      'M4203',
    ],
    language: 'Broken Comms',
    callsign: 'muscle'
  });
  const officer = new FullStackDevs({
    role: 'LT',
    healthPoints: 5,
    name: 'Robert',
    team: 'Bad News Bears Crew',
    weapons: [
      'M4',
      'RadioComms'
    ],
    language: 'Broken Comms',
    callsign: 'brain'
  });
  const sapper = new FullStackDevs({
    role: 'HeavyWeapons',
    healthPoints: 5,
    name: 'juanita',
    team: 'Bad News Bears Crew',
    weapons: [
      '240B'
    ],
    language: 'Broken Comms',
    callsign: 'tankgirl'
  });
  const medic = new FullStackDevs({
    role: 'Medic',
    healthPoints: 5,
    name: 'braedon',
    team: 'Bad News Bears Crew',
    weapons: [
      'Medical',
      'M4'
    ],
    language: 'Broken Comms',
    callsign: 'doc'
  });
  
//extra characters
  const csm = new FullStackDevs({
    role: 'NCO-noncommissioned officer',
    healthPoints: 5,
    name: 'aislynn',
    team: 'Bad News Bears Crew',
    weapons: [
      'Experience',
      'Intel'
    ],
    language: 'Broken Comms',
    callsign: 'getoffmygrass'
  });

  const co = new FullStackDevs({
    role: 'CO-commanding officer',
    healthPoints: 5,
    name: 'raymond',
    team: 'Bad News Bears Crew',
    weapons: [
      'Experience',
      'Intel'
    ],
    language: 'Broken Comms',
    callsign: 'topdog'
  });
  
   
  //humanoid invoke
  console.log(csm.callsign); 
  console.log(sapper.callsign);
  console.log(co.dimensions); 
  console.log(sapper.healthPoints); 
  console.log(grenadier.name); 
  console.log(officer.team); 
  console.log(sapper.weapons); 
  console.log(firesupport.language);
  console.log(csm.greet());
  console.log(teamlead.takeDamage());
  console.log(officer.destroy());
  console.log(csm.weapons);
  console.log(csm.greet());
  // //villain invoke
  console.log(co.weapons);
  console.log(co.greet());
  
  