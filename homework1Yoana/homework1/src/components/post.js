import React from 'react';
import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export const Post = (props) => (
  <Card>
    <CardHeader
      title={props.name}
      avatar={prop.image}
    >
      <Toggle
        toggled={props.active}
        labelPosition="right"
        label="Status"
      />
    </CardHeader>
    <CardTitle title={props.author} subtitle={props.date} />
    <CardText>
      {props.text}
    </CardText>
    <CardActions>
      <FlatButton label="Action1" />
      <FlatButton label="Action2" />
    </CardActions>
  </Card>
);
