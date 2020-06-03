import Layout from "../components/Layout";
import React from "react";
import Error from "./_error";

export default class About extends React.Component {
  static async getInitialProps() {
    const res = await fetch("https://api.github.com/users/millord");
    const data = await res.json();
    const statusCode = res.status > 200 ? res.status : false;
    return { user: data, statusCode };
  }
  render() {
    const { statusCode, user } = this.props;
    if (statusCode) {
      <Error statusCode={statusCode} />;
    }
    return (
      <Layout title="About">
        <p>{user.name}</p>
        <img src={user.avatar_url} height="200px" />
      </Layout>
    );
  }
}
