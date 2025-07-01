import TextEditor from "~/components/common/editor";

const ProfileAboutPage = () => {
  const htmlContent = `<h2 id="hello-guys-it-s-about-me-">Hello Guys. It&#39;s About me.</h2>
<p>I&#39;m Ikram Hussain Siyam. A <strong>Frontend Web Developer.</strong></p>
<p>Check out my <a href="https://github.com/IkramHussainSiyam">GitHub</a> for Details.</p>
`;

  return (
    <div>
      <TextEditor value={htmlContent} hideToolbar readOnly />
    </div>
  );
};

export default ProfileAboutPage;
