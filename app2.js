function start() {

  const width = 10
  const height = 10
  const cellcount = height * width
  const area = document.querySelector('.area')
  let cells = []
  let point = 0
  // const score = document.querySelector()
  let pacmanpostion = 11
  const wall = [82 ,15, 16, 41, 73, 74, 64, 54, 84, 85, 86, 87, 88, 18, 37, 36, 46, 56, 34, 14, 13, 12, 42, 66, 76, 24, 35, 65, 67, 44, 26, 28, 38, 58, 78, 40, 17, 68, 48, 21, 11, 31, 49, 51, 61, 71, 72, 43]
  const barrier = [0,1 ,2 ,3 , 4, 5, 6, 7, 8, 9, 10, 19, 20, 22, 23, 25, 27, 29, 30, 32, 33, 39, 45, 47, 50, 52, 53, 55, 57, 59, 60, 62, 63, 69, 70, 75, 77, 79, 80, 81, 83, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]
  let champi = 12
  let row = []
  let  path = [ 12, 13, 14,24 ,34 ,35 ,36 , 46 , 56 , 66 , 65 ,64 ,65 , 66, 67 , 68 ,67 ,66 ,65 ,64 ,54 ,44 ,43 ,42 ,41 ,51 ,61 ,
    71 ,72 ,73 ,74 ,84 ,85 ,86 ,87 ,88 ,78 ,68 ,58 ,48 ,38 ,28 ,18 ,17 ,16 ,26 ,36 ,46 ,56 ,66 ,65 ,64 ,54 ,44 ,43 ,42 ,41 ,31 ,21 ,11,
    ,12 ,13 ,14 ,24 ,34 ,44 ,54 ,64 ,74 ,64 ,65 ,66 ,67 ,68 ,78 ,88 ,87 ,86 ,85,, 84, 74, 73, 72, 71, 61, 51, 41, 51, 61, 71, 61, 51, 41,
     31, 21, 11, 12, 13, 14, 13, 12, 11, 21, 31, 41, 42, 43, 44, 34, 35, 36, 37, 38, 37, 36, 35, 36, 26, 16, 17, 18, 28, 38, 48, 58, 68, 78,
     88, 87, 86, 85, 84, 74, 64, 54, 44, 34, 24, 34, 35, 36, 37, 38 ]
  

  

  console.log(barrier.length)
  console.log(wall.length)




  for (let i = 0; i < cellcount; i++) {

    const cell = document.createElement('div')

    cell.classList.add('cell')
    /*
    if (i === pacmanpostion) {
      cell.classList.add('pacmanpostion')
    }
    if (i === champi) {

      cell.classList.add('champi')
    }
    */

    if (barrier.includes(i)) {
      cell.classList.add('barrier')
    }
    if (wall.includes(i)) {
      cell.classList.add('wall')
    }
    if (i === champi) {
      cell.classList.add('champi')
    }
    

    area.appendChild(cell)
    cells.push(cell)

  }

 


  wall.forEach((element) => {
  cells[element].classList.add('wall')


    //console.log(element)


  })

  barrier.forEach((element) => {

    cells[element].classList.add('barrier')
  })


  
  cells[pacmanpostion].classList.add('pacmanpostion')
  //pacmanpostion += 1


  //console.log(typeof cells)




//cells[champi].classList.add('champi')
console.log(champi)

/*
const interval = setInterval(() => {
for (let i = 0; i < path.length; i++) {

cells[path[i]].classList.add('champi')

}


},  8000)

 */

 
// let i  = 0 

// while ( i < path.length) {


// let make = setTimeout(() => {

//   cells[path[2]].classList.add('champi')

//  }, 2000) 


//  let remove  = setTimeout(()=> {


//   cells[path[2]].classList.remove('champi')
  
//  }, 4000)
//  i++

// }

let i = 0

setInterval(() => {
    cells[path[i]].classList.remove('champi')
    i++
    cells[path[i]].classList.add('champi')
}, 500)
  


 //testing 

 /*
for (let i = 0; i < path.length; i++ ) {

cells[path[i]].classList.add('champi')

}
*/





  document.addEventListener('keydown', (event) => {
    console.log(event.key)

    if (event.key === 'ArrowRight') {

      console.log(pacmanpostion +'before')
      if (cells[pacmanpostion ].classList.contains('barrier')) 
      {
        return

      }
     
      //console.log(pacmanpostion +'after')
      else if (cells[pacmanpostion += 1].classList.contains('wall')) 
      {
        cells[pacmanpostion -= 1].classList.remove('pacmanpostion') 
        console.log(pacmanpostion)
        cells[pacmanpostion += 1].classList.add('pacmanpostion')

      
      
      }

      
    } else if (event.key === 'ArrowLeft') {

      if (cells[pacmanpostion].classList.contains('barrier'))
      {
        return
      }
      else if (cells[pacmanpostion -= 1].classList.contains('wall')) 
      {
        cells[pacmanpostion += 1].classList.remove('pacmanpostion')
        cells[pacmanpostion -= 1].classList.add('pacmanpostion')
 

      }
     

    } else if (event.key === 'ArrowUp') {
      console.log(cells[pacmanpostion - width])
     if (cells[pacmanpostion - width].classList.contains('barrier')) {
        
       return
      }
      
      else if (cells[pacmanpostion - width].classList.contains('wall'))
       {
          cells[pacmanpostion].classList.remove('pacmanpostion')
          pacmanpostion -= width


          for (let i = 0; i < wall.length; i++) {
           if (pacmanpostion === wall[i]) {
              cells[pacmanpostion].classList.add('pacmanpostion')
            }
          }
      
      }

    } else if (event.key === 'ArrowDown') {
      //let tmp = pacmanpostion -   cells.length - width - 1
     // if (pacmanpostion > cells.length - width - 1) 
      if (cells[pacmanpostion + width ].classList.contains('barrier'))
      //cells[pacmanpostion > cells.length - width - 1].classList.contains('barrier')
      {
      

        return
      }
    
      
      else if(cells[pacmanpostion + width].classList.contains('wall'))
      {
        cells[pacmanpostion].classList.remove('pacmanpostion')
        pacmanpostion += width
        cells[pacmanpostion].classList.add('pacmanpostion')
         
          

      }
    
    }
         

  })


  // Make poijm

 

}

window.addEventListener('DOMContentLoaded', start)