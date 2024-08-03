import FormButton from '@/components/FormButton';
import FormInput from '@/components/FormInput';
import SocialLogin from '@/components/SocialLogin';

export default function CreateAccount() {
  return (
    <div>
      <div>
        <h1>안녕하세요</h1>
        <h2>Fill in the form below to join</h2>
      </div>

      <form>
        <FormInput type='text' placeholder='Username' required errors={[]} />
        <FormInput type='email' placeholder='Email' required errors={[]} />
        <FormInput
          type='password'
          placeholder='Password'
          required
          errors={[]}
        />
        <FormInput
          type='password'
          placeholder='Confirm Password'
          required
          errors={[]}
        />
        <FormButton loading={false} text='Create account' />
      </form>
      <SocialLogin />
    </div>
  );
}
