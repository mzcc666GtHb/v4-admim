import {LoadingBar} from 'view-design';
import util from  '../utils';

export const  routerBeforeEach = (to,from,next) =>{
    LoadingBar.start();
    try {
        to.meta.title ? (document.title = to.meta.title) : (document.title = '');
        to.meta.bodyBackgroundImg ? util.setBodyBackgroundImg(to.meta.bodyBackgroundImg) : util.setBodyBackgroundImg();
    } catch (e) {
        console.log(e);
    }
    next();
}


export  const  routerAfterEach = () =>{
    LoadingBar.finish();
}
