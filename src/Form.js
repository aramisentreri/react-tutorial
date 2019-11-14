import React from 'react'

class Form extends React.Component {
  constructor(props) {
    super(props)

    this.initialState = {
      name: '',
      job: '',
    }

    this.state = this.initialState
  }

  handleChange = event => {
    const {name, value } = event.target

    this.setState({
      [name]: value,
    })
  }

  submitForm = () => {
    this.props.handleSubmit(this.state) // this adds the character to the characters list in the App's state
    this.setState(this.initialState) // this clears the form after submit
  }

  render() {
    const { name, job } = this.state;

    return (
      <form>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange} />
        <label>Job</label>
        <input
          type="text"
          name="job"
          value={job}
          onChange={this.handleChange} />
        <input type="button" value="Submit" onClick={this.submitForm} />
      </form>
    );
  }
}

export default Form;
