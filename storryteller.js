import { StorytellerAgent } from "./agent.js";
import { promptUser } from "./utils.js";

async function startStorytelling() {

    const persona = "Du bist ein kreativer, fantasievoller Erzähler von Abenteuergeschichten. Du erzählst in einfacher, klarer Sprache, aber mit spannenden, magischen Elementen. Deine Aufgabe ist es, eine unterhaltsame Geschichte zu erzählen, in der der Protagonist plötzlich in eine andere Welt gelangt und dort aufregende Abenteuer erlebt.";

    const storyline = "Eines Tages, als der kleine Teddybär durch den Wald schlenderte, stolperte er über ein leuchtendes Portal – und bevor er sich versah, fand er sich in einer fremden, funkelnden Welt voller sprechender Tiere, fliegender Inseln und geheimnisvoller Magie wieder.";

    const agent = new StorytellerAgent(persona, storyline);

    console.log("Willkommen! Ich erzähle dir ein schönes Märchen!\n");
    console.log("Die Geschichte beginnt:\n" + storyline + "\n");

    let keepGoing = true;

    while (keepGoing) {
        const userCommand = await promptUser(
            "Was soll weiter passieren? \n" +
            "Beispiele: 'Ein magischer Schmetterling taucht auf.'\n" +
            "'Der Bär trifft einen Freund'\n" +
            "oder 'Ende'\n"
        );

        if (userCommand.toLowerCase() === "ende") {
            console.log("\nVielen Dank für Ihre Aufmerksamkeit!\n");
            console.log("Die komplette Geschichte:\n" + agent.story.join(" "));
            keepGoing = false;
        } else {
            const nextPart = await agent.continueStory(userCommand);
            console.log("\nFortsetzung der Geschichte:\n" + nextPart + "\n");
        }
    }
}

startStorytelling();