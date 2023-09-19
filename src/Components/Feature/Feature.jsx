import PropTypes from 'prop-types'
import { BsFillCheckCircleFill } from 'react-icons/bs';
const Feature = ({feature}) => {
    return (
        <div>
            <p className='flex items-center'>
                <BsFillCheckCircleFill className='text-green-300 mr-2'></BsFillCheckCircleFill>{feature}</p>
        </div>
    );
};

Feature.propType ={
    feature: PropTypes.string
}
export default Feature;