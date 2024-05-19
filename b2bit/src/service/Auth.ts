import Api from "./Api"
import './BaseService'

export async function signIn(email: string, password: string) {
    if(!email || !password) return null
    try{
        const resultado = await Api.post('/auth/login/', {
            email, password
        })
        console.log(resultado.data)
        return resultado.data
    }catch(e){
        
        return null

    }
}

export async function getUserData() {
    try{
        const resultado = await Api.get('/auth/profile/')
        return resultado.data
    }catch(e){
        return null
    }
}