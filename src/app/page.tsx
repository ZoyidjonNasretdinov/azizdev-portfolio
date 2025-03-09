import { Layout } from '@/layout';
import Spline from '@splinetool/react-spline/next';

export default function Home() {
  return (
    <Layout>
      <div className='overflow-hidden'>
       <main>
          <Spline
            scene="https://prod.spline.design/8iBrs9mhoxRMibO9/scene.splinecode" 
          />
        </main>
      </div>
    </Layout>
  );
}
