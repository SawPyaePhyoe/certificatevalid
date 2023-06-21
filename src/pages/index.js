import HomePage from "@/components/HomePage";
import Modal from "@/components/Modal";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Check Validation code-EIT Learning Campus"
        />
        <title>Check Certificate-EIT Learning Campus</title>
      </Head>
      <HomePage />
      <Modal />
    </>
  );
}
