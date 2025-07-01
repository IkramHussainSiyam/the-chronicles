import Container from "~/components/common/Container";
import Logo from "~/components/layout/navbar/logo";

const Footer = () => {
  return (
    <div className="py-6 border-t border-border/50">
      <Container className="my-0 sm:my-0 flex items-center justify-between">
        <div className="hidden sm:block">
          <Logo size="sm" />
        </div>
        <span className="text-muted-foreground text-center sm:text-left">
          &copy;2025{" "}
          <a
            href={"https://github.com/IkramHussainSiyam"}
            target="_blank"
            className="underline"
            rel="noopener noreferrer"
          >
            Ikram Hussain Siyam
          </a>
          . The Chronicles
        </span>
      </Container>
    </div>
  );
};

export default Footer;
