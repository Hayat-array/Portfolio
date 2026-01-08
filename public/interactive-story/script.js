const customName = document.getElementById('customName');
const customPlace = document.getElementById('customPlace');
const customObject = document.getElementById('customObject');
const customAction = document.getElementById('customAction');
const randomizeBtn = document.getElementById('randomizeBtn');
const storyContainer = document.getElementById('storyContainer');
const storyText = document.getElementById('storyText');

const templates = [
    "It was a dark and stormy night when :name: arrived at :place:. Clutching the :object: tightly, they finally :action:!",
    ":name: never believed in magic until they found the :object: hidden deep within :place:. Without hesitation, they :action: and changed the world forever.",
    "The legend spoke of a hero named :name: who would journey to :place:. With the power of the :object:, they :action: and saved the kingdom.",
    "Nobody dared to enter :place:, but :name: was not afraid. Armed only with a rusty :object:, they :action: and proved everyone wrong.",
    "In the futuristic city of :place:, :name: discovered a glitch in the simulation. Using the :object:, they :action: and rebooted reality."
];

const randomValues = {
    names: ["Alice", "Bob", "Charlie", "Diana", "Evan", "Fiona"],
    places: ["the Haunted Mansion", "Mars Colony 7", "the Ancient Library", "Cyber-Tokyo", "the Mystic Forest"],
    objects: ["Golden Key", "Laser Sword", "Ancient Scroll", "Time Machine", "Magic Wand"],
    actions: ["defeated the Shadow King", "unlocked the secret door", "traveled back in time", "summoned a dragon", "escaped the trap"]
};

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function generateStory() {
    let name = customName.value.trim();
    let place = customPlace.value.trim();
    let object = customObject.value.trim();
    let action = customAction.value.trim();

    // Fill empty fields with random values
    if (!name) name = getRandomElement(randomValues.names);
    if (!place) place = getRandomElement(randomValues.places);
    if (!object) object = getRandomElement(randomValues.objects);
    if (!action) action = getRandomElement(randomValues.actions);

    // Update placeholders in UI to show what was used (optional, purely visual feedback)
    customName.placeholder = name;
    customPlace.placeholder = place;
    customObject.placeholder = object;
    customAction.placeholder = action;

    // Pick a random template
    let story = getRandomElement(templates);

    // Replace placeholders
    // Using a simple replaceAll or regex to ensure all instances are caught
    story = story.replace(/:name:/g, `<span class="highlight">${name}</span>`);
    story = story.replace(/:place:/g, `<span class="highlight">${place}</span>`);
    story = story.replace(/:object:/g, `<span class="highlight">${object}</span>`);
    story = story.replace(/:action:/g, `<span class="highlight">${action}</span>`);

    // Display
    storyText.innerHTML = story;
    storyContainer.classList.remove('hidden');
    storyContainer.classList.add('visible');
}

randomizeBtn.addEventListener('click', generateStory);
