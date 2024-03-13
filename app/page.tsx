import AddQuestionForm from './addQuestions/page';
import Login from './login/page';
import ResetPassword from './resetPassword/page';
import Reset from './resetPassword/reset/page';
import Profile from './profile/page';
import Landing from './Landing/page';

export default function Home() {
  return (
    <div className='w-full'>
      <Landing/>
    </div>
  );
}
