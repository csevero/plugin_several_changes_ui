import React from "react";

class FlexTipNotification extends React.Component {
  render() {
    const { header, message } = this.props;
    return (
      <div>
        <div style={{ fontWeight: "bold" }}>{header}</div>
        <div>{message}</div>
      </div>
    );
  }
}

export default FlexTipNotification