
class Driver {
  constructor(name, string ) {
    this.name = name;
    this.homeState = string;
    
  }

  veto() {
    return `No, I must disagree`;
  }
  approve() {
    return `You can do that!`;
  }