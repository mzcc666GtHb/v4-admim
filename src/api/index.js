const rcfn = require.context('./modules', true, /\.js$/);
const modulesKeys = rcfn.keys();
let apis = [];
modulesKeys.map(item =>{
    const fileName=item.replace(/.*\//,'');
    const namespace = fileName.substring(0,fileName.lastIndexOf('.'));
    const modulesValues =  rcfn(item).default || [];
    modulesValues.forEach(el=>{
        el.name = `${namespace}/${el.name}`;
    });
    apis = [...apis,...modulesValues];
});

export default  apis;
