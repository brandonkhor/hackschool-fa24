// Import Navbar from the components folder
import "@/styles/globals.css";
import Navbar from "../components/Navbar/index.jsx";

export default function App({ Component, pageProps }) {
  return (
    <div>
      {/* Add your navbar component here */}
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
