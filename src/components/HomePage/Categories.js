import classes from './DetailsPage.module.css'

const Category =(props)=>{
    return (
        <div className={classes.categories} style={{backgroundImage: `url(${props.bgImg})`}}>
            <p>{props.placeholder}</p>
        </div>
    )
}

export default Category;