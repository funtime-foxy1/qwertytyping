// import Link from "next/link";
// import { Router } from "next/router";

export function TopNav({ onSwitch }) {
    return (
        <div id="topnav" className="flex justify-between items-center fixed top-0 left-0 w-screen bg-container p-4 px-8">
            <h1 className="flex gap-2 items-center">
                <div className="flex gap-1">
                    <div className="letter_title">
                        q
                    </div>
                    <div className="letter_title">
                        w
                    </div>
                    <div className="letter_title">
                        e
                    </div>
                    <div className="letter_title">
                        r
                    </div>
                    <div className="letter_title">
                        t
                    </div>
                    <div className="letter_title">
                        y
                    </div>
                </div>
                <span>typing</span>
            </h1>
            <div className="flex gap-1 items-center text-lg">
                <a onClick={() => onSwitch("about")} href="#" className="no-underline hover:underline">about</a>
                <div className="size-1 bg-white rounded-full opacity-35 mx-1"></div>
                <a onClick={() => onSwitch("links")} href="#" className="no-underline hover:underline">links</a>
            </div>
        </div>
    );
}