import {LearningGoals} from "../components/pages/LearningGoals";
import {Users} from "../components/pages/Users";

export const homeRoutes = [
  {
    path: "learning_goals",
    children: <LearningGoals />
  },
  {
    path: "users",
    children: <Users />
  }
];
