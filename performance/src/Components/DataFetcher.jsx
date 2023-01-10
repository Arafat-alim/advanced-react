import React, { Component } from "react";

class DataFetcher extends Component {
  state = {
    loading: false,
    data: null,
    error: null,
  };

  //! Component Did Mount to fetch the url
  componentDidMount() {
    this.setState({ loading: true });
    fetch(this.props.url)
      .then((res) => res.json())
      .then((data) => this.setState({ data, loading: false }))
      .catch((err) => this.setState({ error: err }));
  }
  render() {
    const { data, loading, error } = this.state;
    return <div>{this.props.children({ data, loading, error })}</div>;
  }
}

export default DataFetcher;
