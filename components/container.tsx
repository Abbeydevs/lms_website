import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <section
      className={cn(
        "px-5 md:px-10 lg:px-20 py-20 2xl:max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </section>
  );
};

export default Container;
