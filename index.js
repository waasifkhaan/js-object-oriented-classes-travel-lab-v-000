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
let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
array1.findIndex(findFirstLargeNumber)
blocksTravelled(){
return (this.beginningLocation.horizontal - this.endingLocation.horizontal) + (this.beginningLocation.vertical -this.endingLocation.vertical);
}
estimatedTime(){

}
}
