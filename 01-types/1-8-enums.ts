{
  // Enum

  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({"MONDAY": 0, "TUESDAY": 1, "WEDNESDAY": 2});
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScrpit
  enum Days {
    Monday = 'mon',
    Tuesday = 'tue',
    Wednesday = 'wed',
    Thursday = 'thu',
    Saturday = 'sat',
    Sunday = 'sun'
  }
  console.log(Days.Monday);
  let day: Days = Days.Saturday;
  day = Days.Tuesday; 
  console.log(day);
}