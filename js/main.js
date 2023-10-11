let stocks={
    friuts:["grapes","banana","apple","strowbery"],
    liquid:["water","ice"],
    holder:["cone","cup","stick"],
    toppings:["chocolate","nuts"]
}
let isShopOpen=true;
let time=new Promise(function(resolve,reject){
    if(isShopOpen){
        resolve();
    }
    else{
        reject("Shop is closed");
    }
})
time.then(()=>{
    setTimeout(()=>{
        document.write(`${stocks.friuts[0]} was selected <br><br>`)
    },1000)
})
.then(()=>{
    setTimeout(()=>{
        document.write(`Production started<br><br>`);
    },2000)
})
.then(()=>{
    setTimeout(()=>{
        document.write(`fruits has been chopped<br><br>`);
    },3000)
})
.then(()=>{
    setTimeout(()=>{
        document.write(`${stocks.liquid[1]} added<br><br>`);
    },4000)
})
.then(()=>{
    setTimeout(()=>{
        document.write(`Machine Started<br><br>`);
    },5000)
})
.then(()=>{
    setTimeout(()=>{
        document.write(`Icecream placed on ${stocks.holder[0]}<br><br>`);
    },6000)
})
.then(()=>{
    setTimeout(()=>{
        document.write(`${stocks.toppings[0]} as Toppings<br><br>`);
    },7000)
})
.then(()=>{
    setTimeout(()=>{
        document.write(`Serve ice Cream`);
    },8000)
})
.catch((msg)=>{
    document.write(`${msg}<br><br>`)
    document.write(`Customer left`)
})