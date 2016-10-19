/**
 * Created by pc on 2016/10/12.
 */
var unit = require('unit');
var Person=require('./moduleexport.js');
function Student(){
    Person.call(this)
}
unit.inherits(Student,Person);
    Student.prototype.study=function(){
        console.log('study at home');
    };
module.exports=Student;