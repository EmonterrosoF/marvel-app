export const Footer = () => {
  return (
    <footer
      className="dark:bg-gray-900 py-10 px-6 dark:text-white bg-slate-400"
      style={{ marginTop: "70px" }}
    >
      <span>&copy; </span>Derechos reservados{" "}
      <span>{new Date().getFullYear()}</span>
    </footer>
  );
};
