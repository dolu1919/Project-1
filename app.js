function start() {

  // Make  object and some staff 
  const width = 10
  const height = 10
  const cellcount = height * width
  const area = document.querySelector('.area')
  let cells = []
  let ways = []
  let pacmanpostion = 12
  const theways = [16, 41, 73, 74, 64, 54, 84, 85, 86, 87, 88, 18, 37, 36, 46, 56, 34, 14, 13, 12, 42, 66, 76, 24, 35, 65, 67, 44, 26 ,28, 38, 58, 78, 40,17, 68, 48, 21,11, 31, 49, 51, 61, 71, 72, 43]
  const wall = [16, 41, 73, 74, 64, 54, 84, 85, 86, 87, 88, 18, 37, 36, 46, 56, 34, 14, 13, 12, 42, 66, 76, 24, 35, 65, 67, 44, 26 ,28, 38, 58, 78, 40,17, 68, 48, 21,11, 31, 49, 51, 61, 71, 72, 43]

/*
for (let i = 0; i < cellcount; i++) {

  const cell = document.createElement('div')
  
  cell.classList.add('cell')
  if (i == pacmanpostion) {
    cell.classList.add('pacmanpostion')
  }

  area.appendChild(cell)
  cells.push(cell)

}
  

  wall.forEach((element) => {
    area[element].classList.add("wall")
  })

*/

/
  console.log(theways.sort())
  const filteredArray = cells.filter((element) => {

    return element === theways
    

  })

  //testing my array 
  for (let i = 1; i < theways.length; i++) {

  
//   console.log(i + ',' +theways[i])
    

  }

  


  


 // theways.sort(element => console.log(element))



  // function converti arrays                
  function objectToArray(object) {
    const keys = Object.keys(object)

    const mappedKeys = keys.map((key) => {
      // key = 'name'
      // this must return an array.
      // How do I transform a (key) => ['key', 'value']
      const elem1 = key
      const elem2 = object[key]

      return [elem1]

    })
  }



  let i = 0
  let a = 0

  while (i < cellcount) {

    while (i === theways[a]) {
      const way = document.createElement('div')
      way.innerHTML = a
      way.classList.add('road')
   //   console.log('the wayyyyyy '+a + ','+i)
      if (i === pacmanpostion) {

     //   way.classList.add('pacmanpostion')

      }
      if (a < theways.length) {
    
        i++
        
        
        way.innerHTML = theways[a] +', ' +(a)
        area.appendChild(way)
        ways.push(way)
       

      }
      a++
    }

    const cell = document.createElement('div')
    cell.classList.add('cell')
    cell.innerHTML = i
    area.appendChild(cell)
    cells.push(cell)

    i++
  }


  ways[pacmanpostion].classList.add('pacmanpostion')

  //console.log(ways)



  function godown() {


    


  }




  document.addEventListener('keydown', (event) => {
   // console.log(event.key)


    if (event.key === 'ArrowRight') {

      console.log(pacmanpostion)
      console.log(ways)
      ways[pacmanpostion].classList.remove('pacmanpostion')
     // console.log(pacmanpostion + 'the position')
      pacmanpostion += 1 
      ways[pacmanpostion].classList.add('pacmanpostion')
     // console.log(theways[pacmanpostion]  + 'afterrrr')
      //const tempo2 = parseInt(ways[pacmanpostion].innerText)
    


    } else if (event.key === 'ArrowLeft') {


      ways[pacmanpostion].classList.remove('pacmanpostion')
     // console.log(theways[pacmanpostion] + 'Leffffffft')
      pacmanpostion -= 1
      ways[pacmanpostion].classList.add('pacmanpostion')
      //console.log(ways[pacmanpostion]+ 2 +'Leffffffft')
    }

    
    else if (event.key === 'ArrowUp') {

      ways[pacmanpostion].classList.remove('pacmanpostion')
     // console.log(theways[pacmanpostion] + 1 + ', ' +'UUUUUP')
      
    //  console.log(pacmanpostion )
      let   p = 1
      let tmpu = 0
      while (p < 44 ){
        let position = parseInt(ways[pacmanpostion].innerText ) 
        let num = parseInt(ways[p].innerText )
       // console.log(position)  
        position -= 10
        if (position === num)
        {
          tmpu = p
        //  console.log(p)
        //  console.log(num + 'o dokdo k')
        //  console.log(tmpu + 'ogbogkbog') 
        }
        p++
      
      }
      ways[tmpu].classList.add('pacmanpostion')  
      
    } 
    

    else if (event.key === 'ArrowDown') {


      ways[pacmanpostion].classList.remove('pacmanpostion')
      pacmanpostion += 5
      ways[pacmanpostion].classList.add('pacmanpostion')
      
     // console.log(pacmanpostion +'position now')
      let   p = 1
      let   tmpu = 0 
      
      

     
    }
    
  
    

  })

 


}
window.addEventListener('DOMContentLoaded', start)




