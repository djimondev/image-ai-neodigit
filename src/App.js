import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./Home.js";
import { Ai } from "./vendor/@cloudflare/ai.js";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route
                path="/image"
                action={async ({ request, param }) => {
                    switch (request.method) {
                        case "POST":
                            const ai = new Ai(env.AI);
                            const inputs = {
                                prompt: param.prompt
                            };
                            const response = await ai.run("@cf/stabilityai/stable-diffusion-xl-base-1.0", inputs);
                            return new Response(response, {
                                headers: {
                                    "content-type": "image/png"
                                }
                            });
                        default:
                            return new Response(null, {
                                status: 405
                            });
                    }
                }}
            />
        </Routes>
    );
}

export default App;
