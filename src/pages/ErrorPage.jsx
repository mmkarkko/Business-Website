import "./ErrorPage.css";
import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  let errorMessage;
  if (error?.status === 404) {
    errorMessage = `Page "${error.data.split('URL "')[1].split('"')[0]}" was not found.`;
  } else {
    errorMessage = error?.statusText || error?.message || "Unknown error.";
  }

  return (
    <div className="errorPage">
      <div className="errorTitle">
        {error?.status === 404 ? "Page not found." : "Oops, something went wrong."}
      </div>
      <div className="errorMessage">{errorMessage}</div>
      <Link to="/">Takaisin etusivulle</Link>
    </div>
  );
}