export const  login = (params)=> {
    return new Promise(function (resolve,reject){
        functions.NetUitl('POST',constants.api.USER_signup,params)
            .then(response => JSON.parse(response))
            .then(json => {//如果验证成功
                // 向Store存储用户信息 并 进行本地存储
                navigation.dispatch({type:'User/Login',payload:json});
                storage.save({
                    key: 'user',
                    data: {
                        user:json
                    },
                    expires: null,   //永久
                })
                resolve('ok')
            },reason => {
                reject('fail')
            }).catch(err=>{
            reject('fail')
        })
    })
}
export const  logout = function() { //注销
    navigation.dispatch({type:'User/Logout'})
    storage.remove({//清除本地存储
        key: 'user',
    });
}
export const update_user = (params,user)=> {
    return new Promise(function (resolve,reject){
        functions.NetUitl('PUT',constants.api.USER_update,params,'Bearer ' + user.token)
            .then(response => JSON.parse(response))
            .then(json => {//如果验证成功
                console.log(json)
                let data = json;
                data.token = user.token;
                navigation.dispatch({type:'User/Login',payload:data})
                //storage存
                storage.save({
                    key: 'user',
                    data: {
                        user:data
                    },
                    expires: null,   //永久
                });
                resolve('ok')
            },reason => {
                reject(reason)
            }).catch(err=> {
            reject('fail')
        })
    })
}

export const update_userWidthAvatar = (params,user)=> {
    return new Promise(function (resolve,reject){
        // 1.构建上传所需数据
        const suffix = '.jpg';
        const fileName = `${user._id}_`+functions.uuid().toUpperCase().replace(/-/g, '')+suffix; //文件名（非完整）
        const path = ios?params.avatar:params.avatar.substr(7,params.avatar.length); //路径
        const newParams = {
            username:params.username,
            avatar:'http://st-around-p.oss-cn-beijing.aliyuncs.com/avatar/'+fileName
        }
        functions.AliOss(path,fileName,'avatar')
            .then(response=>{
                //在上传alioss成功后，上传本地服务器
                functions.NetUitl('PUT',constants.api.USER_update,newParams,'Bearer ' + user.token)
                    .then(response => JSON.parse(response))
                    .then(json => {//如果验证成功
                        if(json.username){
                            let data = json;
                            data.token = user.token;
                            data.avatar = newParams.avatar;
                            navigation.dispatch({type:'User/Login',payload:data})
                            storage.save({
                                key: 'user',
                                data: {
                                    user:data
                                },
                                expires: null,   //永久
                            })
                            resolve('ok')
                        }
                    },reason => {
                        reject('fail')
                    }).catch(err=>{
                    reject('fail')
                })
            },reason => {
                alert('头像上传失败')
            })
    })
}
