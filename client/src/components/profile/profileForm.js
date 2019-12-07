import React from 'react';
import ReactDOM from 'react-dom';
import API from '../../utils/API'

class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      userName: "",
    };
  }
  componentDidMount() {
    const userName = this.props.userName;
    this.setState({ userName: userName })

  }



  render() {
    return (
      <form >
        <label>
          <textarea value={this.props.notesValue} onChange={this.props.onChange} name="notesValue" placeholder="Add Notes:" className='form-control' />
        </label>
        <br />
        <input type="submit" onClick={this.props.onClick} value="Add" className="btn btn-primary" />
      </form>
    );
  }
}
ReactDOM.render(<EssayForm />, document.getElementById('root'));

export default EssayForm;