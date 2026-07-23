import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-8">
      <Container>
        <p className="text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Precious Okoro.
          Built with Next.js and TypeScript.
        </p>
      </Container>
    </footer>
  );
}