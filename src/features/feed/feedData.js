export const posts = [
  {
    id: "post-1",
    author: { name: "Aanya Verma", team: "Marketing", initials: "AV" },
    timestamp: "2h ago",
    caption:
      "Had an amazing time at the kickoff session today! Energy was unmatched.",
    likes: 24,
    comments: [
      { id: "c1", author: "Rohan Mehta", text: "This looked awesome, wish I could join!" },
      { id: "c2", author: "Diya Shah", text: "Same energy next year too!" },
    ],
  },
  {
    id: "post-2",
    author: { name: "Karan Singh", team: "Operations", initials: "KS" },
    timestamp: "5h ago",
    caption: "Team huddle before the leaderboard challenge. Let's go!",
    likes: 41,
    comments: [{ id: "c3", author: "Meera Iyer", text: "Go team!" }],
  },
  {
    id: "post-3",
    author: { name: "Sara Khan", team: "HR", initials: "SK" },
    timestamp: "1d ago",
    caption: "Quick recap from today's itinerary walkthrough session.",
    likes: 12,
    comments: [],
  },
];
