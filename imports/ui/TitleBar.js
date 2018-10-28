import React from 'react';
import PropTypes from 'prop-types';

export default class TitleBar extends React.Component {
  render() {
    return (
      <div className="title-bar">
        <div className="wrapper">
          <h1>{this.props.title}</h1>
          {this.renderSubTitle()}
        </div>
      </div>
    );
  }

  renderSubTitle() {
    const subTitle = this.props.subTitle;
    return subTitle ? (
      <h2 className="title-bar__subtitle">{subTitle}</h2>
    ) : (
      undefined
    );
  }
}

TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string
};

TitleBar.defaultProps = {
  // title: 'Default title'
};
