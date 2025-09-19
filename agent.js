import { getStream } from "./utils.js";

export class StorytellerAgent {

    constructor(persona, storyline) {
        this.persona = persona;
        this.story = [storyline]; // gespeichert als Array
    }

    async continueStory(userPrompt) {
        const messages = [
            { role: "system", content: this.persona },
            { role: "user", content: `Setze das folgende Märchen fort. Der bisherige Teil lautet: "${this.story.join(' ')}".
                Der Zuhörer möchte, dass du: "${userPrompt}". Schreibe 3 bis 5 Sätze,
                erzähle die Geschichte weiter und baue eine überraschende Wendung in die Handlung ein.
                Achte darauf, dass die Wendung kreativ und unerwartet ist, ohne die bisherigen Ereignisse unlogisch zu machen.`}
        ];

        console.log("\nDer Erzähler denkt nach...\n");
        const nextPart = await getStream(messages);
        this.story.push(nextPart);

        return nextPart; // zurückgeben, damit der Aufrufer die Fortsetzung sehen kann
    }
}
