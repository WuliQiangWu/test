var stram = require('stream')
var util = require('util')

function ReadStream(){
	stream.Readable.call(this)
}
util.inherits(readStream,stream.Readable)

ReadStream.prototype._read=function(){
	readStream.push('I')
	readStream.push('Love')
	readStream.push('Baby\n')
	readStream.push(null)
}

function WriteStream(){
	stream.writable.call(this)
	this._eached = new Buffer('')
}
util.inherits(writStream,stream.Writable)

WriteStream.prototype._write = function(chunk,encode,cb){
	console.log(chunk.toString())
	cb()
}

function TransformStream(){
	stream.Transform.call(this)
}
util.inherits(TransformStream,stream.Writable)

TransformStream.prototype._transform = function(chunk,encode,cb){
	this.push(chunk)
	cb()
}
TransformStream.prototype._flush = function(chunk,encode,cb){
	this.push('Oh Yeah')
	cb()
}
var rs = new ReadStream()
var ws = new WriteStream()
var ts = new TransformStream()

rs.pipe(ts).pipe(ws)
