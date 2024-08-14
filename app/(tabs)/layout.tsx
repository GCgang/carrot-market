import TabBar from '@/components/TabBar';

export default function Tablayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
      <TabBar />
    </div>
  );
}
