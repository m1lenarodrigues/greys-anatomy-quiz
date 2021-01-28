import React from 'react';
import Widget from '../Widget';
import db from '../../../db.json';

export default function ResultWidget() {
    return (
      <Widget>
        <Widget.Header> 
          Parabéns!!!
          </Widget.Header>
        <Widget.Content>
          ... Você chegou ao fim e acertou {db.questions.length} perguntas! 
        </Widget.Content>
      </Widget>
    );
}