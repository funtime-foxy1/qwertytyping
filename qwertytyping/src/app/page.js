'use client'

import { TopNav } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function Home() {
    // const router = useRouter();
    // const [] = useState();

    const onswitch = (tab) => {
        console.log("onSwitch:", tab);
        router.push("/" + tab, { scroll: true });
    };
    return (
        <div>
            <TopNav onSwitch={(tab) => onswitch(tab)} />

            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route>

                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
