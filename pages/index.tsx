import Head from "next/head";
import Image from "next/image";
import { useState, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyD4SuwaSd3ibevuoA0s-9ul6glVY6lMS5g",
    authDomain: "clashfyi.firebaseapp.com",
    projectId: "clashfyi",
    storageBucket: "clashfyi.appspot.com",
    messagingSenderId: "985722906823",
    appId: "1:985722906823:web:4720fdbe72d89a766cb6e2",
};
const app = initializeApp(firebaseConfig);
import { getFirestore, doc, setDoc } from "firebase/firestore";
const db = getFirestore(app);
export default function Home() {
    const [email, setEmail] = useState("");
    const emailInput = useRef<HTMLInputElement>(null);
    async function submitForm(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (email === '' ) return toast.error("Please enter an email!");
        await setDoc(doc(db, "emails", email), {});
        toast.success(
            "Thanks for subscribing! We will notify you when we launch!"
        );
        emailInput.current ? emailInput.current.value = "" : null;
    }
    return (
        <>
            <Head>
                <title>
                    clash.fyi | Your one stop shop for Clash of Clans bases
                </title>
                <meta
                    name="description"
                    content="clash.fyi is a website that provides you with the best Clash of Clans bases for every town hall level. We also provide you with the best base layouts for every league and trophy range."
                />
                <meta charSet="utf-8"></meta>

                <meta
                    name="keywords"
                    content="clash of clans, best clash of clans bases, coc, coc bases, th 3, th 4, th 5, th 6, th 7, th 8, th 9, th 10, th 11, th 12, th 13, th 14, th 15"
                ></meta>

                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                ></meta>
            </Head>
            <Toaster />
            <div className="w-screen min-h-screen bg-white flex items-center overflow-x-hidden">
                <div className="max-w-7xl w-[95%] mx-auto space-y-4">
                    <h1 className="title text-6xl font-bold text-black leading-snug">
                        Your <span className="text-red-500">one stop shop</span>{" "}
                        <br />
                        for{" "}
                        <span className="text-amber-500">
                            Clash of Clans bases
                        </span>
                    </h1>
                    <h2 className="text-xl">
                        Coming soon... Interested? Join our mailing list:
                    </h2>
                    <form
                        className="flex gap-2 flex-wrap  text-lg"
                        onSubmit={submitForm}
                    >
                        <input
                            type="email"
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-slate-200 p-2 rounded w-64 focus:outline-none"
                            ref={emailInput}
                        ></input>
                        <input
                            type="submit"
                            value="Submit"
                            className="bg-red-500 p-2 rounded text-white cursor-pointer hover:scale-110 active:scale-95 transition ease-in-out"
                        ></input>
                    </form>
                    <p className="text-xs text-slate-500">
                        This material is unofficial and is not endorsed by
                        Supercell.<br/> For more information see Supercell&apos;s Fan
                        Content Policy:
                        <a href="https://www.supercell.com/fan-content-policy">
                            www.supercell.com/fan-content-policy
                        </a>
                        .
                    </p>
                </div>
            </div>
        </>
    );
}
