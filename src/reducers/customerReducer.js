export const purchaseProperty =  (
    state={
        purchasePropertyResp:""
    }, 
    action
    ) => {
        switch (action.type) {
          case "PURCHASE_PROPERTY":
            return({
                purchasePropertyResp:action.payload
            })
          case "PURCHASE_PROPERTY_ERR":
          return({
            purchasePropertyResp:action.payload
          })
          case "RESET":
          return({
            purchasePropertyResp:""
          })
          default:
            return state;
        }
  };

  export const getPropertyByCustomer =  (
    state={
        getPropertyByCustomerResp:""
    }, 
    action
    ) => {
        switch (action.type) {
          case "GET_CUST_PROPERTY":
            return({
                getPropertyByCustomerResp:action.payload
            })
          case "GET_CUST_PROPERTY_ERR":
          return({
            getPropertyByCustomerResp:action.payload
          })
          case "RESET":
          return({
            getPropertyByCustomerResp:""
          })
          default:
            return state;
        }
  };

  
  export const checkProperty =  (
    state={
      checkPropertyResp:""
    }, 
    action
    ) => {
        switch (action.type) {
          case "CHECK_PROPERTY":
            return({
              checkPropertyResp:action.payload
            })
          case "CHECK_PROPERTY_ERR":
          return({
            checkPropertyResp:action.payload
          })
          case "RESET":
          return({
            checkPropertyResp:""
          })
          default:
            return state;
        }
  };