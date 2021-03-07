import { GetServerSideProps } from "next"

export default function Play() {
  return <h1>opa</h1>
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  
  return {
    props: {

    }
  }
}