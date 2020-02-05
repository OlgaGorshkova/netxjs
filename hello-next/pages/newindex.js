import withLayout from '../components/myLayoutHOC';

const Page1 = () => (
    <p>Content for our Page</p>
);

export default withLayout(Page1);
