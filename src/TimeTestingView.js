import React, {useState, useEffect, useRef} from 'react';


const generateRandomTime = () => {
  return {
    hour: Math.floor(Math.random() * 12) + 1,
    minute: Math.floor(Math.random() * 59) + 1,
  };
};

const TimeTestingView = ({ rate }) => {
  const hourInputRef = useRef(null);
  const okayButtonRef = useRef(null);
  const [time, setTime] = useState(generateRandomTime());
  const [hourValue, setHourValue] = useState('');
  const [minuteValue, setMinuteValue] = useState('');
  const [answersCorrect, setAnswersCorrect] = useState(0);
  const [answersWrong, setAnswersWrong] = useState(0);
  const [showCorrect, setShowCorrect] = useState(false);
  const [prevWrongAndCorrectAnswer, setPrevWrongAndCorrectAnswer] = useState(null);

  const speak = () => {
    const msg = new SpeechSynthesisUtterance();
    msg.voiceURI = 'native';
    msg.volume = 1; // 0 to 1
    msg.rate = rate || 0.8; // 0.1 to 10
    msg.pitch = 1; //0 to 2
    msg.lang = 'ko-KR';
    msg.text = `${time.hour}시 ${time.minute}분`;
    console.log(msg.text);
    speechSynthesis.speak(msg);
  };

  const goToNextQuestion = () => {
    setPrevWrongAndCorrectAnswer(null);
    setTime(generateRandomTime());
    hourInputRef.current.focus();
  };

  const handleSubmit = () => {
    if (!hourValue || !minuteValue) {
      return;
    }

    if (Number(hourValue) === time.hour && Number(minuteValue) === time.minute) {
      setAnswersCorrect(answersCorrect + 1);
      setShowCorrect(true);
      goToNextQuestion();
    } else {
      setAnswersWrong(answersWrong + 1);
      setPrevWrongAndCorrectAnswer({
        wrongAnswer: {
          hour: Number(hourValue),
          minute: Number(minuteValue),
        },
        correctAnswer: {
          hour: time.hour,
          minute: time.minute,
        },
      });
    }
    setHourValue('');
    setMinuteValue('');
  };

  const handleKeyDown = (e) => {
    setShowCorrect(false);
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  useEffect(() => {
    speak();
  }, [time]);
  useEffect(() => {
    if (prevWrongAndCorrectAnswer) {
      okayButtonRef.current.focus();
    }
  }, [prevWrongAndCorrectAnswer]);
  return (
    <div>
      <form>
        <div className="form-row">
          <div className="col-auto my-1">
            <div className="input-group">
              <input
                className="form-control"
                value={hourValue}
                onChange={(e) => setHourValue(e.target.value)}
                type="number"
                onKeyDown={handleKeyDown}
                ref={hourInputRef}
              />
              <div className="input-group-append">
                <span className="input-group-text">
                  시
                </span>
              </div>
            </div>
          </div>
          <div className="col-auto my-1">
            <div className="input-group">
              <input
                className="form-control"
                value={minuteValue}
                onChange={(e) => setMinuteValue(e.target.value)}
                type="number"
                onKeyDown={handleKeyDown}
              />
              <div className="input-group-append">
                <span className="input-group-text">
                  분
                </span>
              </div>
            </div>
          </div>
          <div className="col-auto my-1">
            <button
              onClick={handleSubmit}
              type="button"
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
          <div className="col-auto my-1">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                speak();
              }}
            >
              Repeat audio
            </button>
          </div>
        </div>


      </form>

      {prevWrongAndCorrectAnswer && <div>
        Wrong!
        <div>
          You answered with <span style={{color: 'red'}}>{prevWrongAndCorrectAnswer.wrongAnswer.hour}시 {prevWrongAndCorrectAnswer.wrongAnswer.minute.toString().padStart(2, '0')}분</span>
        </div>
        <div>
          The correct answer was <span style={{color: 'green'}}>{prevWrongAndCorrectAnswer.correctAnswer.hour}시 {prevWrongAndCorrectAnswer.correctAnswer.minute.toString().padStart(2, '0')}분</span>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          ref={okayButtonRef}
          onClick={() => {
            goToNextQuestion();
          }}>

          Okay, next
        </button>
      </div>}

      {showCorrect && <div>
        Correct!
      </div>}

      <div style={{marginTop: 100}}>
        Answers correct: {answersCorrect}
      </div>
      <div>
        Answers wrong: {answersWrong}
      </div>
    </div>
  );
};

export default TimeTestingView;
