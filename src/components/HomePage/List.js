import { TiTickOutline } from "react-icons/ti"
import classes from './List.module.css'
const List = (props)=>{
    return (
        <div className={classes.list}>
            <TiTickOutline/>
            <p>{props.paragraph}</p>
        </div>
    )
}

export default List