import { FaRegBookmark } from "react-icons/fa6";
import { PropTypes } from 'prop-types';

const ShowBlogs = ({ getBlog, handleclickbokmark }) => {
    console.log(getBlog);
    
    const {cover, title, author_img, author, hashtags, posted_date, reading_time} = getBlog;
    return (
        <div>
            <img className='w-full my-4' src={cover} alt="cover-img" />
            {/* autor pic name read time and bookmark btn section start */}
            <div className='flex justify-between my-3'>
                <div className='flex'>
                    <img className='w-16' src={author_img} alt="author-img" />
                    <div>
                        <p className='text-3xl font-bold'>{ author }</p>
                        <p>{ posted_date }</p>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-3">
                    <p>{ reading_time } min read</p>
                    <button onClick={() => handleclickbokmark(getBlog)} className="text-2xl"><FaRegBookmark></FaRegBookmark> </button>
                </div>
            </div>
            {/* autor pic name read time and bookmark btn section end */}
            {/* title section start */}
            <div>
                <h1 className="text-3xl">{ title }</h1>
            </div>
            {/* title section end */}
            {/* hashtag section start */}
            {
                hashtags.map((getTag, idx) => <span key={idx}><a href="">#{ getTag }</a></span>)
            }
        </div>
    );
};
ShowBlogs.propTypes = {
    getBlog: PropTypes.object,
    handleclickbokmark:PropTypes.func
}
export default ShowBlogs;