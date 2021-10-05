import React from 'react';

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


export default Edit;
