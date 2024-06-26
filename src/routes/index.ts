import { Application } from "express";

import homeRoutes from "./home.routes";
import roomRoutes from "./room.routes";
import messageRoutes from "./message.routes";
import userRoutes from "./user.routes";
import languageRoutes from "./language.routes";
import visitRoutes from "./visit.routes";
import updateRoutes from "./update.routes";
import mailRoutes from "./mail.routes";
import leaderboardRoutes from "./leaderboard.routes";

export default class Routes {
  constructor(app: Application) {
    app.use("/api", homeRoutes);
    app.use("/api/room", roomRoutes);
    app.use("/api/message", messageRoutes);
    app.use("/api/user", userRoutes);
    app.use("/api/language", languageRoutes);
    app.use("/api/visit", visitRoutes);
    app.use("/api/update", updateRoutes);
    app.use("/api/mail", mailRoutes);
    app.use("/api/leaderboard", leaderboardRoutes);
  }
}
