import {LoadingBar} from 'view-design'
export const  routerBeforeEach = (to,from,next) =>{
    LoadingBar.start();
    to.meta.title && (document.title = to.meta.title);
    next();
}


export  const  routerAfterEach = () =>{
    LoadingBar.finish();
}
