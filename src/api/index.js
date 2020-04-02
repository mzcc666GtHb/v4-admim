const importAll = require.context('./modules', true, /\.js$/);
const modulesKeys = importAll.keys();
const apis = [];
modulesKeys.map(item =>{
    const fileName=item.replace(/.*\//,'');
    const namespace = fileName.substring(0,fileName.lastIndexOf('.'));
    const modulesValues =  importAll(item).default || [];
    modulesValues.forEach(el=>{
        el.name = `${namespace}/${el.name}`;
    });
    apis.push(...modulesValues);
});

export default  apis;
