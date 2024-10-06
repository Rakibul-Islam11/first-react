
import { PropTypes } from 'prop-types';

const Bookmarks = ({ bkmarclick}) => {
    
    return (
        <div className="md:w-1/3 mx-auto">
            <h1>Bookmark Blog { bkmarclick.length }</h1>
            {
                bkmarclick.map((singleTitle, indx) =><h1 className='bg-slate-200 p-4 m-4 rounded-xl text-3xl' key={indx}>{ singleTitle.title }</h1> )
            }
            
        </div>
    );
};
Bookmarks.propTypes = {
    bkmarclick:PropTypes.array
}
export default Bookmarks;