import {createSlice} from "@reduxjs/toolkit"

const Product={
    Item:[
        { id: 1, name: 'Chapati', price: 5,baseprice:5, priceType: 'Pcs.', img: "https://nilepost.co.ug/wp-content/uploads/2021/01/Chapati.jpg", quantity: 1, totalAmount: 5 },
        { id: 2, name: 'Daal', price: 50,baseprice:50, priceType: 'Plate.', img: "https://media.chefdehome.com/750/0/0/daal-tadka/yellow-lentil-daal.jpg", quantity: 1, totalAmount: 5 },
        { id: 3, name: 'Paneer', price: 120,baseprice:120, priceType: 'Plate.', img: "https://tse4.mm.bing.net/th?id=OIP.83fobRDCCsIUqEG9HXwu-QHaE8&pid=Api&P=0", quantity: 1, totalAmount: 5 },
        { id: 4, name: 'Curd', price: 30,baseprice:30, priceType: 'Cups.', img: "https://www.healthbenefitstimes.com/glossary/wp-content/uploads/2020/09/Curd.jpg", quantity: 1, totalAmount: 5 },
        { id: 5, name: 'Pickle', price: 20,baseprice:20, priceType: 'Pack.', img: "https://tse4.mm.bing.net/th?id=OIP.ZlG0DDI0qO4YGCTngaqgxgHaN6&pid=Api&P=0", quantity: 1, totalAmount: 5 },
        { id: 6, name: 'Sweet', price: 20, baseprice:20,priceType: 'Pcs.', img: "https://tse3.mm.bing.net/th?id=OIP.kmnMFj7TR9Qw6_RMfiX8VAHaFj&pid=Api&P=0", quantity: 1, totalAmount: 5 },
    ],
    CartItem:[],
    ind:0,
    qnt:0,
    Total:0

}

const productSlice=createSlice({

    name:"productList",
    initialState:Product,
    reducers:{

        add(state,action){
            state.CartItem.push(action.payload)
        },

        remove(state,action){
            let f
             for(let i=0;i<state.CartItem.length;i++){

                if(state.CartItem[i].id===action.payload){
                f=i
                }
             }
            state.CartItem.splice(f,1)
            // state.index=0
        },

        increment(state,action){
           state.ind=action.payload.ind
           state.qnt=action.payload.qnt

           state.CartItem.find((item,index)=>{
            if(item.id===state.ind){
              let  id=index
              state.CartItem=[...state.CartItem.slice(0,id),{...state.CartItem[id],["quantity"]:state.qnt,["price"]:item.baseprice*state.qnt},...state.CartItem.slice(id+1)]

              return true
            }
            else{
                return false
            }
           })
        },

        decrement(state,action){
            state.ind=action.payload.ind
            state.qnt=action.payload.qnt

            state.CartItem.find((item,index)=>{
             if(item.id===state.ind){

               let  id=index
               state.CartItem=[...state.CartItem.slice(0,id),{...state.CartItem[id],["quantity"]:state.qnt,["price"]:item.baseprice*state.qnt},...state.CartItem.slice(id+1)]
                       return true
             }
             else{
                 return false
             }
            })
         }

    }
})
export const {add,remove,increment,decrement}=productSlice.actions
export default productSlice.reducer