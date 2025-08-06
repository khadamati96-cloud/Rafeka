import { Text } from '@/components/ui/BrandComponents';
import Header from '@/components/ui/Header';

export default function Home() {
  return (
    <>
      <Header />
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'calc(100vh - 70px)', // طرح ارتفاع الهيدر
        backgroundColor: 'var(--bg-primary)'
      }}>
        <Text size="5xl" color="brand" as="h1">
          رافقة
        </Text>
      </div>
    </>
  );
}
