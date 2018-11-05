class Driver {
  constructor(name, startdate) {
    this.name = name;
    this.startDate = new Date;
  }
  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear();
}
}
