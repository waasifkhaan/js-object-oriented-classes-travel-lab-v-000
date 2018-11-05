class Driver {
  constructor(name, startdate) {
    this.name = name;
    this.startDate = new Date(startdate);
  }
  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear();
  }
}
let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
class Route {
  constructor(beginningLocation,endingLocation){
      this.beginningLocation = beginningLocation;
      this.endingLocation = endingLocation;
}



t = eastWest.indexOf(this.beginningLocation.horizontal)
s = eastWest.indexOf(this.endingLocation.horizontal)
}
  blocksTravelled(){
    return Math.abs(t - s ) + Math.abs(this.beginningLocation.vertical -this.endingLocation.vertical);
  }

}
