import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="text-center max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="font-display text-8xl md:text-9xl font-bold gradient-text mb-4">
            404
          </h1>
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Sorry, the page you're looking for doesn't exist. It might have been
            moved, deleted, or you entered the wrong URL.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" asChild>
            <Link to="/">
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/work">View My Work</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
