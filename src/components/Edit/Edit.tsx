import React from 'react';
import { connect } from 'react-redux';
import { select_area } from '../../actions';

type Props = {
  show: boolean;
};

class Edit extends React.Component<Props> {
    render() {
      return (
        <div style = {{display : `${this.props.show ? 'block' : 'none'}`}}>
          Edit
        </div>
      );
    }
}

const mapStateToProps = (state: any) => {
  console.log(state);
  return state;
};

export default connect(
  mapStateToProps,
  { select_area }
)(Edit);

