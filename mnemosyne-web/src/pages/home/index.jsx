import Header from "../../components/header";
import "./home.css";

const Home = () => {
    return (
        <>
           
           <Header></Header>
            <main className="app-main">

                <h1>Meus momentos</h1>

                <div className="memories-container">

                    <div className="memory-card">

                        <div className="image"></div>

                        <h2>Meu afilhado!</h2>

                        <p>Neste dia recebi a notiícia de ser padrinho...</p>

                    </div>

                    <div className="memory-card">

                        <div className="image"></div>

                        <h2>Meu afilhado!</h2>

                        <p>Neste dia recebi a notiícia de ser padrinho...</p>

                    </div>

                    <div className="memory-card">

                        <div className="image"></div>

                        <h2>Meu afilhado!</h2>

                        <p>Neste dia recebi a notiícia de ser padrinho...</p>

                    </div>

                    <div className="memory-card">

                        <div className="image"></div>

                        <h2>Meu afilhado!</h2>

                        <p>Neste dia recebi a notiícia de ser padrinho...</p>

                    </div>

                    <div className="memory-card">

                        <div className="image"></div>

                        <h2>Meu afilhado!</h2>

                        <p>Neste dia recebi a notiícia de ser padrinho...</p>

                    </div>

                    <div className="memory-card">

                        <div className="image"></div>

                        <h2>Meu afilhado!</h2>

                        <p>Neste dia recebi a notiícia de ser padrinho...</p>

                    </div>

                </div>

            </main>

            <footer className="app-footer">

                <p>Mnemosyne - Ariel Paixão dos Santos</p>

            </footer>
        </>
    );
}

export default Home;