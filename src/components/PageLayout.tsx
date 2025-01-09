interface PageLayoutProps {
  children: React.ReactNode;
  id: string;
  customClass?: string;
}

export default function PageLayout({
  children,
  id,
  customClass,
}: PageLayoutProps) {
  return (
    <section
      id={`${id}`}
      className={`p-2 md:p-4 lg:p-6 h-screen w-full ${customClass}`}
    >
      {children}
    </section>
  );
}
