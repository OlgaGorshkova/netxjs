import LayoutP from '../components/myLayoutProp';

const contentAbout = <p>content of our about page props</p>;

export default function AboutP() {
    return (
        <LayoutP content={contentAbout} />
    );
};