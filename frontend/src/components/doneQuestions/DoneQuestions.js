import { useSelector } from 'react-redux';
import Question from '../question/Question';

const DoneQuestions = ({result}) => {

    const {user} = useSelector(state => state.auth);
  return <>
    {result.map(question => (
        user.questions.includes(question._id) ? <Question key={question._id} question={question}/> : null
    ))}
  </>;
};

export default DoneQuestions;
