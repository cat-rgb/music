export default {
    acShow({state,commit},status){
        if(status==3){
            state.loginStatus=3
        }
        if(state.loginStatus==3){
            state.show =false
        }else{
            commit("show")
        }
    }
}