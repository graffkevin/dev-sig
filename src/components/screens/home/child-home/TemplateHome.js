import '../style.css'
import { Link } from 'react-router-dom';

function TemplateHome({id, image, path }) {

    return (
        <div className='jobContainer'>
           <Link key = {path} to = {path} 
                className="active" 
                exact="true">
                <img src={image} alt={id} className="img-thumbnail" />
            </Link>           
        </div>
    )
};

export default TemplateHome;
