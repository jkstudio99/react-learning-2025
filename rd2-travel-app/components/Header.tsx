import { cn } from "lib/utils";
import { useLocation } from "react-router";
import dashboard from '../app/routes/admin/dashboard';
import { cp } from "fs";

interface Props {
  title: string;
  description: string;
}

useLocation()




const Header = ({ title, description }: Props) => {
  const location = useLocation();

  return (
    <header className="header">
      <article>
        <h1
          className={cn(
            "text-dark-100",
            location.pathname === "/"
              ? "text-2xl md:text-4xl font-bold"
              : "text-xl md:text-4xl font-semibold"
          )}
        >
          {title}
        </h1>
                <p
          className={cn(
            "text-grey-100 font-normal",
            location.pathname === "/"
              ? "text-base md:text-base-lg"
              : "text-sm md:text-lg"
          )}
        >
          {description}
        </p>
      </article>
    </header>
  );
};

export default Header;


