import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between container mx-auto border-b-2 p-4 '>
            <h3 className='text-3xl font-bold' >Hello Knowledge Cafe</h3>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;