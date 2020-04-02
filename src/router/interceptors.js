
export const  routerBeforeEach = (to,from,next) =>{
    next();
}


export  const  routerAfterEach = (to,from) =>{
    console.log(to);
    console.log(from);
}
