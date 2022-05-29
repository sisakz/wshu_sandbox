
// competition tábla
const competition = [
    {
        id: 1,
        name: 'WorldSkills Shanghai 2022',
        startingDate: new Date("2022-10-12T22:00:00.000Z"), // Oct 12, 2022
        endDate: new Date("2022-10-17T22:00:00.000Z"), // Oct 17, 2022
    },
    {
        id: 2,
        name: 'EuroSkills Gdansk 2023',
        startingDate: new Date("2023-10-05T22:00:00.000Z"), // Oct 05, 2023
        endDate: new Date("2023-10-09T22:00:00.000Z"), // Oct 09, 2023
    }
]

// trainingPeriod tábla
// A tárgyévi és a következő évi versenyhez kapcsolódó felkészítési időszakok
// A "WS2022 felkészítési időszak - 2022" a példában csak május 5-től június 30-ig tart
// A normál periódus ferburár 15 - szeptember 30 lenne 
const trainingPeriod = [
    {
        // A WS2022-re kiválasztott versenyzők 2022-ben zajló felkészítésének időszaka
        id: 1,
        competitionId: 1,
        name: 'WS2022 felkészítési időszak - 2022',
        startingDate: new Date("2022-05-05T22:00:00.000Z"), // May 05, 2022
        endDate: new Date("2022-06-30T22:00:00.000Z"), // Sep 30, 2022
        maxTrainingDays: 9,  // ebben a pédában maximálisan 9 napos felkészítés, valójában maximálisan 120 napos
    },
    {
        // Az ES2023-ra kiválasztott versenyző 2022-ben zajló felkészítésének időszaka
        id: 2,
        competitionId: 2,
        name: 'ES2023 felkészítési időszak - 2022',
        startingDate: new Date("2022-02-15T22:00:00.000Z"), // Feb 15, 2022
        endDate: new Date("2022-12-31T22:00:00.000Z"), // Dec 31, 2022
        maxTrainingDays: 120,
    },
    {
        // Az ES2023-ra kiválasztott versenyző 2023-ban zajló felkészítésének időszaka
        id: 3,
        competitionId: 2,
        name: 'ES2023 felkészítési időszak - 2023',
        startingDate: new Date("2022-01-15T22:00:00.000Z"), // Jan 15, 2023
        endDate: new Date("2022-09-20T22:00:00.000Z"), // Sep 20, 2022
        maxTrainingDays: 120,

    },
]

// training tábla
const training = [
    {
        // Sisák Botond WS2022 S17 2022 évi felkészítése -
        id: 1,
        trainingPeriodId: 1, // WS2022 felkészítési időszak - 2022
        name: 'WS2022 S17 2022 felkészítés - Sisák Botond',
        startingDate: new Date("2022-05-19T22:00:00.000Z"), // May 19, 2022
        endDate: new Date("2022-06-30T22:00:00.000Z"), // Jun 30, 2022
        maxTrainingDays: 7, // ebben a pédában maximálisan 7 napos felkészítés, valójában maximálisan 120 napos
    },
]


// calendarMain tábla
// Teljes naptár, ami minimálisan a tárgyév és a következő év összes napját tartalmazza.
// A példában csak május 1-től június 30-ig
let calendarMain = []
const startDate = new Date("2022-05-01T22:00:00.000Z") // May 1, 2022
const endDate = new Date("2022-06-30T22:00:00.000Z") // June 30, 2022
let id=1
for (let i=startDate.getTime(); i<=endDate.getTime(); i+=86400000) {
    const newDate = new Date(i)
    const day = newDate.getDay()
    newCalendarItem = {
        id,
        date: newDate,
        notRecommended: (day===0 || day===6), // 0=sunday, 6=saturday
        denied: false,
        trainingDay: false,
        descrition: '',
        trainingPeriodId: 1,
        trainingId: 0
   }
   calendarMain.push(newCalendarItem)
   id++
   console.log(id)
}
console.log(calendarMain)


// calendarAdmin tábla
// Az egyes felkészítési időszakokhoz kapcsolódó speciális napok az MKIK admin által rögzítve
const calendarAdmin = [
    {
        // szombat, nem ajánlott nap
        id: 1, 
        date: new Date("2022-05-21T22:00:00.000Z"),
        notRecommended: true,
        denied: false,
        trainingDay: false,
        descrition: '',
        trainingPeriodId: 1, //WS2022 felkészítési időszak - 2022
        trainingId: null
      },
      {
        // vasárnap, nem ajánlott nap
        id: 2,
        date: new Date("2022-05-21T22:00:00.000Z"),
        notRecommended: true,
        denied: false,
        trainingDay: false,
        descrition: '',
        trainingPeriodId: 1,
        trainingId: null
      },    
      {
        // Szakértői tréning, tiltott nap
        id: 3,
        date: new Date("2022-05-24T22:00:00.000Z"),
        notRecommended: false,
        denied: true,
        trainingDay: false,
        descrition: 'Szakértői tréning',
        trainingPeriodId: 1,
        trainingId: null
      },
      {
        // szombat, nem ajánlott nap
        id: 4,
        date: new Date("2022-05-28T22:00:00.000Z"),
        notRecommended: true,
        denied: false,
        trainingDay: false,
        descrition: '',
        trainingPeriodId: 1,
        trainingId: null
    },
    {
        // vasárnap, nem ajánlott nap
        id: 5,
        date: new Date("2022-05-29T22:00:00.000Z"),
        notRecommended: true,
        denied: false,
        trainingDay: false,
        descrition: '',
        trainingPeriodId: 1,
        trainingId: null
    },
    {
        // Teszt kitöltésének határideje, tájékoztatásként megadott nap
        id: 6,
        date: new Date("2022-05-31T22:00:00.000Z"),
        notRecommended: false,
        denied: false,
        trainingDay: false,
        descrition: 'Teszt határidő',
        trainingPeriodId: 1,
        trainingId: null
    },
    {
        // szombat, nem ajánlott nap
        id: 7,
        date: new Date("2022-06-04T22:00:00.000Z"),
        notRecommended: false,
        denied: false,
        trainingDay: false,
        descrition: 'Teszt határidő',
        trainingPeriodId: 1,
        trainingId: null
    },
    {
        // vasármap, nem ajánlott nap, Pünkösd 
        id: 7,
        date: new Date("2022-06-05T22:00:00.000Z"),
        notRecommended: true,
        denied: false,
        trainingDay: false,
        descrition: 'Pünkösd',
        trainingPeriodId: 1,
        trainingId: null
    },
    {
        // Pünkösd hétfő, nem ajánlott nap 
        id: 7,
        date: new Date("2022-06-06T22:00:00.000Z"),
        notRecommended: true,
        denied: false,
        trainingDay: false,
        descrition: 'Pünkösd',
        trainingPeriodId: 1,
        trainingId: null
    },
]

