document.addEventListener('DOMContentLoaded', function () {
  const weeksContainer = document.getElementById('weeksContainer');
  const startDate = new Date("2025-05-01");
  const today = new Date();

  // Content pool
  const topics = [
    "Grace Abounds", "Spiritual Growth", "Overcoming Fear", "Faith in Action",
    "Walking in Light", "Living by the Spirit", "Joyful Endurance", "God's Mercy",
    "Power of Prayer", "Hope Eternal"
  ];
  const verses = [
    "Galatians 5:22 - The fruit of the Spirit is love, joy...",
    "John 3:16 - For God so loved the world...",
    "Isaiah 41:10 - Fear not, for I am with you...",
    "James 2:17 - Faith without action is dead.",
    "1 John 1:7 - Walk in the light...",
    "Romans 8:14 - Led by the Spirit of God...",
    "Romans 5:3 - Rejoice in suffering...",
    "Titus 3:5 - Saved not by works...",
    "Philippians 4:6 - Do not be anxious...",
    "1 Peter 1:3 - Living hope in Christ..."
  ];
  const questions = [
    "How does this verse challenge your faith?",
    "What does this verse mean to you today?",
    "What fear is God calling you to release?",
    "How can you apply this scripture in your life this week?",
    "What is God saying to you through this verse?"
  ];
  const prayers = [
    "Lift up your burdens and find peace in Him.",
    "Ask for the strength to love others deeply.",
    "Pray to trust in His presence in moments of fear.",
    "Thank God for His unending grace and guidance.",
    "Pray for boldness to live out your faith daily."
  ];

  const weeks = [];

  // Generate 260 weeks
  for (let i = 0; i < 260; i++) {
    let date = new Date(startDate);
    date.setDate(date.getDate() + (7 * i));
  
    // Convert date to the required format (YYYY-MM-DD)
    const formattedDate = date.toISOString().split("T")[0]; // "2025-05-01"
  
    weeks.push({
      date: formattedDate, // Store the formatted date
      topic: `Week ${i + 1}: ${topics[i % topics.length]}`,
      verse: verses[i % verses.length],
      question: questions[i % questions.length],
      prayer: prayers[i % prayers.length],
    });
  }
  
  // Render visible weeks (today and earlier)
  weeks.forEach((week, index) => {
    const weekDate = new Date(week.date);
    if (weekDate <= today) {
      const card = document.createElement("div");
      card.className = "week-card animate-fade-in";
      card.id = `week-${index + 1}`;
      card.innerHTML = `
        <h3>${week.topic}</h3>
        <p><strong>Date:</strong> ${week.date}</p>
        <p><strong>Verse:</strong> ${week.verse}</p>
        <p><strong>Reflection:</strong> ${week.question}</p>
        <p><strong>Prayer:</strong> ${week.prayer}</p>
      `;
      weeksContainer.appendChild(card);
    }
  });

  // Scroll to selected week
  document.getElementById("datePicker").addEventListener("change", function () {
    const selectedDate = new Date(this.value);
    const selectedIndex = weeks.findIndex(
      week => new Date(week.date).toDateString() === selectedDate.toDateString()
    );
    if (selectedIndex !== -1) {
      const targetCard = document.getElementById(`week-${selectedIndex + 1}`);
      if (targetCard) {
        targetCard.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  });
});
