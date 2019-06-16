
import  {connect} from "react-redux"
import {add} from "../store/store"
const Index = ({counter,user,add,rename})=>{
    return (<div>
        <span>count:{counter.count}</span>
        <span>username:{user.username}</span>
        <input value={user.username} onChange={(e)=>rename(e.target.value)}/>
        <button onClick={()=>add(4)}>adds</button>
    </div>)
}
Index.getInitialProps = async ({reduxStore})=>{
    reduxStore.dispatch(add(10))
    return {}
}
export default connect(function mapStateToProps(state){
    return {
        counter:state.counter,
        user:state.user
    }
},function mapDispatchProps(dispatch) {
    return{
        add:(num)=>{dispatch({type:"ADD",num})},
        rename:(name)=>{dispatch({type:"USER",name})}
    }
})(Index)