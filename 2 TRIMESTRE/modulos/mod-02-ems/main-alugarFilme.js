// Módulo ESM é a vesão
// moderna e recomendada
// utiliza import/export

import {alugarFilme,devolverFilme} from './alugar-filme.js'

console.log(alugarFilme('jumanji','R$65,12'))
console.log(alugarFilme('enrolados','R$45,20'))
console.log(alugarFilme('dora','R$58,90'))

console.log(devolverFilme('jumanji'))
console.log(devolverFilme('enrolados'))
console.log(devolverFilme('dora'))
