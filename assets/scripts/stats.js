import { filtrarDatosFuturos, filtrarDatosPasados } from "../modules/funciones.js"

const containerFirstTable = document.getElementById("container-first-table")
const containerSecondTable = document.getElementById("container-second-table")
const secondTableBody = document.getElementById("secondTable-body")

fetch("https://mindhub-xj03.onrender.com/api/amazing")
  .then(response => response.json())
  .then(response => {

    const newEventsobject = response;
    const currentDate = newEventsobject.currentDate
    const events = newEventsobject.events   /* all events */
    const categories = events.map(element => element.category)
    const setCategories = new Set(categories)
    const arrayCategories = Array.from(setCategories) /* array of all categories */
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
    
    const arraySameCategory = arrayCategories.map(category => newPastObject.filter(object => object.Categories === category))
   
    for (const array of arraySameCategory) {
      const revenueReduce = array.reduce((acc, item) => {
        return acc + item.Revenues
      }, 0)

      console.log(revenueReduce)
    }

    for (const array of arraySameCategory) {
      const percentReduce = array.reduce( (acc,item) => {
        return acc + item.AssistancePercent/array.length
      },0) 
      
      console.log(percentReduce)
      }


    const futureEvents = filtrarDatosFuturos(events, currentDate) /* future events*/
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
    secondTableBody.innerHTML = cardSecondTable(arrayCategories)


  }) /* end of fetch*/

function cardFirstTable(object, object2, object3) {
  return `  <td>${object.name} - ${object.assistance}%</td>
              <td>${object2.name} - ${object2.assistance}%</td>
              <td>${object3.name} - ${object3.capacity}</td> 
              `


}

function cardSecondTable(array, card) {

  for (const element of array) {
    return ` 
          <tr>
              <td>${element}</td>
              <td></td>
              <td></td>
          </tr>`


  }


}



