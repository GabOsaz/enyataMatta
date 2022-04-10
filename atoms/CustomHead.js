import Head from 'next/head'

function CustomHead({ title, meta, link }) {
  return (
    <Head>
        <title> { title } </title>
        <meta name={meta.name} content={meta.content}/>
        <link rel={link.rel} href={link.href} />
    </Head>
  )
}

export default CustomHead