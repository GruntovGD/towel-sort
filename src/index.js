
// You should implement your task here.

module.exports = function towelSort (matrix) { 
  return (matrix== undefined) ? []
  : (matrix.length<1) ? []
  : matrix.map((el,ind)=>el=(ind%2==0) ? el : el.reverse()).join(',').split(',').map((val)=>val= +val)  
}
