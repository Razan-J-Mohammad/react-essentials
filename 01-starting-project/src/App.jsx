import reactImg from './assets/react-core-concepts.png';
import componentImg from './assets/components.png';
import {CORE_CONCEPTS} from "./data";


const reactDescriptions=['fundamental','crucial','core'];

function  genRandomInt(max){
    return Math.floor(Math.random() * (max+1));
}


function CorConcept(props){
   return(
       <li>
           <img src={props.image} alt="images"/>
           <h3>{props.title}</h3>
           <p>{props.description}</p>

       </li>
   );
}

function Header() {
    const description =reactDescriptions[genRandomInt(2)];
    return (
        <header>
        <img src={reactImg} alt="Stylized atom"/>
        <h1>React Essentials</h1>
        <p>
            {description} React concepts you will need for almost any app you are
            going to build!
        </p>
       </header>
    );
}

function App(){
    return (
        <div>
        <Header />
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        <CorConcept {...CORE_CONCEPTS[0]}/>
                        <CorConcept
                            title={CORE_CONCEPTS[1].title}
                            description={CORE_CONCEPTS[1].description}
                            image={CORE_CONCEPTS[1].image}
                        />
                        <CorConcept
                            title={CORE_CONCEPTS[2].title}
                            description={CORE_CONCEPTS[2].description}
                            image={CORE_CONCEPTS[2].image}
                        />
                        <CorConcept
                            title={CORE_CONCEPTS[3].title}
                            description={CORE_CONCEPTS[3].description}
                            image={CORE_CONCEPTS[3].image}
                        />
                    </ul>
                </section>
            </main>
        </div>
    );
}

export default App;
