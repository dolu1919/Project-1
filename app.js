function start() {

  // Make  object and some staff 
  const width = 10
  const height = 10
  const cellcount = height * width
  const area = document.querySelector('.area')
  let cells = []
  let ways = []
  let pacmanpostion = 1
  const theways = [1, 50, 41, 52, 62, 72, 73, 74, 64, 54, 84, 85, 86, 87, 88, 89, 79, 69, 59, 49, 39, 29, 19, 18, 17, 27, 37, 36, 46, 56, 34, 14, 13, 12, 22, 32, 42, 66, 76, 24, 35, 65, 67, 68, 44]


  


  console.log(theways.sort())
  const filteredArray = cells.filter((element) => {

    return element === theways
    

  })

  //testing my array 
  for (let i = 1; i < theways.length; i++) {

  
    console.log(i + ',' +theways[i])
    

  }



  theways.sort(element => console.log(element))



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

  let i = 1
  let a = 1

  while (i <= cellcount) {

    while (i === theways[a]) {
      const way = document.createElement('div')
      way.innerHTML = a
      way.classList.add('road')
      console.log('the wayyyyyy '+a + ','+i)
      if (i === pacmanpostion) {

        way.classList.add('pacmanpostion')

      }
      if (a <= theways.length) {
    
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




  document.addEventListener('keydown', (event) => {
    console.log(event.key)


    if (event.key === 'ArrowRight') {


      ways[pacmanpostion].classList.remove('pacmanpostion')
      console.log(theways[pacmanpostion] + 'afterrrr')
      
      pacmanpostion += 1 
      ways[pacmanpostion].classList.add('pacmanpostion')
      console.log(theways[pacmanpostion] + 1 + 'afterrrr')
      
    }


    else if (event.key === 'ArrowLeft') {

      ways[pacmanpostion].classList.remove('pacmanpostion')
      //console.log(theways[pacmanpostion]+ 2 + 'Leffffffft')
      pacmanpostion -= 1
      ways[pacmanpostion].classList.add('pacmanpostion')
      //console.log(ways[pacmanpostion]+ 2 +'Leffffffft')
    }

    
    else if (event.key === 'ArrowUp') {

      
      //console.log(theways[pacmanpostion] + 1 + ', ' +'UUUUUP')
      if (pacmanpostion < width) {

        return 
      }
      let tmp = pacmanpostion
      console.log(tmp +'stocke')
      let nexpostion = 0
   
      
      ways[pacmanpostion].classList.remove('pacmanpostion')
      console.log(ways[pacmanpostion])

      for (let l  = 1; l <= theways.length; l++) {

        console.log(theways[l])
      
        console.log(tmp + 'the variable temp')
        if (tmp === theways[l]){
          
          return nexpostion =  tmp
          console.log('nextposition' +nexpostion)
        }
      }

      
      //console.log(pacmanpostion + 'of pac man')
      ways[nexpostion].classList.add('pacmanpostion')
      //console.log(theways[pacmanpostion]  + ',' +'UPPPPP')
      console.log(pacmanpostion  +1  +'position of pacman  Downnnn')
      
     
    }

    else if (event.key === 'ArrowDown') {
      ways[pacmanpostion].classList.remove('pacmanpostion')
      //console.log(theways[pacmanpostion] + ', ' +'DOwnnn')
      console.log(ways[pacmanpostion])
      pacmanpostion +=  12
      console.log(pacmanpostion  +1  +'position of pacman  Downnnn')
      ways[pacmanpostion].classList.add('pacmanpostion')
      //console.log(theways[pacmanpostion] + ', ' +'DOwnnn2222')
      console.log(theways[pacmanpostion] + 1 + 'afterrrr')
      

    }


 

  })


}
window.addEventListener('DOMContentLoaded', start)