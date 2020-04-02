import {xhr} from '../../xhr';
xhr('book/book1',{
    start:3,
    count:30
}).then(res=>{
    console.log('非业务代码',res);
}).catch(err=>{
    console.log(err);
})

export  default  {
    email() {

    },
    tel() {

    },
    idcard() {

    }
}
