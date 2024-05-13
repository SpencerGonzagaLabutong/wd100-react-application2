import image1 from './../image/1.png';
import image2 from './../image/2.png';
import image3 from './../image/3.png';
import image4 from './../image/4 (1).png';
import image5 from './../image/5.png';

import GridCard from "./gridCard";

const BodyContent = () => {
    return ( 
        <>
            <div className='container-fluid bg-dark py-5'>
                <div className='container'>
                    <h2 className='text-warning'>Top 5 anime of the week</h2>
                    <div className='row g-5'>
                        <GridCard img={image1} title='anime 1'></GridCard>
                        <GridCard img={image2} title='anime 2'></GridCard>
                        <GridCard img={image3} title='anime 3'></GridCard>
                        <GridCard img={image4} title='anime 4'></GridCard>
                        <GridCard img={image5} title='anime 5'></GridCard>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default BodyContent;