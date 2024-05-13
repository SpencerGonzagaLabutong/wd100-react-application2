const GridCard = (props) => {
    return ( 
        <>
        <div className='col-md-4'>
            <div className='card'>
                <img src={props.img} className='card-img-top' alt=""></img>
                <div className='card-body'> 
                    <h5 className='class-title'>{props.title}</h5>
                    <p className='card-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                    <a href="#" className='btn btn-dark'>learn more</a>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default GridCard;