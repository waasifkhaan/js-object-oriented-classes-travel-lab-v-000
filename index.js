
class Driver {
  constructor(name, startdate ) {
    this.name = name;
    this.startDate = startdate;

  }

  yearsExperienceFromBeginningOf(year) {
    return ${this.startDate}.year - year;
  }
}
