import { useSelector } from 'react-redux';
import Question from '../question/Question';

const NotDoneQuestions = ({result}) => {

    const {user} = useSelector(state => state.auth);
  return <>
  {result.map(question => (
      user.questions.includes(question._id) ? null : <Question key={question._id} question={question}/>
  ))}
</>;
};

export default NotDoneQuestions;
