
import { useEffect, useState } from 'react';
import ShowBlogs from './ShowBlogs';
import { PropTypes } from 'prop-types';



const BlogsResponse = ({handleclickbokmark}) => {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    },[])
    

    return (
        <div className='md:w-2/3'>
            
            {
                blogs.map(getBlog => <ShowBlogs getBlog={getBlog} handleclickbokmark={handleclickbokmark} key={getBlog.id}></ShowBlogs>)
            }
            
        </div>
    );
};
BlogsResponse.propTypes = {
    handleclickbokmark: PropTypes.func
}
export default BlogsResponse;