console.log(calendarAdmin)

// calendarTraining tábla
// Az egyes felkészítésekhez kapcsolódó speciális napok a felkészítésvezető által rögzítve
const calendarTraining = [
    {
        // tiltott nap, felkészítési időszakot megelőző nap (nem biztos, hogy kell)
        id: 1, 
        date: new Date("2022-05-16T22:00:00.000Z"),
        notRecommended: false,
        denied: true,
        trainingDay: false,
        descrition: '',
        trainingPeriodId: null,
        trainingId: 1 // WS2022 S17 2022 felkészítés - Sisák Botond
    },
    {
        // tiltott nap, felkészítési időszakot megelőző nap (nem biztos, hogy kell)
        id: 2, 
        date: new Date("2022-05-17T22:00:00.000Z"),
        notRecommended: false,
        denied: true,
        trainingDay: false,
        descrition: '',
        trainingPeriodId: null,
        trainingId: 1
    },
    {
        // tiltott nap, felkészítési időszakot megelőző nap (nem biztos, hogy kell)
        id: 3, 
        date: new Date("2022-05-18T22:00:00.000Z"),
        notRecommended: false,
        denied: true,
        trainingDay: false,
        descrition: '',
        trainingPeriodId: null,
        trainingId: 1
    },
    {
        // 1. felkészítési nap
        id: 4, 
        date: new Date("2022-05-19T22:00:00.000Z"),
        notRecommended: false,
        denied: false,
        trainingDay: true,
        descrition: '',
        trainingPeriodId: null,
        trainingId: 1
    },
    {
        // 2. felkészítési nap
        id: 5, 
        date: new Date("2022-05-20T22:00:00.000Z"),
        notRecommended: false,
        denied: false,
        trainingDay: true,
        descrition: '',
        trainingPeriodId: null,
        trainingId: 1
    },
    {
        // 3. felkészítési nap
        id: 6, 
        date: new Date("2022-05-23T22:00:00.000Z"),
        notRecommended: false,
        denied: false,
        trainingDay: true,
        descrition: '',
        trainingPeriodId: null,
        trainingId: 1
    },
    {
        // 4. felkészítési nap
        id: 7, 
        date: new Date("2022-05-25T22:00:00.000Z"),
        notRecommended: false,
        denied: false,
        trainingDay: true,
        descrition: '',
        trainingPeriodId: null,
        trainingId: 1
    },
    {
        // nem felkészítési nap, felkészítésvezető által letiltva
        id: 8, 
        date: new Date("2022-05-26T22:00:00.000Z"),
        notRecommended: false,
        denied: true,
        trainingDay: false,
        descrition: '',
        trainingPeriodId: null,
        trainingId: 1
    },
    {
        // 5. felkészítési nap
        id: 9, 
        date: new Date("2022-05-27T22:00:00.000Z"),
        notRecommended: false,
        denied: false,
        trainingDay: true,
        descrition: '',
        trainingPeriodId: null,
        trainingId: 1
    },
    {
        // nem felkészítési nap, Botond vizsga, felkészítésvezető által letiltva
        id: 10, 
        date: new Date("2022-05-30T22:00:00.000Z"),
        notRecommended: false,
        denied: true,
        trainingDay: false,
        descrition: 'Botond vizsga',
        trainingPeriodId: null,
        trainingId: 1
    },
    {
        // 6. felkészítési nap
        id: 11, 
        date: new Date("2022-05-31T22:00:00.000Z"),
        notRecommended: false,
        denied: false,
        trainingDay: false,
        descrition: '',
        trainingPeriodId: null,
        trainingId: 1
    },
    {
        // 7. felkészítési nap
        id: 12, 
        date: new Date("2022-06-01T22:00:00.000Z"),
        notRecommended: false,
        denied: false,
        trainingDay: true,
        descrition: '',
        trainingPeriodId: 1,
        trainingId: 1
    },
    {
        // nem felkészítési nap, Botond vizsga, felkészítésvezető által letiltva
        id: 13, 
        date: new Date("2022-06-03T22:00:00.000Z"),
        notRecommended: false,
        denied: true,
        trainingDay: false,
        descrition: '',
        trainingPeriodId: null,
        trainingId: 1
    },    
]