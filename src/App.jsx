import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  const users = [
    {
      userName: "PerozzoLeonardo",
      name: "Sheepylp",
      isFollowing: true,
    },
    {
      userName: "Marioha_",
      name: "Marioha",
      isFollowing: true,
    },
    {
      userName: "SauryBeltres",
      name: "Saury - eFC/ CPU-X",
      isFollowing: true,
    },
    {
      userName: "Digital_Strider",
      name: "DigitalStrider",
      isFollowing: false,
    },
  ];
  return (
    <section className="App">
      {users.map((user) => {
        const { userName, name, isFollowing } = user;
        return (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        );
      })}
    </section>
  );
}
