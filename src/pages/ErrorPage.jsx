import "./ErrorPage.css";
import { Link, useRouteError } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { AlertTriangle } from "react-feather";

export default function ErrorPage() {
  const error = useRouteError();
  const { t } = useTranslation();

  let errorMessage;
  if (error?.status === 404) {
    // Extract URL from error message for 404s
    try {
      const errorData = error?.data || '';
      const urlMatch = errorData.match(/URL "([^"]+)"/);
      
      if (urlMatch && urlMatch[1]) {
        errorMessage = `${t("error-page-url")} "${urlMatch[1]}"`;
      } else {
        errorMessage = t("error-page-notFound");
      }
    } catch (e) {
      console.error("Error parsing error message:", e);
      errorMessage = t("error-page-notFound");
    }
  } else {
    errorMessage = error?.statusText || error?.message || t("error-page-unknown");
  }

  return (
    <div className="errorPage">
      <div className="errorContainer">
        <div className="errorImage">
          <AlertTriangle size={80} color="#FF6600" />
        </div>
        
        <h1 className="errorTitle">
          {error?.status === 404 
            ? t("error-page-404-title") 
            : t("error-page-generic-title")}
        </h1>
        
        <div className="errorMessage">{errorMessage}</div>
        
        <Link to="/" className="errorBackLink">
          {t("error-page-back")}
        </Link>
      </div>
    </div>
  );
}