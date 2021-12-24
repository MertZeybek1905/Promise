 var deger= true;
var answer = new Promise(function(resolve,reject){
   if(deger){
       resolve("başarılı");
   }
   else{
       reject("başarısız");
   }
})
answer
.then(function(data){
    console.log(data);
}).catch(function(err){
    console.log(err);
})
//*********************************** */
var num=1;
var num2=2;

var sonuc= new Promise(function(resolve,reject){

    if(num==num2){
        resolve("eşit");
    }
    else{
        reject("eşit degil");
    }
})
sonuc
.then(function(data){
    console.log(data);
}).catch(function(err){
    console.log(err);
})
//******************* */
var products = [
    {id:1,name:'Samsung S8',price:3000},
    {id:2,name:'Samsung S7',price:2000},
    {id:3,name:'Samsung S6',price:1000}
]
function addproduct(prd){
    products.push(prd)
    return new Promise(function(resolve,reject){
         if(true){
             resolve(prd);
         }
         else{
             reject("başarısız");
         }
    });
       
}
addproduct({id:1,name:"iphone",price:1500})
.then(function(data){
    console.log(data);
}).catch(function(err){
    console.log(err);
})
//********************************** */
var deger = new Promise(function(resolve,reject){
    resolve(5)
}).then(function(data){
   return data*data;
}).then(function(data){
   console.log(data);
}).catch(function(err){
    console.log(err);
})
//********************************************** */
const ismomhappy= true;
const willgetphone = new Promise(function(resolve,reject){
       const phone={
           name:"iphone",
           color:"black",
           price:5600
       }
       if(ismomhappy){
           resolve(phone);
       }
       else{
           reject("ana kızgın");
       }

})
var show = function(phone){
    var msg= "Beni telefonum " + phone.name;
    return new Promise(function(resolve,reject){
        if(true){
            resolve(msg);
        }
        else{
            reject("olmadı");
        }
    })
}

willgetphone
.then(show)
.then(function(data){
    console.log(data);
}).catch(function(err){
    console.log(err);
})
//************************* */
