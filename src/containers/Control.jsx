import { connect } from 'react-redux'
import Control from '../component/Control'

export default connect(null,
    function(dispatch){
        return {
            onClick:function(mode){
                if(mode==='DELETE_PROCESS'){
                    if (!window.confirm('Really?')){
                        return;
                    }
                }
               dispatch({type:mode});
            }
        }
    })(Control)