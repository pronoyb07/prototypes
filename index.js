// function clicked(){
//     console.losg('The button ws clicked')
// }

window.onload = function(){ 
    console.log('The doc is loaded')
}

firstContainer.addEventListener('click',function(){
    document.querySelectorAll('.container')[1].innerHTML='<b>We have clicked</b>'
    console.log('click hua')
})

// firstContainer.addEventListener('mouseover',function(){
//     console.log('hover hua')
// })

// firstContainer.addEventListener('mouseout',function(){
//     console.log('mouse out hua')
// })

// firstContainer.addEventListener('mouseup',function(){
//     console.log('mouse up')
// })

// firstContainer.addEventListener('mousedown',function(){
//     console.log('mouse down')
// })