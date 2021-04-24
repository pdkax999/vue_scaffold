(function (w) {

  const  PubSub = {}

  PubSub.callbacks={
  
  
  }
  let  i = 0 
  
  PubSub.subscribe = function (msg,callback) {
  
    let token = 'uid_'+i++
    
    let  container =PubSub['callbacks']
    
    if(!container[msg]){

      container[msg] = {
    
      } 

    }
    
    container[msg][token] = callback
  
    
    
   return  token  
  
  }
  
  PubSub.publish = function (msg,data) {
    
    let  container =PubSub['callbacks']

    if(container[msg]){

      Object.values(PubSub.callbacks[msg]).forEach((call)=>{
      
       
        call(msg,data)
    
      })


    }
    

  
  }
  PubSub.publishSync = function (msg,data) {

    let  container =PubSub['callbacks']

    if(container[msg]){

      Object.values(PubSub.callbacks[msg]).forEach((call)=>{
      
  
        setTimeout(() => {
          
          call(msg,data)
          
        });
        
    
      })

    }
  
  
  
  
  }
  PubSub.unsubscribe = function (flay) {
  
     if(flay.substring(0,4) === 'uid_'){
      
  
      Object.values(PubSub.callbacks).forEach((obj)=>{
        
       delete obj[flay]
         
  
      })
      
  
  
  
     }else{
  
      delete PubSub.callbacks[flay]
  
  
     }
  
     console.log(PubSub.callbacks);
     
     
  
  }

  w.PubSub = PubSub
})(window)