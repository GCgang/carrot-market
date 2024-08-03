interface FormButtonProps {
  loading: boolean;
  text: string;
}

export default function FormButton({ loading, text }: FormButtonProps) {
  return <button disabled={loading}>{loading ? '로딩 중' : text}</button>;
}
