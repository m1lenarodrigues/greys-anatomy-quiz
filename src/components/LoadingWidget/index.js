import React from 'react';
import Widget from '../Widget';
import ReactLoading from "react-loading";

export default function LoadingWidget() {
    return (
      <Widget>
        <Widget.Content>
          <ReactLoading color="#fff" />
        </Widget.Content>
      </Widget>
    );
}