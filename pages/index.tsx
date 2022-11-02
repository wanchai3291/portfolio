import Head from 'next/head'
import Image from 'next/image'
import Headers from '../components/Header'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import WorkingExperience from '../components/WorkingExperience'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] h-screen text-white snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Portfolio</title>
      </Head>
      <Headers />
      <section id='hero' className="snap-center">
        <Hero />
      </section>
      <section id='experience' className="snap-center">
        <WorkingExperience/>
      </section>
      <section id='skills' className="snap-start">
        <Skills/>
      </section>
    </div>
  )
}
