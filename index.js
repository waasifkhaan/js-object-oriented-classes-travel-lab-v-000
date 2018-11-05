class Driver {
  constructor(name, startdate) {
    this.name = name;
    this.startDate = new Date(startdate);
  }
  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear();
  }
}

class Route {
  constructor(x,y){
      this.beginningLocation = x;
      this.endingLocation = y;
}

let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
t = eastWest.findIndex(function (element){ element === this.beginningLocation.horizontal})
y = eastWest.findIndex(function (element) { element === this.endingLocation.horizontal})
t = eastWest.indexOf(this.beginningLocation.horizontal)
s = eastWest.indexOf(this.endingLocation.horizontal)
}
  blocksTravelled(){
    return Math.abs(x - y ) + Math.abs(this.beginningLocation.vertical -this.endingLocation.vertical);
  }

}
