import Spline from '@splinetool/react-spline/next';
import { Layout } from '@/layout';
import React from 'react'

const AboutPage = () => {
  return (
    <Layout>
      <main>
        <Spline
          scene="https://prod.spline.design/bpcyO7CtwLDleZJh/scene.splinecode" 
        />
      </main>
    </Layout>
  )
}

export default AboutPage