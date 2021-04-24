


(function (w) {

  let eventBus = {}

 
  let callbackContainer = {
    
     
  } 

/* 

{
  'xxx':[]

}

*/
  eventBus.on = function (msg,callback) {
  
    let obj = callbackContainer[msg]

    if(!obj){

      callbackContainer[msg] = []

    }

   callbackContainer[msg].unshift(callback);

  }
  eventBus.emit = function (msg,data) {
    let obj = callbackContainer[msg]

    if(!obj) return 

    obj.forEach( cb=> {

      cb(data)

    });

  }
  eventBus.off = function (flay) {
    
    if(!flay){

      callbackContainer = {}
       
    }else if(typeof flay === 'string'){

      delete callbackContainer[flay]

    } 



  }








  w.eventBus = eventBus 

})(window)