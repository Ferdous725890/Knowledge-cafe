import { space } from 'postcss/lib/list';
import PropTypes from 'prop-types';

const BlogOne = ({blogone}) => {
    const { title, cover, author_img, author, posted_date, reading_time, hashtags } = blogone;
   
    return (
        <div>
            <img src={cover} alt={`OCVER PICTURE OF THE ${title}`} /> 
            <div className='flex justify-between'>
                <div className='flex'>
                   <img className='w-14' src={author_img} alt="" />
                   <div className='ml-6'>
                    <h3 className='text-2xl '>{author} </h3>
                    <h5> {posted_date} </h5>
                   </div>
                </div>
                <div>
                <span>{reading_time} min red</span>
                </div>
            </div>
            <h3 className='text-4xl'>{title}</h3>
            <p>
                {
                    hashtags.map((has, idx) => <span key={idx}><a href="">#{has}</a></span>)
                }
            </p>
        </div>
    );
};

BlogOne.propTypes = {
    blogone: PropTypes.object.isRequired
};

export default BlogOne;