import React from "react";
import { GetServerSideProps } from 'next';

type AboutProp = {
  data: string;
};

const About = ({ data }: AboutProp) => {
  return (
    <div className="container">
      <h1>Ally A</h1>
      <p>Contact:</p>
    </div>
  );
};

function fetchSomeData() {
  return "Hello World"
}

export const getServerSideProps: GetServerSideProps = async () => {
  // Fetch some data to be displayed on the settings page
  const data = await fetchSomeData();

  return {
    props: { data },
  };
};

export default About;