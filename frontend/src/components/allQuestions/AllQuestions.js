import Question from "../question/Question";

const AllQuestions = ({result}) => {
  return <>
                {result.map(question => (
                    <Question key={question._id} question={question}/>
                ))}
  </>;
};

export default AllQuestions;
