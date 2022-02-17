import { render, screen } from '@testing-library/react';
import App from './App';

afterEach(cleanup)
it("renders correctly", () => {
    const tree = shallow(<App />);
    expect(toJson(tree)).toMatchSnapshot();
});


it.skip("renders without crashing", () => {
    shallow(<App />)
});