//导入axios配置
import service from "@/utils/axios"

//登录
export function loginsystem(username,password,admin){
    const obj1 = {username,password,admin}
    return service.post('/queryuser',JSON.stringify(obj1),{
        headers:{'Content-Type':'application/json'}
    })
}