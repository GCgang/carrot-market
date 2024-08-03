import FormButton from '@/components/FormButton';
import FormInput from '@/components/FormInput';
import SocialLogin from '@/components/SocialLogin';

export default function Login() {
  return (
    <div>
      <div>
        <h1>안녕하세요</h1>
        <h2>Log in with email and password</h2>
      </div>
      <form>
        <FormInput type='email' placeholder='Email' required errors={[]} />
        <FormInput
          type='password'
          placeholder='Password'
          required
          errors={[]}
        />
        <FormButton loading={false} text='Log in' />
      </form>
      <SocialLogin />
    </div>
  );
}
