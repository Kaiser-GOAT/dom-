let div1 = dom.create("<div>1</div>")
console.log(div1)
const div2 = dom.find('#test>.red')[0]
console.log(div2)
dom.style(xxx,'color','red')
const divList = dom.find('.red')
dom.each(divList, ()=> console.log())
console.log(divList)
