import profileImg from '../../images/profile.png'


const Header = () => {
    return (
        <div>
            <header className='flex justify-between w-3/5 mx-auto border-b-2 pb-2 align-items-center items-center'>
                <h1 className='text-2xl font-bold'>Knowledge Cafe</h1>
                <img src={profileImg} alt="profile image" />
            </header>
        </div>
    );
};

export default Header;