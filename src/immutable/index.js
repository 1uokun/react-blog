// import update from 'react-addons-update';
import update from 'immutability-helper';

const myData = {
    x:{
        y:{age:22},
        name:1,
    }
};

const newData = update(myData,{
    x:{$set:23}
});
let aa = myData;
aa.x.name = 2;

console.log(myData, newData)
