import {CORE_CONCEPTS} from "./data";
import Header from "./components/header/Header";
import CorConcept from "./components/CorConcept";
import TabButton from "./components/TabButton";

function App(){
    function handelselect(slectedButton){
       console.log(slectedButton);
    }
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
                <section id ="examples">
                    <h2>Examples</h2>
                    <menu>
                     <TabButton onSelect={() =>handelselect('components')} lable='Components'/>
                     <TabButton onSelect={() =>handelselect('jsx')} lable='Jsx'/>
                     <TabButton onSelect={() =>handelselect('props')} lable='Props'/>
                     <TabButton onSelect={() =>handelselect('state')} lable='State'/>
                    </menu>
                    Dynamic Content
                </section>
            </main>
        </div>
    );
}

export default App;
