import PropTypes from 'prop-types';

const BlogOne = ({blogone}) => {
    console.log(blogOne);
    return (
        <div>
            <h3>hello Blog one</h3>
        </div>
    );
};

BlogOne.proptypes = {
    blogOne: PropTypes.object.isRequired
}

export default BlogOne;