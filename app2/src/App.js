import React from 'react';
import DatePicker from 'react-datepicker';
import Button from '@bit/nsebhastian.design-system.button';
import 'react-datepicker/dist/react-datepicker.css';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {startDate: '', endDate: ''};
  }

  render() {
    const {startDate, endDate} = this.state;
    return (
      <div className='container'>
        <div className='column'>
          <div className='column-header'>
            <h2>Book the room</h2>
          </div>
          <div className='column-content'>
            <form>
              <div className='form-group'>
                <label className='form-label'>Check-in date: </label>
                <DatePicker
                  selected={startDate}
                  onChange={date => this.setState({startDate: date})}
                />
              </div>
              <div className='form-group'>
                <label className='form-label'>Check-out date: </label>
                <DatePicker
                  selected={endDate}
                  onChange={date => this.setState({endDate: date})}
                />
              </div>
            </form>
          </div>
          <Button
            title='Book now'
            onClick={() => alert('Book request received. Thank you!')}
          />
        </div>
      </div>
    );
  }
}
