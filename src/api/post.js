//导入axios配置
import service from "@/utils/axios"

//登录
export function loginsystem(username,password,admin){
    const obj1 = {username,password,admin}
    return service.post('/queryuser',JSON.stringify(obj1),{
        headers:{'Content-Type':'application/json'}
    })
}

//查询申请情报
export function queryapplierinfo(){
    return service.post('/queryapplierinfo')
}

//查询通知
export function querynoticeinfo(){
    return service.post('/querynoticeinfo')
}
//保存申请
export function addapplication(obj){
    return service.post('/addapplication',JSON.stringify(obj),{
        headers:{'Content-Type':'application/json'}
    })
}
//保存计划
export function addimplementationplan(obj){
    return service.post('/addimplementationplan',JSON.stringify(obj),{
        headers:{'Content-Type':'application/json'}
    })
}
export function addinvestmentplan(obj){
    return service.post('/addinvestmentplan',JSON.stringify(obj),{
        headers:{'Content-Type':'application/json'}
    })
}