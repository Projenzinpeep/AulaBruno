function dados(){

    const ds = [
                 {id:1, login:"zolotareff", senha:"12345", email:"bruno@gmail.com"},
                 {id:2, login:"ringo", senha:"22222", email:"ringo@gmail.com"},
                 {id:3, login:"gates", senha:"55555", email:"gates@gmail.com"}
               ]

const dd = JSON.stringify(ds) //texto

localStorage.setItem("banco", dd)

return ds

}


function removebd(){

    localStorage.removeItem("banco")

}

