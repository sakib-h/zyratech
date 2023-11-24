import { Epilogue } from "next/font/google";
import "@styles/globals.css";

const epilogue = Epilogue({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export const metadata = {
    title: "Zyratech - Web Solutions  ",
    description: "",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={epilogue.className}>{children}</body>
        </html>
    );
}
