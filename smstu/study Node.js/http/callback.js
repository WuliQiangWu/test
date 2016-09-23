function learn(something){
	console.log(something)
}
function we(callback,something){
	something+='is coll'
	callback(something)
}
we(learn,'node.js')

we(function(){
	
})
