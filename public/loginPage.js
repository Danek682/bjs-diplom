'use strict'
function loginFormCallback(data){
   ApiConnector.login(data,(response) => {
      console.log(response)
      if(response.success){
         location.reload();
      } else {
         setLoginErrorMessage(message)
      }
   })
}
function registerFormCallback(data){
   ApiConnector.login(data,(response) => {
      console.log(response)
      if(response.success){
         location.reload();
      } else {
         setRegisterErrorMessage(message)
      }
   })
}