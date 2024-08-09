import Container from "./container";
import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <Container className="bg-black text-white">
      <div className="flex flex-col lg:flex-row justify-center items-start gap-5 w-full">
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl font-bold">JTCareerSolution</h1>
          <p>
            Transform your career this year by joining our career training in
            Business/Product Analysis, Scrum master or Data Governance.{" "}
          </p>
        </div>
        <div className="w-full lg:w-1/4">
          <h1 className="text-3xl font-bold mb-5">Course List</h1>
          <p>Scrum Master</p>
          <p>Business Analysis</p>
          <p>Data Governance</p>
          <p>Product Analysis</p>
        </div>
        <div className="w-full lg:w-1/4">
          <h1 className="text-3xl font-bold mb-5">Contact Us</h1>
          <p>
            <strong>Email:</strong> +44 701 700 0000
          </p>
          <p>
            <strong>WhatsApp:</strong> +44 700 700 0000
          </p>
          <p>
            <strong>Address:</strong> Wichester, Liverpool road, United Kingdom
          </p>
        </div>
      </div>
      <Separator className="my-10" />
      <div className="flex justify-between items-center">
        <p>Copyright &copy; 2023 JT Careers Solutions</p>
        <div className="flex items-center justify-center gap-3">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
