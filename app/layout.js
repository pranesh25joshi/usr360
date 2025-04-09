import "./globals.css";

export const metadata = {
  title: "usr360",
  description: "Visualize username availability as a tree 🌳",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
