import { filtrarDatosFuturos, filtrarDatosPasados } from "../modules/funciones.js"

const containerFirstTable = document.getElementById("container-first-table")
const containerSecondTable = document.getElementById("container-second-table")
const secondTableBody = document.getElementById("secondTable-body")
const thirdTableBody = document.getElementById("thirdTable-body")

fetch("https://mindhub-xj03.onrender.com/api/amazing")
  .then(response => response.json())
  .then(response => {

    const newEventsobject = response;
    const currentDate = newEventsobject.currentDate
    const events = newEventsobject.events   /* all events */
    console.log("All events:",events)
    const categories = events.map(element => element.category)
    const setCategories = new Set(categories)
    const arrayCategories = Array.from(setCategories) /* array of all categories */
    console.log("arrayCategories",arrayCategories)
    const pastEvents = filtrarDatosPasados(events, currentDate) /* past events */
    

    const newPastObject = pastEvents.map(element => {
      return {
        Categories: element.category,
        Revenues: element.price * element.assistance,
        Assistance: element.assistance,
        Capacity: element.capacity,
        AssistancePercent: (element.assistance * 100) / element.capacity
      }
    })

    
    console.log("newPastObject:",newPastObject)

    const arraySameCategory = arrayCategories.map(category => newPastObject.filter(object => object.Categories === category))
    console.log(arraySameCategory)

    const revenueArray = []
    for (const array of arraySameCategory) {
      const revenueReduce = array.reduce((acc, item) => {
        return acc + item.Revenues
      }, 0)
      revenueArray.push(revenueReduce)

    }
    console.log("Lista con los Revenue:", revenueArray)

    const percentArray = []
    for (const array of arraySameCategory) {
      const percentReduce = array.reduce((acc, item) => {
        return acc + item.AssistancePercent / array.length
      }, 0)
      percentArray.push(percentReduce)

    }
    console.log("Lista con los Porcentajes:", percentArray)

    const futureEvents = filtrarDatosFuturos(events, currentDate) /* future events*/
    console.log("Future Events:",futureEvents)

    const arrayFutureCategories = futureEvents.map(element => element.category)
    console.log(arrayFutureCategories)

    const setforFutureCategories = new Set(arrayFutureCategories)
    console.log(setforFutureCategories)
    
    const onlyFutureCategories = Array.from(setforFutureCategories)
    console.log(onlyFutureCategories)

    const newFutureObject = futureEvents.map(element => {
      return {
        Categories: element.category,
        Capacity: element.capacity,
        Estimate: element.estimate,
        Price: element.price
      }
    })
    console.log("newFutureObject", newFutureObject)

    const shortFutureArray= futureEvents.map(object => {
      return {category:object.category, 
              estimateRevenues:object.estimate * object.price, 
              estimateAssistance:(object.estimate * 100) /  object.capacity
            }
    })
    console.log(console.log("shortFutureArray",shortFutureArray))
    
    const arrayOfFutureOrdenateObjects = onlyFutureCategories.map(category => shortFutureArray.filter(object => object.category=== category))
    console.log(arrayOfFutureOrdenateObjects)
  
  

    const estimateAssistance=[]
    for (const element of arrayOfFutureOrdenateObjects) {
      const reduceEstimateAssistance = element.reduce((acc,item)=>{
        return acc + item.estimateAssistance/element.length 
      },0)
      estimateAssistance.push(reduceEstimateAssistance)
    }
    console.log(estimateAssistance)



    const estimateRevenues=[]
    for (const element of arrayOfFutureOrdenateObjects) {
      const reduceEstimateRevenues = element.reduce((acc,item)=>{
        return acc + item.estimateRevenues
      },0)
      estimateRevenues.push(reduceEstimateRevenues)
    }
    console.log(estimateRevenues)

    const elementsWithAssistance = events.filter(element => element.assistance)  /* only events with assistance*/
    const eWithPercentsAssitance = elementsWithAssistance.map(function (element) { /* events with only the assistance in percent and name */
      return { name: element.name, assistance: element.assistance * 100 / element.capacity }
    })
    const objectHighestAsisstance = eWithPercentsAssitance[2]  /* object with highest */
    const objetctLowestAssistance = eWithPercentsAssitance[1]     /*object with lowest assistance */
    const eventCapacity = events.map(element => {
      return { name: element.name, capacity: element.capacity }

    })


    const eLargerCapacity = eventCapacity.sort(function (a, b) {     /* event with larger capacity */
      return b.capacity - a.capacity
    }).find(element => Math.max(element.capacity))
    containerFirstTable.innerHTML = cardFirstTable(objectHighestAsisstance, objetctLowestAssistance, eLargerCapacity)

    console.log(arrayCategories)

    cardSecondTableCategory(arrayCategories,revenueArray,percentArray)
    cardThirdTableCategory(onlyFutureCategories,estimateRevenues,estimateAssistance)


  }) /* end of fetch*/

function cardFirstTable(object, object2, object3) {
  return `  <td>${object.name} - ${object.assistance.toFixed(2)}%</td>
              <td>${object2.name} - ${object2.assistance}%</td>
              <td>${object3.name} - ${object3.capacity}</td> 
              `


}

function cardSecondTableCategory(aCategory,aRevenues,aPercent) {

  aCategory.forEach((element,index) => {
    secondTableBody.innerHTML+= ` 
    <tr>
      <td>${element}</td>
      <td>${aRevenues[index]}</td> 
      <td>${aPercent[index].toFixed(2)}</td>  
    </tr>
                
    `
  }); 
    
}
console.log(containerSecondTable)

function cardThirdTableCategory(aCategory,aEstimateR,aEstimateAssistance){
  aCategory.forEach((element,index)=>{
    thirdTableBody.innerHTML+=`
      <tr>
          <td>${element}</td>
          <td>${aEstimateR[index]}</td>
          <td>${aEstimateAssistance[index].toFixed(2)}</td>
      </tr>
      `
  })
  
  
}
