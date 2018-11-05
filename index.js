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
let array2_large= ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
array_1_small = this.beginningLocation.horizontal
function findMatch(array_1_small, array2_large) {
var ary = new Array();
for(i = 0;i < array2_large.length; i++)
{
  for(z = 0; z < array_1_small.length; z++)
  {
    if(array2_large[i] == array_1_small[z])
    {
      ary.push(i);
    }
  }

}
return ary;
}
blocksTravelled(){
return (this.beginningLocation.horizontal - this.endingLocation.horizontal) + (this.beginningLocation.vertical -this.endingLocation.vertical);
}
estimatedTime(){

}
}
