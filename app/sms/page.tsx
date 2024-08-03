import FormButton from '@/components/FormButton';
import FormInput from '@/components/FormInput';

export default function SMSLogin() {
  return (
    <div>
      <div>
        <h1>SMS Log in</h1>
        <h2>Verify your phone number</h2>
      </div>
      <form>
        <FormInput
          type='number'
          placeholder='Phone number'
          required
          errors={[]}
        />
        <FormInput
          type='number'
          placeholder='Verification code'
          required
          errors={[]}
        />
        <FormButton loading={false} text='Verify' />
      </form>
    </div>
  );
}
