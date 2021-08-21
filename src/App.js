import Layout from "./components/layout/Layout";
import Profile from "./components/profile/Profile";
import Socials from "./components/socials/Socials";
import Education from "./components/education/Education";
import Skills from "./components/skills/Skills";
import Project from "./components/projects/Project";
import Line from "./components/Line/Line";
import Header from "./components/header/Header";

function App() {
  return (
    <Layout>
      <Profile />
      <Socials />
      <Line />
      <Education />
      <Skills />
      <Line />
      <Project />
      <Line />
      <Header />
    </Layout>
  );
}

export default App;
