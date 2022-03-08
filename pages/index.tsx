import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import DynamicForm from '../src/components/dynamic-form'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Radwan - React Exam</title>
        <meta name="description" content="React Exam for Ulventech, pre-interview" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DynamicForm />
    </div>
  )
}

export default Home
