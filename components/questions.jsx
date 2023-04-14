import React from 'react';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import 'survey-core/defaultV2.min.css';

export default function () {
  const json = {
    title: 'Health and Safety',
    showProgressBar: 'bottom',
    showTimerPanel: 'top',
    maxTimeToFinishPage: 10,
    maxTimeToFinish: 25,
    firstPageIsStarted: true,
    startSurveyText: 'Start Quiz',
    pages: [
      {
        elements: [
          {
            type: 'html',
            html: 'You are about to start a quiz made by Clayton, destroyer of worlds! <br>You will have 10 seconds for every question and 25 seconds to end the quiz.<br>Enter your name below and click <b>Start Quiz</b> to begin.',
          },
          {
            type: 'text',
            name: 'username',
            titleLocation: 'hidden',
            isRequired: true,
            maxLength: 25,
          },
        ],
      },
      {
        elements: [
          {
            type: 'radiogroup',
            name: 'backpain',
            title:
              'Back injuries are the leading cause of work-related disabilities for people under the age of?',
            choices: ['45', '50', '55', 'none of the above'],
            correctAnswer: '45',
          },
        ],
      },
      {
        elements: [
          {
            type: 'radiogroup',
            name: 'leadingcause',
            title: 'Which of the following causes back injuries?',
            choicesOrder: 'random',
            choices: [
              'Lifting objects incorrectly',
              'Being physically unfit',
              'Poor posture',
              'All of these are equally the cause',
            ],
            correctAnswer: 'All of these are equally the cause',
          },
        ],
      },
      {
        elements: [
          {
            type: 'radiogroup',
            name: 'magnacarta',
            title: 'What is Magna Carta?',
            choicesOrder: 'random',
            choices: [
              'The foundation of the British parliamentary system',
              'The Great Seal of the monarchs of England',
              'The French Declaration of the Rights of Man',
              'The charter signed by the Pilgrims on the Mayflower',
            ],
            correctAnswer: 'The foundation of the British parliamentary system',
          },
        ],
      },
    ],
    completedHtml:
      '<h4>You got <b>{correctAnswers}</b> out of <b>{questionCount}</b> correct answers.</h4>',
    completedHtmlOnCondition: [
      {
        expression: '{correctAnswers} == 0',
        html: '<h4>Unfortunately, none of your answers is correct. Please try again.</h4>',
      },
      {
        expression: '{correctAnswers} == {questionCount}',
        html: '<h4>Congratulations! You answered all the questions correctly!</h4>',
      },
    ],
  };
  const survey = new Model(json);
  survey.onComplete.add((sender, options) => {
    console.log(JSON.stringify(sender.data, null, 3));
  });
  return <Survey model={survey} />;
}
