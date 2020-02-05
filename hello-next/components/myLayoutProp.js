import Header from './Header';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

const LayoutP = props => (
    <div style={layoutStyle}>
        <Header />
        {props.content}
    </div>
);

export default LayoutP;