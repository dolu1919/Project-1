let i = 0
  let a = 0

  while (i < cellcount) {

  while (i === theways[a]) {
    const way = document.createElement('div')
    way.innerHTML = a
    way.classList.add('road')
    if (i === pacmanpostion) {

      way.classList.add('pacmanpostion')

      }
      if (a <= theways.length) {
    
        i++
        
      
      way.innerHTML = theways[a]  +', ' +(a)
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
    // console.log(event.key)
 
 
     if (event.key === 'ArrowRight') {
 
 
     if (pacmanpostion === cell.length - 1 ) {
 
       return 
 
     }
     cells[pacmanpostion].classList.remove('pacmanpostion')
     pacmanpostion += 1
     cells[pacmanpostion].classList.add('pacmanpostion')
 
 
     
 
       //console.log(pacmanpostion)
       //console.log(ways)
       //ways[pacmanpostion].classList.remove('pacmanpostion')
      // console.log(pacmanpostion + 'the position')
       //pacmanpostion += 1 
       //ways[pacmanpostion].classList.add('pacmanpostion')
      // console.log(theways[pacmanpostion]  + 'afterrrr')
       //const tempo2 = parseInt(ways[pacmanpostion].innerText)
     
      }
      else if (event.key === 'ArrowLeft') {
 
 
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



   //for (let i = 0; i < wall.length; i++) {
        //console.log(i)
       // if (pacmanpostion === wall[i]) {




             
     // for (let i = 0; i < wall.length; i++) {
     //   if (pacmanpostion === wall[i]) {
     //     cells[pacmanpostion].classList.add('pacmanpostion')
    //
  }
  // }

 

 //else if (event.key === 'w') 
 //{

 //if (champi === cells.length - 1 ) 
 //{
 //        return
 //}

 // champi +=1
 //cells[champi].classList.add('pacmanpostion')

 //console.log(pacmanpostion)
 //cells[pacmanpostion].classList.remove('pacmanpostion')
 //pacmanpostion += 1 

 //for(let i = 0; i < wall.length; i ++)
 //{   
 //console.log(i)
 //if (pacmanpostion === wall[i]) { 
 //cells[pacmanpostion].classList.add('pacmanpostion')
 //}


 //cells[champi].classList.remove('champi')
 //champi += 1 


 //}