import { render, screen, fireEvent } from '@testing-library/react';

import TextTransformer from './TextTransformer';

describe('TextTransformer', () => {
  test('should transform inserted text', () => {
    render(<TextTransformer />);

    expect(screen.queryByText('Transformed text:')).not.toBeInTheDocument();

    const input = screen.getByLabelText('Insert text');
    fireEvent.change(input, {target: {value: 'bayer'}});

    expect(screen.queryByText('Transformed text:')).toBeInTheDocument();
    expect(screen.queryByText('__BAYER__')).toBeInTheDocument();
  });

  test('should not override inserted text when prop has been set later', () => {
    render(<TextTransformer />);

    expect(screen.queryByText('Transformed text:')).not.toBeInTheDocument();

    const input = screen.getByLabelText('Insert text');
    fireEvent.change(input, {target: {value: 'bayer'}});

    expect(screen.queryByText('Transformed text:')).toBeInTheDocument();
    expect(screen.queryByText('__BAYER__')).toBeInTheDocument();

    render(<TextTransformer value="newbayer" />);

    expect(screen.queryByText('__NEWBAYER__')).toBeInTheDocument();
  });

  test('should transform text from props when prop has been set', () => {
    render(<TextTransformer value="bayerprop" />);

    expect(screen.queryByText('Transformed text:')).toBeInTheDocument();
    expect(screen.queryByText('__BAYERPROP__')).toBeInTheDocument();
  });

  test('should not show transformed text when state is empty', () => {
    render(<TextTransformer />);

    expect(screen.queryByText('Transformed text:')).not.toBeInTheDocument();
  })
});
