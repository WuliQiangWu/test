function Person(){
    this.think=function(callback){
        setTimeout(function(){
            console.log('thinkimg~~!');
            callback()
        },5000)
    }

    this.answer=function(){
        console.log('I am answering other question');
    }
}
var person = new Person();
person.think(function(){
    console.log('think 5 second, get thr right answer')
});
person.answer()