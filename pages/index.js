import Head from 'next/head'
import CustomHead from '../atoms/CustomHead'
import LoginForm from '../organisms/LoginForm'
import styles from '../styles/Home.module.css'
import UnauthenticatedLayout from '../templates/UnauthenticatedLayout'

export default function Home() {
  return (
    <div className={styles.container}>
      <CustomHead 
        title = 'Enyata Matta' 
        meta = {{ name:'About Enyata', content:'More about Enyata' }} 
        link = {{ rel: 'icon', href:'/favicon.ico' }}
      />

      <UnauthenticatedLayout>
        <LoginForm />
      </UnauthenticatedLayout>
    </div>
  )
}
