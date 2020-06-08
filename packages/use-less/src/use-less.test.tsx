import { fireEvent, render } from '@testing-library/react';
import React, { FC, useState } from 'react';
import useLess from './use-less';

const TestComponent: FC = () => {
  const [count, setCounter] = useState(0);
  useLess();

  return (
    <button onClick={() => setCounter((count) => count + 1)}>
      Click to increase: {count}
    </button>
  );
};

it('will fail every time', () => {
  const { getByText, asFragment } = render(<TestComponent />);
  const firstRender = asFragment();
  expect(firstRender).toMatchSnapshot();

  fireEvent.click(getByText(/Click to increase/));
  const secondRender = asFragment();
  expect(secondRender).toMatchSnapshot();
});
