import { useRouter } from "next/router";
import Loading from "../components/Loading/Loading";
import { useWhoami } from "../services/User";
const withAuth = (Component) => {
  const Auth = (props) => {
    const { data: user, isLoading } = useWhoami();
    const router = useRouter();
    if (isLoading) return <Loading />;

    // If user is not logged in, return login component
    if (user?.error) {
      if (typeof window !== "undefined") {
        router.push("/login");
      }
      return <Loading />;
    }

    // If user is logged in, return original component
    return <Component {...props} user={user} />;
  };

  // Copy getInitial props so it will run as well
  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
};

export default withAuth;
