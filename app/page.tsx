import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <div>
        <span>🥕</span>
        <h1>당근</h1>
        <h2>당근 마켓</h2>
      </div>
      <div>
        <Link href='/create-account'>시작하기</Link>
        <div>
          <span>이미 계정이 있으신가요?</span>
          <Link href='/login'>로그인</Link>
        </div>
      </div>
    </div>
  );
}
