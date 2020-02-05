import Link from 'next/link';

const linkStyle = {
    marginRight: 15
};

const Header = () => (
    <div>
        <Link href='/'>
            <a style={linkStyle}>Home</a>
        </Link>
        <Link href='/about'>
            <a style={linkStyle}>About</a>
        </Link>
        <Link href='/newindex'>
            <a style={linkStyle}>HomeHoc</a>
        </Link>
        <Link href='/newabout'>
            <a style={linkStyle}>AboutHoc</a>
        </Link>
        <Link href='/indexP'>
            <a style={linkStyle}>HomeProps</a>
        </Link>
        <Link href='/aboutP'>
            <a style={linkStyle}>AboutProps</a>
        </Link>
    </div>
);

export default Header;
