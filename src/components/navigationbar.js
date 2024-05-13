const NavigationBar = (props) => {
    return ( 
    <>
        <nav className='bg-warning container-fluid p-2'>
            <h3>My Website List</h3>
        </nav>
        <img src={props.img} alt=""/>
    </>
     );
}
 
export default NavigationBar;