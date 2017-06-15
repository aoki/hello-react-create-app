import React, {Component} from 'react';

class PullRequests extends Component {
  componentDidMount() {
    console.log('PR Component DidMount');
  }

  render() {
    const prs = this.props.prs.map( (pr, i) => {
      return <li key={i}>pr</li>
    });

    return (
      <ul>{prs}</ul>
    );
  }
}

export default PullRequests;
