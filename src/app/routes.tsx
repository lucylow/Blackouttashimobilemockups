import { createBrowserRouter } from "react-router";
import { Home } from "./screens/Home";
import { Wallet } from "./screens/Wallet";
import { Swarm } from "./screens/Swarm";
import { Stake } from "./screens/Stake";
import { Profile } from "./screens/Profile";
import { Welcome } from "./screens/Welcome";
import { Notifications } from "./screens/Notifications";
import { Identity } from "./screens/Identity";
import { MissionControl } from "./screens/MissionControl";
import { AgentDetail } from "./screens/AgentDetail";
import { AgentFleet } from "./screens/AgentFleet";
import { Governance } from "./screens/Governance";
import { Emergency } from "./screens/Emergency";
import { MissionHistory } from "./screens/MissionHistory";
import { Analytics } from "./screens/Analytics";
import { NetworkHealth } from "./screens/NetworkHealth";
import { TaskAssignment } from "./screens/TaskAssignment";
import { ScenarioSelector } from "./screens/ScenarioSelector";
import { Layout } from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/welcome",
    Component: Welcome,
  },
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "wallet", Component: Wallet },
      { path: "swarm", Component: Swarm },
      { path: "stake", Component: Stake },
      { path: "profile", Component: Profile },
      { path: "notifications", Component: Notifications },
      { path: "identity", Component: Identity },
      { path: "mission/:id", Component: MissionControl },
      { path: "agent/:id", Component: AgentDetail },
      { path: "fleet", Component: AgentFleet },
      { path: "governance", Component: Governance },
      { path: "emergency", Component: Emergency },
      { path: "history", Component: MissionHistory },
      { path: "analytics", Component: Analytics },
      { path: "network", Component: NetworkHealth },
      { path: "task/new", Component: TaskAssignment },
      { path: "scenarios", Component: ScenarioSelector },
    ],
  },
]);