'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: 0 };
  }

  render() {
    if (this.state.liked) {
      return e(
        'button',
        { onClick: () => this.setState({ liked: 0 }) },
        'Liked');
    } else {
      return e(
        'button',
        { onClick: () => this.setState({ liked: 1 }) },
        'Like');
    }

    // return e(
    //   'button',
    //   { onClick: () => this.setState({ liked: 1 }) },
    //   'Like'
    // );
  }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);