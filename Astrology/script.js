const zodiacData = [
    { sign: "Capricorn ♑", startMonth: 12, startDay: 22, endMonth: 1, endDay: 19, dateStr: "Dec 22 - Jan 19", traits: "Disciplined, ambitious, practical, and deeply patient.", fortunes: ["Your hard work is quiet but notice is being taken. Expect a breakthrough.", "A structural shift today yields major long-term security."] },
    { sign: "Aquarius ♒", startMonth: 1, startDay: 20, endMonth: 2, endDay: 18, dateStr: "Jan 20 - Feb 18", traits: "Innovative, independent, humanitarian, and highly original.", fortunes: ["An eccentric idea floating in your mind holds real merit. Write it down.", "Collaborating with like-minded individuals unlocks unexpected pathways today."] },
    { sign: "Pisces ♓", startMonth: 2, startDay: 19, endMonth: 3, endDay: 20, dateStr: "Feb 19 - Mar 20", traits: "Compassionate, artistic, intuitive, and deeply empathetic.", fortunes: ["Trust your intuition over cold logic today; your gut knows the way.", "A creative wave hits you. Let go of strict structures and build dynamically."] },
    { sign: "Aries ♈", startMonth: 3, startDay: 21, endMonth: 4, endDay: 19, dateStr: "Mar 21 - Apr 19", traits: "Eager, dynamic, quick-witted, and highly competitive.", fortunes: ["A burst of solar energy propels you forward. Take charge of that stagnant project.", "Do not mistake impatience for passion. Breathe before acting."] },
    { sign: "Taurus ♉", startMonth: 4, startDay: 20, endMonth: 5, endDay: 20, dateStr: "Apr 20 - May 20", traits: "Strong, dependable, sensual, and boundlessly creative.", fortunes: ["Financial focus pays off today. Treat yourself to comfort tonight.", "Stability is your superpower; stand your ground against chaotic changes."] },
    { sign: "Gemini ♊", startMonth: 5, startDay: 21, endMonth: 6, endDay: 20, dateStr: "May 21 - Jun 20", traits: "Versatile, expressive, curious, and incredibly kind.", fortunes: ["A conversation sparks a brand new cognitive direction. Be open to debates.", "Your adaptability will save the day when a surprise schedule change drops."] },
    { sign: "Cancer ♋", startMonth: 6, startDay: 21, endMonth: 7, endDay: 22, dateStr: "Jun 21 - Jul 22", traits: "Intuitive, sentimental, compassionate, and fiercely protective.", fortunes: ["Home is where your energy replenishes today. Protect your emotional space.", "A deep, comforting connection with a loved one smooths over old friction."] },
    { sign: "Leo ♌", startMonth: 7, startDay: 23, endMonth: 8, endDay: 22, dateStr: "Jul 23 - Aug 22", traits: "Dramatic, proud, self-assured, and wildly generous.", fortunes: ["The spotlight finds you naturally today. Lead with your inherent warmth.", "A creative risk yields satisfying results. Do not be afraid to be bold."] },
    { sign: "Virgo ♍", startMonth: 8, startDay: 23, endMonth: 9, endDay: 22, dateStr: "Aug 23 - Sep 22", traits: "Loyal, analytical, kind, and exceptionally hardworking.", fortunes: ["Your meticulous planning prevents a massive error today. Trust your systems.", "Perfectionism is a trap. Accept 'good enough' to maintain mental sanity."] },
    { sign: "Libra ♎", startMonth: 9, startDay: 23, endMonth: 10, endDay: 22, dateStr: "Sep 23 - Oct 22", traits: "Diplomatic, artistic, harmonious, and fair-minded.", fortunes: ["Balance returns to a rocky relationship if you act as the mediator.", "Surround yourself with art or music today to realign your inner scale."] },
    { sign: "Scorpio ♏", startMonth: 10, startDay: 23, endMonth: 11, endDay: 21, dateStr: "Oct 23 - Nov 21", traits: "Passionate, stubborn, resourceful, and intensely brave.", fortunes: ["A mystery unravels. Look past the surface layer of a complex problem.", "Your internal magnetism is high today. Use it to negotiate better terms."] },
    { sign: "Sagittarius ♐", startMonth: 11, startDay: 22, endMonth: 12, endDay: 21, dateStr: "Nov 22 - Dec 21", traits: "Generous, idealistic, humorous, and fundamentally free-spirited.", fortunes: ["An itch for adventure might lead to a spontaneous, beautiful trip or purchase.", "Optimism acts as your shield today. Keep looking toward the positive horizon."] }
];

function revealDestiny() {
    const dateInput = document.getElementById('birthdate').value;
    
    if (!dateInput) {
        alert("Please enter your birth date first!");
        return;
    }

    const birthDate = new Date(dateInput);
    const month = birthDate.getMonth() + 1;
    const day = birthDate.getDate();
    let matchedZodiac = null;

    for (let z of zodiacData) {
        if ((month === z.startMonth && day >= z.startDay) || (month === z.endMonth && day <= z.endDay)) {
            matchedZodiac = z;
            break;
        }
    }

    if (!matchedZodiac) {
        matchedZodiac = zodiacData.find(z => z.sign.includes("Capricorn"));
    }

    const randomIndex = Math.floor(Math.random() * matchedZodiac.fortunes.length);
    const dailyFortune = matchedZodiac.fortunes[randomIndex];

    document.getElementById('zodiacSign').innerText = matchedZodiac.sign;
    document.getElementById('zodiacDate').innerText = matchedZodiac.dateStr;
    document.getElementById('description').innerText = matchedZodiac.traits;
    document.getElementById('horoscope').innerText = dailyFortune;
    document.getElementById('resultCard').style.display = 'block';
}
